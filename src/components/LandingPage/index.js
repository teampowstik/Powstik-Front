import React from 'react';
import Discount from './Discount';
import Header from './Header/Header.component'
import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components.jsx'
import Features from './Feature';
import FeatureBrand from './FeatureBrand';
import Footer from './Footer';
import DiscountBar from './DiscountComponent/Discount.component';
// import Header from './Header/Header.component';
// import Varieties from './ProductsVarieties';
// import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Header />
			<DiscountBar />
			<WebsiteDescription />
		</React.Fragment>
	);
};

export default LandingPage;
