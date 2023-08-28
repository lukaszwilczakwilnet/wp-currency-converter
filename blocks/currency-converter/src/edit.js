/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './styles/editor.scss';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
import { useState, useEffect } from '@wordpress/element';
import {
	SelectControl,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { MultiSelectControl } from '@codeamp/block-components';
import Preview from './scripts/preview';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const [currencies, setCurrencies] = useState(false);
	const [pluginConfigured, setPluginConfigured] = useState(false);

	const onChangeDefaultCurrencyTop = (currency) => {
		setAttributes({ default_currency_top: currency });
	};

	const onChangeDefaultCurrencyBottom = (currency) => {
		setAttributes({ default_currency_bottom: currency });
	};

	useEffect(() => {
		if (!currencies)
			apiFetch({
				path: addQueryArgs('/wp/v2/currency_converter_rates', {}),
			}).then((response) => {
				if (response.success) {
					const currenciesEntries = [];
					for (const [label, rate] of Object.entries(
						response.rates
					)) {
						currenciesEntries.push({ value: label, label: label });
					}
					setCurrencies(currenciesEntries);
					setPluginConfigured(true);
				}
			});
	});

	return (
		<div {...useBlockProps()}>
			{currencies && (
				<InspectorControls key="setting">
					<Panel>
						<PanelBody>
							<PanelRow>
								<MultiSelectControl
									label={
										'Select currencies available in selects'
									}
									value={attributes.currencies}
									options={currencies}
									onChange={(val) =>
										setAttributes({ currencies: val })
									}
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									value={attributes.default_currency_top}
									options={currencies.filter((obj) =>
										attributes.currencies.includes(
											obj.value
										)
									)}
									onChange={onChangeDefaultCurrencyTop}
									label={__(
										'Currency on top select',
										'currency-converter'
									)}
								/>
							</PanelRow>
							<PanelRow>
								<SelectControl
									value={attributes.default_currency_bottom}
									options={currencies.filter((obj) =>
										attributes.currencies.includes(
											obj.value
										)
									)}
									onChange={onChangeDefaultCurrencyBottom}
									label={__(
										'Currency on bottom select',
										'currency-converter'
									)}
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
			)}
			<Preview
				defaultCurrencyTop={attributes.default_currency_top}
				defaultCurrencyBottom={attributes.default_currency_bottom}
				currencies={currencies}
				pluginConfigured={pluginConfigured}
			/>
		</div>
	);
}
