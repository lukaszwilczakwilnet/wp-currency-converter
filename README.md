
# Samples of my work

This plugin was created to show my work. I couldn't use my past work examples. I could show some parts, but then it's not possible to demo it. I decided to create fully functional, separate plugin.






## Notes

This plugin still has a few things that can be improved, but I decided to show it in its current shape. To make it "perfect" I need more time. The functionality of the plugin works as expected, and it's aligned with my idea.

## What's inside the plugin?

#### PHP in the context of WordPress, ideally a plugin

* This is a WordPress plugin
* Using a few types of hooks, actions, and filters [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/includes/Currency_Converter.php#L146)
* Settings API - settings page for the plugin [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/admin/Currency_Converter_Admin.php#L79)
* WordPress transients - keep data in a cache [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/data/Currency_Converter_Data.php#L48)
* REST API custom endpoints - additional endpoints to return data and options [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/rest-api/Currency_Converter_Rest_Api.php#L54)
* apply_filter - add the possibility to change plugin settings by using filters, in our case change cache time [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/data/Currency_Converter_Data.php#L106)
* settings saved in WordPress options [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/data/Currency_Converter_Data.php#L52)

#### Gutenberg block(s)

* Currency Converter block - dynamic block [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/Currency_Converter_Blocks.php#L59)
* Save data in block attributes [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/edit.js#L36)
* Using Supports [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/block.json#L10)
* Block in Content Canvas [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/edit.js#L62)
* Using Settings Sidebar [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/edit.js#L64C8-L64C8)
* Using callback to create a frontend user-facing view of the block [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/Currency_Converter_Blocks.php#L62)

#### Meaningful React Code - (Data Fetching, State Management, Complex components, React Hooks)

* User-facing part of Gutenberg block using React [here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/Currency_Converter_Renderer.php#L57)
* Fetching data from WordPress REST API [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/scripts/frontend.js#L28C15-L28C15)
* Create my own components [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/scripts/selector.js#L5)
* Using states and passing them between components [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/scripts/frontend.js#L20)
* Using React hooks [ex. here](https://github.com/lukaszwilczakwilnet/wp-currency-converter/blob/vvvvvvv/blocks/currency-converter/src/scripts/frontend.js#L27)





## Demo

ULR: https://currency-converter.wilnet.com.pl/

### Login details

**Admin:** https://currency-converter.wilnet.com.pl/wp-admin

**Login:** demo

**Password:** thi$i$dem0

**API key for exchangeratesapi.io:** 8e4a085a8056dd87f7e8a310922a1778

**API key for fixer.io:** bb8fb6dbfbd595d633191ef8b1e32ec9


### Description

Plugin creates a block that allows users to calculate currency rates. Users can choose two currencies and an amount of money. The converter automatically recalculates the amount of the second currency.

### Instructions

Plugin is installed and activated on the demo site. To make the plugin works first you need to set up the data provider and add API keys. You can find the keys above.
Please go to the admin panel and find the "Currency Converter" section in the menu. Then please set up it. If you will not do it, you can add anyway block in an editor, but the block will warn you about the setup plugin first.
After the successful setup of the plugin, you can add Currency Converter Blocks via Gutenberg Editor into Page, Post, or other areas in WordPress.
To correctly display the block on the frontend you need to set up block attributes. From Block Settings Sidebar please select a few of currencies and default currencies for both selectors.



## Ideas to improve the plugin

As I mentioned above still I see a place to improve the plugin.

* Add tests - php unit tests and functional
* add WordPress nonce to calls
* Make frontend block beauty by adding styles
* Add more visual customizations to block

#### And more (more work)...

* Fetch from API and keep a history of rates changes
* Add custom post type for currencies, store their history
* The above custom post type can be shown as a chart
* Add more data providers
* Notification system for users, use scheduled jobs in WordPress to send current rates or alerts about reaching the required value of the rate
