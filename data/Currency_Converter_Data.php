<?php

namespace Wilnet\Currency_Converter;

/**
 * Class responsible for fetching data from external source and serve it
 *
 */

class Currency_Converter_Data implements Currency_Converter_Data_Interface
{
    public const CURRENCY_CONVERTER_DATA_META_KEY = '_currency_converter_data';
    public const CURRENCY_CONVERTER_TRANSIENT_NAME = '_currency_converter_data';

    private string $base_currency = 'EUR';
    private ?object $currency_data_provider = null;
    private int $number_of_hours_cached = 12;

	/**
	 * Setup data provider of data source depends on plugin settings.
	 */

    public function __construct()
    {
        $currency_converter_settings = get_option(Currency_Converter_Admin::CURRENCY_CONVERTER_OPTIONS_META_KEY);
        if (!empty($currency_converter_settings['currency_converter_field_api_provider'])) {
            if ($currency_converter_settings['currency_converter_field_api_provider'] == 'fixer.io') {
                $this->currency_data_provider = new Currency_Converter_Data_FixerIo();
            }
            if ($currency_converter_settings['currency_converter_field_api_provider'] == 'exchangeratesapi.io') {
                $this->currency_data_provider = new Currency_Converter_Data_ExchangeratesapiIo();
            }
        }
        if (!empty($currency_converter_settings['currency_converter_field_base_currency'])) {
            $this->base_currency = $currency_converter_settings['currency_converter_field_base_currency'];
        }
    }

	/**
	 * Return data fetched from external source
	 * Data are cached using WordPress transients
	 *
	 * @return array|null array with currency rates
	 */

    public function getData(): ?array
    {
        if (false === ($data = get_transient(self::CURRENCY_CONVERTER_TRANSIENT_NAME))) {
            if ($this->currency_data_provider) {
                $data = $this->currency_data_provider->getData();
                if ($data) {
                    update_option(self::CURRENCY_CONVERTER_DATA_META_KEY, $data);
                    set_transient(self::CURRENCY_CONVERTER_TRANSIENT_NAME, $data, $this->getNumberOfHoursCached() * HOUR_IN_SECONDS);
                } else {
                    $data = get_option(self::CURRENCY_CONVERTER_DATA_META_KEY);
                }
            } else {
                $data = array(
                    'success' => false,
                    'message' => __("Currency Converter plugin not configured.")
                );
            }
        }
        return $data;
    }

	/**
	 * remove transient, so data will be refetched next time
	 * @return void
	 */

    public function forceRefreshData(): void
    {
        delete_transient(self::CURRENCY_CONVERTER_TRANSIENT_NAME);
        $this->getData();
    }

	/**
	 * Check if connection is correct
	 *
	 * @return array success and error message if apear
	 */

    public function validateConnection(): array
    {
        return $this->currency_data_provider->validateConnection();
    }

	/**
	 * Check if data provider is choosen in plugin's settings
	 * @return bool
	 */

    public function isInicialized(): bool
    {
        return !empty($this->currency_data_provider);
    }

	/**
	 * Here you can find filter allows modify number of hours data are cached
	 * @return int number of hours that data should be cached
	 */

    public function getNumberOfHoursCached(): int
    {
        return apply_filters('currency_converter_number_of_hours_cached', $this->number_of_hours_cached);
    }
}
