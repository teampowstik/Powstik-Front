import React from 'react';
import Discount from './Discount';
import Features from './Feature';
import FeatureBrand from './FeatureBrand';
import Footer from './Footer';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Features />
			<Discount />
			<FeatureBrand />
			<Footer />
		</React.Fragment>
	);
};

export default LandingPage;
