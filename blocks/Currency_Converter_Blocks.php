<?php
/**
 * Currency_Converter_Blocks Class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * Gutenberg blocks included in plugin
 * Here registering all blocks used in plugin
 *
 * @link       https://wilnet.eu
 * @since      1.0.0
 * @package    Currency_Converter
 * @subpackage Currency_Converter/blocks
 * @author     Lukasz Wilczak <lukasz@wilczak.net.pl>
 */
class Currency_Converter_Blocks {

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
	 * All blocks used in this plugin are registered here
	 *
	 * @return void
	 */
	public function register_blocks() {
		$currency_converter_renderer = new Currency_Converter_Renderer( $this->plugin_name, $this->version );
		register_block_type(
			__DIR__ . '/currency-converter/build',
			array(
				'render_callback' => [ $currency_converter_renderer, 'currency_converter_render_callback' ],
			)
		);
	}

	/**
	 * All styles regarded to blocks frontend user facing is enqueued here
	 *
	 * @return void
	 */
	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name . '_currency_converter', plugin_dir_url( __FILE__ ) . 'currency-converter/build/frontend.css', array(), $this->version, 'all' );
	}

	/**
	 * All scripts regarded to blocks frontend user facing is enqueued here
	 *
	 * @return void
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name . '_currency_converter', plugin_dir_url( __FILE__ ) . 'currency-converter/build/frontend.js', array( 'wp-element' ), $this->version, true );
	}
}
