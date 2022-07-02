import React, { useState, useEffect } from 'react';
import CardHeaders from '../cardHeaders';
import CardSlider from '../SlickSlider';
import axios from 'axios'
const ProductBox = () => {

	const [geriatrics, setGeriatrics] = useState([]);
	const [motherAndBaby, setMotherAndBaby] = useState([]);
	const [metabolics, setMetabolics] = useState([]);

	const getApiData = async () => {
		const response = await axios.get(
			"http://powstik-back-v1.azurewebsites.net/consultation/", { header: { "Allow-Control-Cross-Origin": '*' } }
		).then(response => response.data);

		console.log(response)
	}

	useEffect(() => {
		getApiData();
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
