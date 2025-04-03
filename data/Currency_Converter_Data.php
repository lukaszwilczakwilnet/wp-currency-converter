<?php
/**
 * Currency_Converter_Data Class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * Class responsible for fetching data from external source and serve it
 */
class Currency_Converter_Data implements Currency_Converter_Data_Interface {

	public const CURRENCY_CONVERTER_DATA_META_KEY  = '_currency_converter_data';
	public const CURRENCY_CONVERTER_TRANSIENT_NAME = '_currency_converter_data';

	/**
	 * Base currency.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $base_currency    Base currency.
	 */
	private string $base_currency = 'EUR';

	/**
	 * Currency data provider.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      object    $currency_data_provider    Currency data provider.
	 */
	private ?object $currency_data_provider = null;

	/**
	 * Cache expiration period in hours.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $number_of_hours_cached    Cache expiration period in hours.
	 */
	private int $number_of_hours_cached = 12;

	/**
	 * Setup data provider of data source depends on plugin settings.
	 */
	public function __construct() {
		$currency_converter_settings = get_option( Currency_Converter_Admin::CURRENCY_CONVERTER_OPTIONS_META_KEY );
		if ( ! empty( $currency_converter_settings['currency_converter_field_api_provider'] ) ) {
			if ( 'fixer.io' === $currency_converter_settings['currency_converter_field_api_provider'] ) {
				$this->currency_data_provider = new Currency_Converter_Data_FixerIo();
			}
			if ( 'exchangeratesapi.io' === $currency_converter_settings['currency_converter_field_api_provider'] ) {
				$this->currency_data_provider = new Currency_Converter_Data_ExchangeratesapiIo();
			}
		}
		if ( ! empty( $currency_converter_settings['currency_converter_field_base_currency'] ) ) {
			$this->base_currency = $currency_converter_settings['currency_converter_field_base_currency'];
		}
	}

	/**
	 * Return data fetched from external source
	 * Data are cached using WordPress transients
	 *
	 * @return array|null array with currency rates
	 */
	public function get_data(): ?array {
		$data = get_transient( self::CURRENCY_CONVERTER_TRANSIENT_NAME );
		if ( false === $data ) {
			if ( $this->currency_data_provider ) {
				$data = $this->currency_data_provider->get_data();
				if ( $data ) {
					update_option( self::CURRENCY_CONVERTER_DATA_META_KEY, $data );
					set_transient( self::CURRENCY_CONVERTER_TRANSIENT_NAME, $data, $this->getNumberOfHoursCached() * HOUR_IN_SECONDS );
				} else {
					$data = get_option( self::CURRENCY_CONVERTER_DATA_META_KEY );
				}
			} else {
				$data = array(
					'success' => false,
					'message' => __( 'Currency Converter plugin not configured.' ),
				);
			}
		}
		return $data;
	}

	/**
	 * remove transient, so data will be refetched next time
	 *
	 * @return void
	 */
	public function force_refresh_data(): void {
		delete_transient( self::CURRENCY_CONVERTER_TRANSIENT_NAME );
		$this->get_data();
	}

	/**
	 * Check if connection is correct
	 *
	 * @return array success and error message if apear
	 */
	public function validate_connection(): array {
		return $this->currency_data_provider->validate_connection();
	}

	/**
	 * Check if data provider is choosen in plugin's settings
	 *
	 * @return bool
	 */
	public function is_inicialized(): bool {
		return ! empty( $this->currency_data_provider );
	}

	/**
	 * Here you can find filter allows modify number of hours data are cached
	 *
	 * @return int number of hours that data should be cached
	 */
	public function getNumberOfHoursCached(): int {
		return apply_filters( 'currency_converter_number_of_hours_cached', $this->number_of_hours_cached );
	}
}
