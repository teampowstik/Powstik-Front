import React from 'react';
import styled from 'styled-components';
import BuyNowButton from './../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from './../../../util/StyledComponent/premadeComponent';
//images

import GButton from './../../../util/buttons/reusableButton/button';
import { Button } from 'bootstrap';

import x from '../../../assets/x.png';
import { Checkbox } from '../../../util/StyledComponent/input';

const SingleProduct = (props) => {
	console.log(props);
	const { name, pic, desc } = props.item;

	return (
		<Wrapper>
			<div className="up">
				<Checkbox type="checkbox" />
				<img className="cedimg" src={pic} height="90" alt="icon" />
			</div>
			<div className="down">
				<H1 size="20" lineHeight="20.11px">
					{name}
				</H1>
				<P1 size="13" weight="300">
					{desc}
				</P1>
				<P1 size="18" weight="300">
					item quantity: <button className="iqbtn">-</button> <div className="qdiv">1</div>
					<button className="iqbtn">+</button>
				</P1>
				<H1 size="18"> ₹504.00</H1>
			</div>
			<div>
				<button className="xbtn">
					{' '}
					<img src={x} alt="x" />
				</button>
			</div>
		</Wrapper>
	);
};
export default SingleProduct;

const Wrapper = styled.div`
	position: relative;
	background-color: #e8f3db;

	display: flex;
	flex-direction: row;

	align-items: center;
	width: 573.12px;
	padding: 5px;
	margin: 10px;
	@media (max-width: 500px) {
		width: auto;
	}

	.down {
		display: flex;
		justify-content: space-between;
		align-items: left;
		flex-direction: column;
		margin-top: 20px;
	}

	.up {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 40px;
	}
	.cedimg {
		margin-left: 10px;
	}

	.iqbtn {
		display: inline;
		border: none;
		background-color: #e8f3db;
	}

	.qdiv {
		display: inline-block;
		background-color: #8bc34a;
		width: 25px;
		text-align: center;
	}
	.xbtn {
		border: none;
		background: transparent;
		position: absolute;
		right: 0;
		top: 0;
	}
`;
