import styled from "styled-components";

export const NavContainer = styled.div`
display:flex ;
height:470px ;
width: 90vw ;
background-color:#fff ;
z-index:2 ;
position:fixed ;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
@media(max-width:900px){
    width:96vw ;
}
`;