import styled from 'styled-components';
import myImage from '../../../assets/Vector (8).png'
import { Link } from 'react-router-dom'

export const HeaderBox = styled.div`
background-color:#FFFFFF;
display:flex;
flex-direction: row;
align-items: center;
margin: 0 2rem;
padding-top: 5px;
height:80px ;
@media (max-width: 900px) {
    margin: 0.8rem 3rem;
  }
`;

export const CompanyHeaderName = styled.div`
background-color:#FFFFFF;
width:30%;
height: 100%;
margin: 0.8rem 0;
display:flex ;
color: #8BC34A;
@media (max-width: 900px) {
    width:100% ;
}
`;

export const CompanyNameImage = styled(Link)`
background-image: url(${myImage}) ;
background-repeat: no-repeat;
width:100%;
height:100% ;
text-decoration:none ;

		&:hover{
			color: ${(props) => props.color || 'white'};
		}
`;

export const HeaderLink = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width: 70%;
@media (max-width: 900px) {
    display: none ;
    width: 30% ;
}
`;

export const LinkContainer = styled.div`
display:none ;
height:470px ;
width: 90vw ;
background-color:#fff ;
z-index:10 ;
margin:0 auto ;
@media(max-width:900px){
    width:96vw ;
}
`;

export const HeaderLinks = styled(Link)`
display:flex ;
justify-content:space-evenly ;
align-items:center ;
cursor: pointer;
font-size: 18px ;
padding: 14px 0 ;
text-decoration:none ;
text-transform:uppercase;
color: black;
text-decoration:none ;

		&:hover{
			color: ${(props) => props.color || 'black'};
            
            &:nth-child(1){
                ${LinkContainer} {
                display:flex ;
            }
            }
        }
`;

export const HamburgerMenu = styled.div`
display:flex ;
margin: 10px 0 ;
cursor: pointer;
@media (min-width: 900px){
    display:none;
}
`;
