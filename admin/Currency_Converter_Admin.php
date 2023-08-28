<?php

namespace Wilnet\Currency_Converter;

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://wilnet.eu
 * @since      1.0.0
 * @package    Currency_Converter
 * @subpackage Currency_Converter/admin
 * @author     Lukasz Wilczak <lukasz@wilczak.net.pl>
 */
class Currency_Converter_Admin
{
    public const CURRENCY_CONVERTER_OPTIONS_META_KEY = 'currency_converter_options';

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
     * @param      string    $plugin_name       The name of this plugin.
     * @param      string    $version    The version of this plugin.
     */
    public function __construct($plugin_name, $version)
    {

        $this->plugin_name = $plugin_name;
        $this->version = $version;

    }

    /**
     * Register the stylesheets for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_styles()
    {
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'css/currency-converter-admin.css', array(), $this->version, 'all');

    }

    /**
     * Register the JavaScript for the admin area.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'js/currency-converter-admin.js', array( 'jquery' ), $this->version, false);

    }

	/**
	 * Registration of settings page in admin area. Here are all settings using in current plugin.
	 *
	 * @return void
	 */

    public function register_settings_page()
    {
        register_setting('currency-converter', self::CURRENCY_CONVERTER_OPTIONS_META_KEY);

        // main settings - select api provider and base currency
        add_settings_section(
            'currency-converter-main',
            __('Main Settings', 'currency-converter'),
            [$this, 'currency_converter_main_callback'],
            'currency-converter'
        );

        add_settings_field(
            'currency_converter_field_api_provider',
            __('Select API provider', 'currency-converter'),
            [$this, 'currency_converter_api_provider'],
            'currency-converter',
            'currency-converter-main',
            array(
                'label_for'         => 'currency_converter_field_api_provider',
                'class'             => 'currency_converter_row',
                'currency_converter_custom_data' => 'custom',
            )
        );
        add_settings_field(
            'currency_converter_field_base_currency',
            __('Select base currency', 'currency-converter'),
            [$this, 'currency_converter_base_currency'],
            'currency-converter',
            'currency-converter-main',
            array(
                'label_for'         => 'currency_converter_field_base_currency',
                'class'             => 'currency_converter_row',
                'currency_converter_custom_data' => 'custom',
            )
        );

        // exchangeratesapi.io settings section
        add_settings_section(
            'currency-converter-exchangeratesapi',
            __('Exchangerates.io', 'currency-converter'),
            [$this, 'currency_converter_exchangeratesapi_callback'],
            'currency-converter'
        );
        add_settings_field(
            'currency_converter_field_exchangeratesapi_key', // As of WP 4.6 this value is used only internally.
            // Use $args' label_for to populate the id inside the callback.
            __('Your API Access Key', 'currency-converter'),
            [$this, 'currency_converter_exchangeratesapi_key'],
            'currency-converter',
            'currency-converter-exchangeratesapi',
            array(
                'label_for'         => 'currency_converter_exchangeratesapi_key',
                'class'             => 'currency_converter_row',
                'currency_converter_custom_data' => 'custom',
            )
        );

        // fixer.io settings section
        add_settings_section(
            'currency-converter-fixer',
            __('Fixer.io', 'currency-converter'),
            [$this, 'currency_converter_fixer_callback'],
            'currency-converter'
        );
        add_settings_field(
            'currency_converter_field_fixer_key', // As of WP 4.6 this value is used only internally.
            // Use $args' label_for to populate the id inside the callback.
            __('Your API Access Key', 'currency-converter'),
            [$this, 'currency_converter_fixer_key'],
            'currency-converter',
            'currency-converter-fixer',
            array(
                'label_for'         => 'currency_converter_fixer_key',
                'class'             => 'currency_converter_row',
                'currency_converter_custom_data' => 'custom',
            )
        );
    }

	/**
	 * Callback functions for above settings page
	 */

    public function currency_converter_main_callback($args)
    {
        ?>
		<p id="<?php echo esc_attr($args['id']); ?>" class="description"><?php esc_html_e('Select your currency data provider ', 'currency-converter'); ?>
		<?php
    }

    public function currency_converter_exchangeratesapi_callback($args)
    {
        ?>
		<p id="<?php echo esc_attr($args['id']); ?>" class="description"><?php esc_html_e('If you decided to use exchangeratesapi.io as your data provider please paste API key below', 'currency-converter'); ?>
		<?php
    }

    public function currency_converter_fixer_callback($args)
    {
        ?>
		<p id="<?php echo esc_attr($args['id']); ?>" class="description"><?php esc_html_e('If you decided to use fixer.io as your data provider please paste API key below', 'currency-converter'); ?>
		<?php
    }

	/**
	 * field with api provider
	 *
	 * @param $args
	 * @return void
	 */

    public function currency_converter_api_provider($args)
    {
        $options = get_option(self::CURRENCY_CONVERTER_OPTIONS_META_KEY);
        ?>
		<input
				type="radio"
				id="<?php echo esc_attr($args['label_for']); ?>_exchangeratesapi"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				value="exchangeratesapi.io"
				<?php echo isset($options[ $args['label_for'] ]) && $options[ $args['label_for'] ] == "exchangeratesapi.io" ? ' checked="checked"' : "" ?>
		/>
		<label for="<?php echo esc_attr($args['label_for']); ?>_exchangeratesapi">exchangeratesapi.io</label> <a href="https://exchangeratesapi.io/" target="_blank">register here</a><br>
		<input
				type="radio"
				id="<?php echo esc_attr($args['label_for']); ?>_fixer"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				value="fixer.io"
				<?php echo isset($options[ $args['label_for'] ]) && $options[ $args['label_for'] ] == "fixer.io" ? ' checked="checked"' : "" ?>
		/>
		<label for="<?php echo esc_attr($args['label_for']); ?>_fixer">fixer.io</label> <a href="https://fixer.io/" target="_blank">register here</a><br>
		<?php
    }

	/**
	 * Inputs with base currency
	 *
	 * @param $args
	 * @return void
	 */

    public function currency_converter_base_currency($args)
    {
        $options = get_option(self::CURRENCY_CONVERTER_OPTIONS_META_KEY);
        ?>
		<input
				type="radio"
				id="<?php echo esc_attr($args['label_for']); ?>_eur"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				value="EUR"
				<?php echo(isset($options[ $args['label_for'] ]) && $options[ $args['label_for'] ] == "EUR") || empty($options[ $args['label_for'] ]) ? ' checked="checked"' : "" ?>
		/>
		<label for="<?php echo esc_attr($args['label_for']); ?>_eur">Euro</label><br>
		<input
				type="radio"
				id="<?php echo esc_attr($args['label_for']); ?>_usd"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				value="USD"
				<?php echo isset($options[ $args['label_for'] ]) && $options[ $args['label_for'] ] == "USD" ? ' checked="checked"' : "" ?>
		/>
		<label for="<?php echo esc_attr($args['label_for']); ?>_usd">US Dollar</label><br>
		<input
				type="radio"
				id="<?php echo esc_attr($args['label_for']); ?>_gbp"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				value="GBP"
				<?php echo isset($options[ $args['label_for'] ]) && $options[ $args['label_for'] ] == "GBP" ? ' checked="checked"' : "" ?>
		/>
		<label for="<?php echo esc_attr($args['label_for']); ?>_gbp">British Pound</label><br>
		<p class="description" style="color: red"><?php echo __('Warning! If you are using free plan choose EURO! Free plan do not allow any other base currency', 'currency-converter'); ?> </p>
		<?php
    }

	/**
	 * Input with key for exchangeratesapi.io
	 *
	 * @param $args
	 * @return void
	 */

    public function currency_converter_exchangeratesapi_key($args)
    {
        // Get the value of the setting we've registered with register_setting()
        $options = get_option(self::CURRENCY_CONVERTER_OPTIONS_META_KEY);
        ?>
		<input
				type="text"
				value="<?php echo isset($options[ $args['label_for'] ]) ? $options[ $args['label_for'] ] : "" ?>"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				data-custom="<?php echo esc_attr($args['currency_converter_data']); ?>"
				id="<?php echo esc_attr($args['label_for']); ?>"
		/>
		<?php
    }

	/**
	 * Input with key for fixer.io
	 *
	 * @param $args
	 * @return void
	 */

    public function currency_converter_fixer_key($args)
    {
        // Get the value of the setting we've registered with register_setting()
        $options = get_option(self::CURRENCY_CONVERTER_OPTIONS_META_KEY);
        ?>
		<input
				type="text"
				value="<?php echo isset($options[ $args['label_for'] ]) ? $options[ $args['label_for'] ] : "" ?>"
				name="<?php echo self::CURRENCY_CONVERTER_OPTIONS_META_KEY ?>[<?php echo esc_attr($args['label_for']); ?>]"
				data-custom="<?php echo esc_attr($args['currency_converter_data']); ?>"
				id="<?php echo esc_attr($args['label_for']); ?>"
		/>
		<?php
    }

    /**
     * Add the top level menu page.
     */
    public function currency_converter_options_page()
    {
        add_menu_page(
            'Currency Converter',
            'Currency Converter',
            'manage_options',
            'currency-converter',
            [$this, 'currency_converter_options_page_html']
        );
    }

	/**
	 * HTML wrapper for settings page
	 * @return void
	 */

    public function currency_converter_options_page_html()
    {
        // check user capabilities
        if (! current_user_can('manage_options')) {
            return;
        }

        // check if the user have submitted the settings
        if (isset($_GET['settings-updated'])) {
            // validate correctness of settings and connection to API
            $currency_converter_data = new Currency_Converter_Data();
            if ($currency_converter_data->isInicialized()) {
                $currency_converter_data->forceRefreshData();
                $response = $currency_converter_data->validateConnection();
                if ($response) {
                    add_settings_error('currency_converter_messages', 'currency_converter_message', __($response['message'], 'currency-converter'), $response['success'] ? 'updated' : 'error');
                } else {
                    add_settings_error('currency_converter_messages', 'currency_converter_message', __('Unknown connection error. Please contact us.', 'currency-converter'), 'error');
                }
            } else {
                add_settings_error('currency_converter_messages', 'currency_converter_message', __('Please select currency data provider', 'currency-converter'), 'error');
            }
        }

        settings_errors('currency_converter_messages');
        ?>
		<div class="wrap">
			<h1><?php echo esc_html(get_admin_page_title()); ?></h1>
			<form action="options.php" method="post">
				<?php
                settings_fields('currency-converter');
        do_settings_sections('currency-converter');
        submit_button('Save Settings');
        ?>
			</form>
		</div>
		<?php
    }


}
