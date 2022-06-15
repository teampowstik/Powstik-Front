import React from 'react';
import styled from 'styled-components';

import { Button } from 'react-bootstrap';
import buttonCart from '../../../assets/buttonCart.svg';
import { Link } from 'react-router-dom';
const GButton = (props) => {
	return (
		<React.Fragment>
			<Wrapper>
				<Button className="mybutton" variant="primary" size="lg" block>
					{props.title}
				</Button>
			</Wrapper>
		</React.Fragment>
	);
};

export default GButton;
const Wrapper = styled.div`
	${'' /* background-color: ; */} .mybutton {
		background-color: ${(props) => props.bg || '#111111'};

		height: 34px;
		min-width: 110px;
		border: none;
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;
		max-width: 170px;
		font-size: 15px;
		color: white;
		padding: 15px;
	}
	.mybutton:hover {
		cursor: pointer;
		scale: 1.5;
		background-color: rgba(139, 195, 74, 0.2);
	}
`;
