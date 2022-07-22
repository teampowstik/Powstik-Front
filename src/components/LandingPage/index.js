import React from 'react';
import BankOffer from './BankOffer/bankoffer';
import Characteristics from './Characteristics/characteristics';
import FeatureBrand from './FeatureBrand';
import WebsiteDescription from './WebsiteDescription/WebsiteDescription.components.jsx';
import DiscountBar from './DiscountComponent/Discount.component';
import FooterWhite from './FooterWhite';
import ProductBox from './ProductBox';

const LandingPage = () => {
	return (
		<React.Fragment>

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
