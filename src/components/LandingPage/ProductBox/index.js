import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CardHeaders from '../cardHeaders';
import CardSlider from '../SlickSlider';

const ProductBox = () => {

	const [geriatrics, setGeriatrics] = useState([]);
	const [motherAndBaby, setMotherAndBaby] = useState([]);
	const [metabolics, setMetabolics] = useState([]);

	const fetchData = async () => {

		const { data } = await axios(`http://powstik-backend-test-v1.azurewebsites.net/consultation/bycategory/Diabetes`, {
			"method": "GET",
			"mode": "cors",
			headers: {
				'Access-Control-Allow-Origin': "*"
			}
		})
			.then((data) => console.log(data))
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
