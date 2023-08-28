<?php

namespace Wilnet\Currency_Converter;

/**
 * Interface for integration with data provider
 */

interface Currency_Converter_Data_Interface
{
    public function getData();

    public function validateConnection();

}
