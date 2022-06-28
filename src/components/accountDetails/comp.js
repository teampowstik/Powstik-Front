import React from 'react';
import styled from 'styled-components';
import GButton from '../../util/buttons/reusableButton/button';

import { Input } from '../../util/StyledComponent/input';
import { P2, H1, P1 } from './../../util/StyledComponent/premadeComponent';

const Comp = (props) => {
	const data = {
		firstname: 'firstname',
		lastname: 'lastname',
		gender: 'gender',
		phone: 'phone',
		'Email Address': 'email',
		'Country / Region': 'dolor sit',
		'Town / City': 'town',
		'Street Address': 'kjldfasklsadlkjasd dladaslk',
		'Door.no/Plot.no': 'xxx',
		state: 'state',
		pin: 'xxx',
		type: 'vendor'
	};
	return (
		<Wrapper>
			<div className="onedivimg">
				<div className="eaimg">
					<img src={'#'} alt="icon" />
				</div>
				<div>
					<H1 size="18" weight="600">
						{data.firstname + ' '}

						{data.lastname}
					</H1>
					<P1 size="14">8756272</P1>
					<P1 size="14" weight="600" color="#8BC34A">
						{' '}
						{data.type}{' '}
					</P1>
				</div>
			</div>

			<div className="pdiv">
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Gender</P2>
						<P2 color="#616161">{data.gender}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Phone</P2>
						<P2 color="#616161">{data.phone}</P2>
					</div>
				</div>

				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Email Address</P2>
						<P2 color="#616161">{data['Email Address']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Country/Region</P2>
						<P2 color="#616161">{data['Country / Region']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Town / City</P2>
						<P2 color="#616161">{data['Town / City']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Street address</P2>
						<P2 color="#616161">{data['Street Address']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">Door no / Plot no</P2>
						<P2 color="#616161">{data['Door.no/Plot.no']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">State</P2>
						<P2 color="#616161">{data['state']}</P2>
					</div>
				</div>
				<div className="ocdiv">
					<div className="insidediv">
						{' '}
						<P2 color="#000">PIN</P2>
						<P2 color="#616161">{data['pin']}</P2>
					</div>
				</div>
			</div>

			<div className="onedivbtn">
				<GButton title="Edit Account Details" width="300px" bg="#8BC34A" />
			</div>
		</Wrapper>
	);
};
export default Comp;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;

	align-items: left;
    justify-content: space-around;

	padding: 5px;
	margin: 10px;
	@media (max-width: 500px) {
		width: auto;
        
	}

    .insidediv{
        width:400px;
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        margin:20px;
    }
	.onediv {
		margin: 20px;
	}
	.eaimg {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #e8f3db;
		margin-right: 20px;
	}
	.onedivimg {
		display: flex;
		flex-direction: row !important;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;
        width:300px;
		justify-content: space-around;
	}
	.onedivbtn {
		display: flex;
		flex-direction: row;
		margin-right: 200px;
		margin-bottom: 50px;
		align-items: center;
		justify-content: between;
        margin-top:20px;
	}
    .Cgbtn {
		background: transparent !important;
		border: 2px solid #8bc34a;
		margin-right: 20px;
		width: 300px;
		color: #8bc34a;
        margin:20px;
	}

	

    @media(max-width: 500px) {
    .onedivbtn {
        flex-direction: column;
    }
    .insidediv{
        width:200px !important;
    }
    .pdiv{
        width:300px;
    }
	}
	`;
