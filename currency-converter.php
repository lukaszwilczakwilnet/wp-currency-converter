<?php
/**
 * Initialize plugin
 *
 * @link              https://wilnet.eu
 * @since             1.0.0
 * @package           Currency_Converter
 *
 * @wordpress-plugin
 * Plugin Name:       Currency Converter
 * Plugin URI:        https://wilnet.eu
 * Description:       This plugin offers you currency converter. You can add block to any of your site.
 * Version:           1.0.0
 * Author:            Lukasz Wilczak
 * Author URI:        https://wilnet.eu
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       currency-converter
 * Domain Path:       /languages
 */

namespace Wilnet\Currency_Converter;

if ( ! defined( 'WPINC' ) ) {
	die;
}

require plugin_dir_path( __FILE__ ) . 'includes/Currency_Converter.php';

$plugin = new Currency_Converter();
$plugin->run();
