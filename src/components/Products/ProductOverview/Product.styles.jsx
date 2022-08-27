import styled from 'styled-components';

export const Container1 = styled.div`
display:flex ;
`;

export const FilteredContainer = styled.div`
display:flex ;
flex-direction:column ;
`;

export const ProductResults = styled.div`
display:flex ;
flex-wrap:wrap ;
/* justify-content: space-between; */
`;

export const Container2 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 6vh;
    align-items: center;
    width: 100vw;
`
export const FilterContainer = styled.div`
    display:flex;
    justify-content: flex-end;
    margin: 10px;
    background-color: #e8f4dc;
    border-radius: 10px;
    &:hover{
        background-color: #daf3c1;
    }
`

export const Filter = styled.select`
    display:flex;
    justify-content: flex-end;
    margin: 10px;
    padding: 7px;
    background-color: transparent;
    border: none;
    outline: none;
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f4dcdc;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    height: 300px;
`

export const ProductImage = styled.img`
    width: 10vw;
    margin: 30px;
`

export const newContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200vw;
    height: 100vh;
    background-color: red;
`