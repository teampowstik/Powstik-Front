import styled from 'styled-components';

export const Background = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #e8f4dc;
    height:max-content;
`

export const SuperCard = styled.div`
    display:flex;
    padding:10px;
    background-color: white;
    border-radius: 30px;
    height:max-content;
    width:94vw;
    margin: 50px;
`

export const FilterDisplay = styled.div`
    display:flex;
    flex-direction:column;
    height:max-content;
    width:25vw;
    padding: 15px;
`

export const Filter = styled.div`
    margin-top: 20px;
    margin-bottom: 30px;
`

export const FilterDiv = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`

export const ProductDisplay = styled.div`
    display:flex;
    flex-direction:column;
    height:max-content;
    width:65vw;
    padding: 15px;
    align-items: center;
`

export const SortContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100px;
    width:100%;
    align-items: center;
`

export const SortSelect = styled.select`
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 7px;
    background-color: white;
    border: 1px solid #8BC34B;
    outline: none;
    height: 45px;
    width: 20%;
    border-radius: 5px;
    margin-right: 20px;
`

export const AdBanner = styled.img`
    border-radius: 5px;
    width:98%;
`

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-content: flex-start;
    height:100%;
    width:100%;
    margin: 30px;
    justify-content: center;
`

export const ProductCard = styled.div`
    display:flex;
    flex-direction: column;
    width:230px;
    height:350px;
    background-color: #e8f4dc;
    margin:15px;
    padding-top: 10px;
`

export const OfferAndLike = styled.div`
    display: flex;
    justify-content: space-between;
    height:40px;
    align-items: center;
    margin-right: 10px;
    color: rgba(139, 195, 74, 1);
`

export const LikeButton = styled.div`
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DiscountContainer = styled.div`
    display:flex ;
    justify-content:flex-start ;
    width:120px ;
    height:40px ;
    clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0);
    background-color: rgba(139, 195, 74, 1);
    top: 25px;
    font-size:22px ;
    color: #ffffff;
    align-items:center ;
    font-weight: 600 ;
`

export const DiscountContent = styled.span`
    margin-left:15px ;
`

export const ProductImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 20px;
`

export const ProductImage = styled.img`
    width:150px;
    
`