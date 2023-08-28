<?php

namespace Wilnet\Currency_Converter;

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://wilnet.eu
 * @since      1.0.0
 *
 * @package    Currency_Converter
 * @subpackage Currency_Converter/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Currency_Converter
 * @subpackage Currency_Converter/includes
 * @author     Lukasz Wilczak <lukasz@wilczak.net.pl>
 */
class Currency_Converter_i18n
{
    /**
     * @since    1.0.0
     */
    public function load_plugin_textdomain()
    {

        load_plugin_textdomain(
            'currency-converter',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );

    }



}
