import '../styles/frontend.scss';
import React, { useState, useEffect } from 'react';
import { TextField, FormControl, Select, MenuItem } from '@mui/material';

export default function CurrencySelector(props) {
	const [currencies, setCurrencies] = useState([]);
	const [selectedCurrency, setSelectedCurrency] = useState(
		props.defaultCurrency
	);
	const [amount, setAmount] = useState(props.amount);
	const handleSelect = (event) => {
		setSelectedCurrency(event.target.value);
		props.changeCurrency(event.target.value);
	};
	const handleInput = (event) => {
		setAmount(event.target.value);
		props.changeAmount(event.target.value);
	};

	return (
		<div className="wp-block-wilnet-currency-converter-frontend-selector">
			<TextField
				id="standard-basic"
				label="Amount"
				type={'number'}
				value={props.amount}
				onChange={handleInput}
			/>
			<FormControl>
				<Select
					labelId="demo-customized-select-label"
					id="demo-customized-select"
					value={selectedCurrency}
					onChange={handleSelect}
				>
					{props.currencies.map((value, index) => (
						<MenuItem value={value} key={index}>
							{value}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
