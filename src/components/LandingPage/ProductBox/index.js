import React, { useState, useEffect } from 'react';
import CardHeaders from '../cardHeaders';
import CardSlider from '../SlickSlider';

const ProductBox = () => {

	const [geriatrics, setGeriatrics] = useState([]);
	const [motherAndBaby, setMotherAndBaby] = useState([]);
	const [metabolics, setMetabolics] = useState([]);

	const fetchData = () => {

		fetch('https://davidwalsh.name/demo/arsenal.json', { mode: "no-cors", header: { 'Content-type': "application/json", 'Access-Control-Allow-Origin': '*' } })
			.then(response => response.json())
	};

	useEffect(() => {
		fetchData();
	});

	return (
		<div>
			<CardHeaders
				main="Geriatrics"
				sub="Nutrition solutions for common health conditions in ageing men and women. "
			/>
			<CardSlider />
			<CardHeaders
				main="Metabolics"
				sub="Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. "
			/>
			<CardSlider />
			<CardHeaders
				main="Mother & Child"
				sub="Choicest Groceries, Pulses, Millets, and cereals from around your country. "
			/>
			<CardSlider />
		</div>
	);
};

export default ProductBox;
