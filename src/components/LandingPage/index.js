import React from 'react';
import Discount from './Discount';
import Features from './Feature';
import FeatureBrand from './FeatureBrand';
import Footer from './Footer';
// import Header from './Header/Header.component';
// import Varieties from './ProductsVarieties';
// import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components';

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
