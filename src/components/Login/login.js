import React from 'react';
import styled from 'styled-components';
import { H1, P1 } from './../../util/StyledComponent/premadeComponent';
import loginImg from '../../assets/login.png';
import { Input } from './../../util/StyledComponent/input';
import LSButton from './../../util/buttons/LoginButton/loginbutton';
import GoognleButton from './../../util/buttons/googleLoginButton/googlebutton';
import Footer from '../../util/components/FooterWhite';
import { Link } from 'react-router-dom';
import Header from '../LandingPage/Header/Header.component';

const Login = () => {
	return (
		<React.Fragment>
			<Header />
			<Wrapper>
				<Wrapper2>
					<div className="header">
						<P1 color="grey">Home/Account</P1>
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
										<Link to='/' className='link'>Forgot Password</Link>
									</div>

									<LSButton title="Login" />
									<div className="or">
										<hr className="hrr" />
										<P1 color="rgba(139, 195, 74, 1)">or</P1>
										<hr className="hrr" />
									</div>
									<div className="gdiv">
										<GoognleButton />
										<span className='registerlink'>
											Dont have account <Link to='/register' className='link'>signup</Link>
										</span>
									</div>
								</div>
							</form>
						</div>
					</div>
				</Wrapper2>
			</Wrapper>
			<Footer />
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
		accent-color: rgba(139, 195, 74, 0.8);
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
	.link{
		text-decoration:none ;

		&:hover{
			color:black;
		}
	}
	.registerlink{
		margin-top: 5px ;
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