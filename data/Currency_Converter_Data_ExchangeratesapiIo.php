<?php
/**
 * Currency_Converter_Data_ExchangeratesapiIo class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * exchangeratesapi.io data provider integration
 */
class Currency_Converter_Data_ExchangeratesapiIo implements Currency_Converter_Data_Interface {

	public const API_URL = 'http://api.exchangeratesapi.io/v1/';

	/**
	 * The API key.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $api_key    The FixerIo API key.
	 */
	private string $api_key = '';

	/**
	 * Base currency.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $base_currency    Base currency.
	 */
	private string $base_currency = 'EUR';

	/**
	 * Setup api key and base currency
	 */
	public function __construct() {
		$options = get_option( Currency_Converter_Admin::CURRENCY_CONVERTER_OPTIONS_META_KEY );
		if ( ! empty( $options['currency_converter_exchangeratesapi_key'] ) ) {
			$this->api_key = $options['currency_converter_exchangeratesapi_key'];
		}
		if ( ! empty( $options['currency_converter_field_base_currency'] ) ) {
			$this->base_currency = $options['currency_converter_field_base_currency'];
		}
	}

	/**
	 * Fetch and convert fetched data to the format used in plugin
	 *
	 * @return array|false|null
	 */
	public function get_data(): ?array {
		$data = array();
		$ch   = curl_init( self::API_URL . 'latest' . '?access_key=' . $this->api_key . '&base=' . $this->base_currency );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		$json = curl_exec( $ch );
		curl_close( $ch );
		$response = json_decode( $json, true );
		if ( isset( $response['success'] ) && $response['success'] ) {
			if ( isset( $response['success'] ) ) {
				$data['success'] = $response['success'];
			}
			if ( isset( $response['timestamp'] ) ) {
				$data['update_timestamp'] = $response['timestamp'];
			}
			if ( isset( $response['base'] ) ) {
				$data['base_currency'] = $response['base'];
			}
			if ( isset( $response['date'] ) ) {
				$data['date'] = $response['date'];
			}
			if ( isset( $response['rates'] ) ) {
				$data['rates'] = $response['rates'];
			}
			return $data;
		} else {
			return [ 'success' => false ];
		}
	}

	/**
	 * Check if connections is ok
	 *
	 * @return array success and error message if anything goes wrong
	 */
	public function validate_connection(): array {
		$result = array(
			'success' => false,
			'message' => __( 'Unknown error. Please contact us to resolve problem', 'currency-converter' ),
		);

		$ch = curl_init( self::API_URL . 'latest' . '?access_key=' . $this->api_key . '&base=' . $this->base_currency );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		$json = curl_exec( $ch );
		curl_close( $ch );
		$response = json_decode( $json, true );

		if ( isset( $response['error'] ) && isset( $response['error']['message'] ) ) {
			$result['message'] = __( $response['error']['message'], 'currency-converter' );
		} elseif ( isset( $response['success'] ) && $response['success'] ) {
			$result['message'] = __( 'Connection to exchangeratesapi.io successful.', 'currency-converter' );
			$result['success'] = true;
		}
		return $result;
	}
}
