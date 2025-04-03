<?php
/**
 * Currency_Converter_Renderer class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * Fronted part of currency converter block. Here is callback function to start React App on frontend
 *
 * @link       https://wilnet.eu
 * @since      1.0.0
 *
 * @package    Currency_Converter
 * @subpackage Currency_Converter/blocks
 */
class Currency_Converter_Renderer {

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
	 * Callback for fronted of gutenberg block. Return block root node for React.JS
	 *
	 * @param array  $block_attributes block attributes
	 * @param string $content json data passed to block
	 * @return string
	 */
	public function currency_converter_render_callback( array $block_attributes, string $content ): string {
		$wrapper_attributes = get_block_wrapper_attributes();
		return "<div $wrapper_attributes data-json='" . wp_json_encode( $block_attributes ) . "'></div>";
	}
}
