import React from 'react';
import styled from 'styled-components';
//images
import fb1 from '../../../assets/fb1.svg';
import fb2 from '../../../assets/fb2.svg';
import fb3 from '../../../assets/fb3.svg';
import fb4 from '../../../assets/fb4.svg';
import fb5 from '../../../assets/fb5.svg';

const Fb = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<div className="title">Feature Brand :</div>

				<img src={fb1} alt="fb" />
				<img src={fb2} alt="fb" />
				<img src={fb3} alt="fb" />
				<img src={fb4} alt="fb" />
				<img src={fb5} alt="fb" />
			</Wrapper>
		</React.Fragment>
	);
};
export default Fb;

const Wrapper = styled.div`
	${'' /* background-color: ; */} min-height: 100px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}

	.title {
		font-family: 'Merriweather';
		font-style: normal;
		font-weight: 700;
		font-size: 34px;
		line-height: 43px;
		margin-right: 40px;
	}
`;
