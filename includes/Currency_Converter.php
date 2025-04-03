<?php
/**
 * Currency_Converter Class
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * A class definition that includes attributes and functions
 *
 * @link       https://wilnet.eu
 * @since      1.0.0

 * @package    Currency_Converter
 * @subpackage Currency_Converter/includes
 */
class Currency_Converter {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Currency_Converter_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin, gutenberg blocks and REST API
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'CURRENCY_CONVERTER_VERSION' ) ) {
			$this->version = CURRENCY_CONVERTER_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'currency-converter';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_blocks_hooks();
		$this->define_rest_api_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/Currency_Converter_Loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'includes/Currency_Converter_I18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'admin/Currency_Converter_Admin.php';

		/**
		 * The class responsible for defining all actions that occur in the gutenberg blocks
		 * side of the site.
		 */
		require_once plugin_dir_path( __DIR__ ) . 'blocks/Currency_Converter_Blocks.php';
		require_once plugin_dir_path( __DIR__ ) . 'blocks/currency-converter/Currency_Converter_Renderer.php';

		/**
		 * The class responsible for defining all actions that occur in REST API
		 */
		require_once plugin_dir_path( __DIR__ ) . 'rest-api/Currency_Converter_Rest_Api.php';

		/**
		 * The class responsible for fetch currency rates from external data sources
		 */
		require_once plugin_dir_path( __DIR__ ) . 'data/Currency_Converter_Data_Interface.php';
		require_once plugin_dir_path( __DIR__ ) . 'data/Currency_Converter_Data_ExchangeratesapiIo.php';
		require_once plugin_dir_path( __DIR__ ) . 'data/Currency_Converter_Data_FixerIo.php';
		require_once plugin_dir_path( __DIR__ ) . 'data/Currency_Converter_Data.php';

		$this->loader = new Currency_Converter_Loader();
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Currency_Converter_I18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Currency_Converter_I18n();
		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Currency_Converter_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'admin_init', $plugin_admin, 'register_settings_page' );
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'currency_converter_options_page' );
	}

	/**
	 * Register all of the hooks related to the gutenberg blocks functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_blocks_hooks() {

		$plugin_blocks = new Currency_Converter_Blocks( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'init', $plugin_blocks, 'register_blocks' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_blocks, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_blocks, 'enqueue_scripts' );
	}

	/**
	 * Register all of the hooks related to the REST API
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_rest_api_hooks() {

		$plugin_blocks = new Currency_Converter_Rest_Api( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'rest_api_init', $plugin_blocks, 'rest_api_get_option_endpoint' );
		$this->loader->add_action( 'rest_api_init', $plugin_blocks, 'rest_api_get_currency_converter_options_endpoint' );
		$this->loader->add_action( 'rest_api_init', $plugin_blocks, 'rest_api_get_currency_converter_rates_endpoint' );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Currency_Converter_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}
}
