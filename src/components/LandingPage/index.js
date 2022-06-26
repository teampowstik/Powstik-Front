import React from 'react';
import BankOffer from './BankOffer/bankoffer';
import Characteristics from './Characteristics/characteristics';

import FeatureBrand from './FeatureBrand';

import Header from './Header/Header.component';
import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components.jsx';
//import FeatureBrand from './FeatureBrand';
//import Footer from './Footer';
import DiscountBar from './DiscountComponent/Discount.component';
import FooterWhite from './FooterWhite';
import ProductBox from './ProductBox';
import Mobile from './Mobile/Mobile.component';

const LandingPage = () => {
	return (
		<React.Fragment>
			<Header />
			<DiscountBar />
			<WebsiteDescription />
			<Characteristics />
			<BankOffer />

			<ProductBox />

			<FeatureBrand />
			{/* <Mobile /> */}
			<FooterWhite />
		</React.Fragment>
	);
};

export default LandingPage;
