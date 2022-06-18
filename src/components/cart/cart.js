import React from 'react';
import Coupon from './coupon/coupan';

import Product from './products/products';
import styled from 'styled-components';
import Header from './../LandingPage/Header/Header.component';

import Header2 from './../../util/components/Header2/Header2.component';
import { H1 } from './../../util/StyledComponent/premadeComponent';

const Cart = () => {
	return (
		<React.Fragment>
			<Header2 />

			<Wrapper2>
				<Wrapper3>
					<H1 size="30" weight="700">
						{' '}
						Your Cart
					</H1>
					<Wrapper>
						<Product />
						<Coupon />
					</Wrapper>
				</Wrapper3>
			</Wrapper2>
		</React.Fragment>
	);
};

export default Cart;
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	background-color: #ffff;
	padding: 50px;
`;

const Wrapper2 = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: #e8f3db;
`;

const Wrapper3 = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffff;
	padding: 20px;
`;
