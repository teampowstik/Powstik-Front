import React from 'react';
import styled from 'styled-components';
// import BuyNowButton from '../../../util/ShopNowButton/index';
import { H1, H2, P1, P2 } from './../../util/StyledComponent/premadeComponent';
//images
import loginImg from '../../assets/login.png';
import { Input } from './../../util/StyledComponent/input';
import LSButton from './../../util/LoginButton/loginbutton';
import GoognleButton from './../../util/googleLoginButton/googlebutton';

const Login = () => {
	return (
		<React.Fragment>
			<Wrapper>
				<Wrapper2>
					<div className="header">
						<H1 color="#000" size="30">
							Log into your account
						</H1>
					</div>
					<div className="bodyy">
						<div className="left">
							<img className="img" src={loginImg} alt="Login" />
						</div>
						<div className="right">
							<H1 color="#000" size="45" className="wb">
								Welcome Back !
							</H1>

							<form>
								<div className="fdiv">
									<P1 color="#000"> UserName or Email Address *</P1>
									<Input placeholder="something@gmail" />
									<P1 color="#000"> Password*</P1>
									<Input placeholder="*******" />
									<div className="cbox ">
										<div>
											<input type="checkbox" name="cbox" />
											<span>Remember Me</span>
										</div>
										<a href="#">forget password</a>
									</div>

									<LSButton title="Login" />
									<div className="or">
										<hr className="hrr" />
										<P1 color="rgba(139, 195, 74, 1)">or</P1>
										<hr className="hrr" />
									</div>
									<div className="gdiv">
										<GoognleButton />
										<span>
											didnt have account <a href="/register"> signup</a>
										</span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</Wrapper2>
			</Wrapper>
		</React.Fragment>
	);
};
export default Login;

const Wrapper = styled.div`
	background: rgba(139, 195, 74, 0.2);
	padding: 2rem;
	height: 100%;
	@media (max-width: 500px) {
		padding: 0;
		height: auto;
	}
`;

const Wrapper2 = styled.div`
	background-color: #ffff;
	padding: 2rem;

	min-height: 200px;
	.header {
		margin-top: 20px;
		margin-left: 20px;

		padding-left: 20px;
		margin-bottom: 50px;
	}
	.fdiv {
		min-height: 450px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.left {
		text-align: center;
	}
	.img {
		height: 400px;
		width: 400px;
	}

	.bodyy {
		min-height: 200px;
		display: flex;
		flex-direction: coloumn;
		justify-content: space-around;

		align-items: center;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}
	.wb {
		margin-bottom: 50px !important;
	}
	.cbox {
		width: 350px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.hrr {
		width: 30%;
		border: 1.5px solid rgba(139, 195, 74, 1);
		background: rgba(139, 195, 74, 1);
	}
	.or {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.gdiv {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		text-align: center;
	}
	@media (max-width: 500px) {
		.img {
			width: 300px;
			height: 300px;
		}
		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
`;
