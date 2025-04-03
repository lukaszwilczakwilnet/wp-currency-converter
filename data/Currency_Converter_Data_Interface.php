<?php
/**
 * Currency_Converter_Data_Interface Interface
 *
 * @package Currency_Converter
 */

namespace Wilnet\Currency_Converter;

/**
 * Interface for integration with data provider
 */
interface Currency_Converter_Data_Interface {

	/**
	 * Fetch and convert fetched data to the format used in plugin
	 *
	 * @return mixed
	 */
	public function get_data(): mixed;

	/**
	 * Check if connections is ok
	 *
	 * @return mixed
	 */
	public function validate_connection(): array;
}
