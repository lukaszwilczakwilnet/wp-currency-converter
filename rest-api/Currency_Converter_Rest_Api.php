<?php
/**
 * Currency_Converter_Rest_Api Class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * The REST API functionality of the plugin.
 *
 * @link       https://wilnet.eu
 * @since      1.0.0
 *
 * @package    Currency_Converter
 * @subpackage Currency_Converter/public
 */
class Currency_Converter_Rest_Api {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of the plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 *  Register enpoint to get options. Standard settings enpoint from WP returns only few of options.
	 */
	public function rest_api_get_option_endpoint() {
		register_rest_route(
			'wp/v2',
			'/options/',
			array(
				'methods'             => 'GET',
				'callback'            => [ $this, 'get_option' ],
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	/**
	 * Return options for this plugin
	 *
	 * @param array $data name of option
	 * @return mixed value of option
	 */
	public function get_option( array $data ):mixed {
		return get_option( $data['key'] );
	}

	/**
	 * Register endpoint to return plugin's currency converter settings
	 *
	 * @return void
	 */
	public function rest_api_get_currency_converter_options_endpoint() {
		register_rest_route(
			'wp/v2',
			'/currency_converter_options/',
			array(
				'methods'             => 'GET',
				'callback'            => [ $this, 'get_currency_converter_options' ],
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	/**
	 * Callback to return current plugin options
	 *
	 * @return array with currency rates
	 */
	public function get_currency_converter_options(): array {
		return get_option( Currency_Converter_Admin::CURRENCY_CONVERTER_OPTIONS_META_KEY );
	}

	/**
	 * register endpoint to return currency rates
	 *
	 * @return void
	 */
	public function rest_api_get_currency_converter_rates_endpoint(): void {
		register_rest_route(
			'wp/v2',
			'/currency_converter_rates/',
			array(
				'methods'             => 'GET',
				'callback'            => [ $this, 'get_currency_converter_rates' ],
				'permission_callback' => function () {
					return true;
				},
			)
		);
	}

	/**
	 * Return currency rates
	 *
	 * @return array|null return saved currency rates
	 */
	public function get_currency_converter_rates(): array|null {
		$currency_converter_data = new Currency_Converter_Data();
		return $currency_converter_data->get_data();
	}
}
