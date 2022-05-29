import styled from 'styled-components';
import myImage from '../../../Assets/Images/Logo.png'

export const HeaderBox = styled.div`
background-color:#FFFFFF;
display:flex;
flex-direction: row;
align-items: center;
margin: 0.8rem 5rem;
height:80px ;
@media (max-width: 719px) {
    margin: 0.8rem 3rem;
  }
`;

export const CompanyHeaderName = styled.div`
background-color:#FFFFFF;
width:50%;
height: 100%;
display:flex ;
color: #8BC34A;
@media (max-width: 719px) {
    width:100% ;
}
`;

export const CompanyNameImage = styled.div`
background-image: url(${myImage}) ;
background-repeat: no-repeat;
width:100%;
height:100% ;
`;

export const HeaderLink = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width: 50%;
@media (max-width: 719px) {
    display: none ;
}
`;

export const HeaderLinks = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
cursor: pointer;
`;

export const HamburgerMenu = styled.div`
display:flex ;
justify-content:centers ;
margin: 10px 0 ;
cursor: pointer;
@media (min-width: 719px){
    display:none;
}
`;