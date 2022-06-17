import React from 'react';
import styled from 'styled-components';
import BuyNowButton from '../../../util/buttons/ShopNowButton/index';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
//images
import fb1 from '../../../assets/fb1.svg';
import fb2 from '../../../assets/fb2.svg';
import fb3 from '../../../assets/fb3.svg';
import fb4 from '../../../assets/fb4.svg';
import fb5 from '../../../assets/fb5.svg';
import GButton from '../../../util/buttons/reusableButton/button';
const Div = (props) => {
	console.log(props);

	return (
		<Cd>
			<div className="up">
				<H1 size="25" className="p1">
					{' '}
					{props.item.title}{' '}
				</H1>
				<P1 className="p1"> {props.item.desc} </P1>
			</div>
			<div className="down">
				<GButton title="SHOP NOW" />
				<img className="cedimg" src={props.item.pic} height="90" alt="icon" />
			</div>
		</Cd>
	);
};
export default Div;

const Cd = styled.div`
	background-color: #e8f3db;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 20px;
	width: 270px;

	margin: 20px;

	.down {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		margin-top: 20px;
	}
	.cedimg {
		margin-left: 10px;
	}
`;
