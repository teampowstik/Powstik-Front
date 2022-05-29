import styled from 'styled-components';

export const H1 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 46px;
	margin: 0px !important;
	/* or 128% */

	/* primary */

	color: #ffffff;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;
export const H2 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 46px;
	margin: 0px !important;
	/* or 128% */

	/* primary */

	color: #ffffff;

	@media (max-width: 500px) {
		font-size: 16px;
		line-height: 16px;
	}
`;

export const P1 = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 26px;
	/* or 162% */

	/* primary */
	margin: 0px !important;
	color: #ffff;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}
`;

export const P2 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 36px;
	color: #ffffff;
	margin: 0px !important;
	/* or 162% */

	/* primary */

	color: <div id="ffff"></div>;
	@media (max-width: 500px) {
		font-size: 12px;
		line-height: 20px;
	}

	margin-bottom: 15px;
`;
