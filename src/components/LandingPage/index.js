import React from 'react';
import Discount from './Discount';
import Features from './Feature';
import FeatureBrand from './FeatureBrand';
import Footer from './Footer';
import Varieties from './ProductsVarieties';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Features />
			<Discount />

			<Varieties />
			<FeatureBrand />

			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;
