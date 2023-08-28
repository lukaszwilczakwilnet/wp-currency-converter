import '../styles/frontend.scss';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Grid } from '@mui/material';
import CurrencySelector from './selector';

const currencyConverterFrontendBlocks = document.querySelectorAll(
	'.wp-block-wilnet-currency-converter'
);

currencyConverterFrontendBlocks.forEach((div) => {
	const data = JSON.parse(div.getAttribute('data-json'));
	console.log(data);
	const root = createRoot(div);
	root.render(<CurrencyConverter {...data} />);
});

function CurrencyConverter(props) {
	const [rates, setRates] = useState(null);
	const [topCurrency, setTopCurrency] = useState(props.default_currency_top);
	const [topCurrencyAmount, setTopCurrencyAmount] = useState(1);
	const [bottomCurrency, setBottomCurrency] = useState([
		props.default_currency_bottom,
	]);
	const [bottomCurrencyAmount, setBottomCurrencyAmount] = useState('');

	useEffect(() => {
		async function loadCurrencyRates() {
			const response = await fetch(
				'/wp-json/wp/v2/currency_converter_rates'
			);
			if (!response.ok) {
				return;
			}
			const rates = await response.json();
			setRates(rates);
			const rate =
				Math.round(
					(100 * rates.rates[props.default_currency_bottom]) /
						rates.rates[props.default_currency_top]
				) / 100;
			setBottomCurrencyAmount(rate);
		}
		loadCurrencyRates();
	}, []);

	useEffect(() => {
		if (rates) {
			const rate =
				Math.round(
					((100 * rates.rates[topCurrency]) /
						rates.rates[bottomCurrency]) *
						bottomCurrencyAmount
				) / 100;
			setTopCurrencyAmount(rate);
		}
	}, [bottomCurrency, bottomCurrencyAmount]);

	useEffect(() => {
		if (rates) {
			const rate =
				Math.round(
					((100 * rates.rates[bottomCurrency]) /
						rates.rates[topCurrency]) *
						topCurrencyAmount
				) / 100;
			setBottomCurrencyAmount(rate);
		}
	}, [topCurrency, topCurrencyAmount]);

	return (
		<div className="wp-block-wilnet-currency-converter-frontend">
			{rates && props.default_currency_bottom && props.default_currency_top && <div className={"currency-converter-block"}>
				<p style={{ fontSize: props.style.typography.fontSize }}>
					{topCurrencyAmount} {topCurrency} equals <strong>{bottomCurrencyAmount} {bottomCurrency}</strong>
				</p>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<CurrencySelector
							defaultCurrency={props.default_currency_top}
							currencies={props.currencies}
							changeAmount={setTopCurrencyAmount}
							changeCurrency={setTopCurrency}
							amount={topCurrencyAmount}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<CurrencySelector
							defaultCurrency={props.default_currency_bottom}
							currencies={props.currencies}
							changeAmount={setBottomCurrencyAmount}
							changeCurrency={setBottomCurrency}
							amount={bottomCurrencyAmount}
						/>
					</Grid>
				</Grid>
			</div>}
		</div>
	);
}
