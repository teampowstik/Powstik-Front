import React from 'react'
import Footer from '../../../util/components/FooterWhite'
// import {} from '../../ProductPage/product.styles';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import axios from 'axios'
import { Background, SuperCard, FilterDisplay, Filter, FilterDiv, ProductDisplay, SortContainer, SortSelect, AdBanner, ProductCard, DiscountContainer, DiscountContent, ProductContainer, OfferAndLike, LikeButton, ProductImage, ProductImageContainer, RatingAndAddDiv, RatingDiv, AddToCart, BorderStar} from './Product.styles';
import Advertisment from '../../../assets/product_ad.png'
import ProductIMG from '../../../assets/product_img.png'
import Accordian from '../../../util/components/Accordian/Accordian.component';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import FilterBy from '../../../util/FilterBy/FilterBy.component';
import { useState, useEffect } from 'react';
import { Submit } from '../../../configApi/function';

const ProductOverview = () => {
    const [ product, setProducts ] = useState( [] );
    const [ productById, setProductById ] = useState( [] );
    const [ productByCategory, setProductByCategory ] = useState( [] );
    const [ filter, setFilter ] = useState( 'default' )

    const base = "https://powstik-back-test.azurewebsites.net"
    

    //api not working currently
    
    const get_all_products = `${base}/product/`
    const get_product_by_id = `${base}/product/1`
    const get_product_under_category = `${base}product/bycategory/Diabetes`

    const getProduct = async () => {
        const res = await Submit( get_all_products, 'GET' );
        setProducts(res.data);
        console.log('product data', res.data);
    };

    const getProductById = async () => {
        const res = await Submit( get_product_by_id, 'GET' );
        setProductById( res.data );
        console.log( 'product by id', res.data );
    };

    const getProductByCategory = async () => {
        const res = await Submit( get_product_under_category, 'GET' );
        setProductByCategory( res.data );
        console.log( 'product by category', res.data );
    };

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const Discountchange = (value, event) => {
        console.log(value)
        if (!event) return;
        console.log(event.target.checked);
    }
    const Pricechange = (value) => {
        console.log(value)
    }
    const Ratingchange = (value) => {
        console.log(value)
    }

    useEffect(() => {
        getProduct();
    }, [] );

    return (
        <React.Fragment>
            <Background>
                <SuperCard>
                    <FilterDisplay>
                        <P1
                            color="#616161"
                            size={21}
                            weight={400}
                            lineHeight={24}
                            style={{ paddingBottom: 18, paddingTop: 20 }}
                        >
                            Home/Products
                        </P1>
                        <P1
                            color="#616161"
                            size={21}
                            weight={400}
                            lineHeight={24}
                            style={{ paddingBottom: 18, paddingTop: 20 }}
                        >
                            Showing 1-12 of the 34 results
                        </P1>
                        <Filter>
                            <Accordian Title={"Mothers&Child"} />
                            <Accordian Title={"Diabetes"} />
                            <Accordian Title={"Geriatrics"} />
                            <Accordian Title={"Organic"} />
                            <Accordian Title={"Neutraceuticals"} />
                            <Accordian Title={"Plant Based Foods"} />
                        </Filter>
                        <P1 color='rgba(139, 195, 74, 1)' size={ 18 } weight={ 600 } style={ { paddingLeft: 15, paddingBottom: 10, paddingTop: 10 } }>Discount</P1>
                        <FilterDiv>
                            <FilterBy checktitle={"70% more"} Discountchange={Discountchange.bind(null, 70)} />
                            <FilterBy checktitle={"60% more"} Discountchange={Discountchange.bind(null, 60)} />
                            <FilterBy checktitle={"50% more"} Discountchange={Discountchange.bind(null, 50)} />
                            <FilterBy checktitle={"40% more"} Discountchange={Discountchange.bind(null, 40)} />
                            <FilterBy checktitle={"30% more"} Discountchange={Discountchange.bind(null, 30)} />
                            <FilterBy checktitle={"20% more"} Discountchange={Discountchange.bind(null, 20)} />
                            <FilterBy checktitle={"10% more"} Discountchange={Discountchange.bind(null, 10)} />
                        </FilterDiv>
                        <P1 color='rgba(139, 195, 74, 1)' size={ 18 } weight={ 400 } style={ { paddingLeft: 15, paddingBottom: 10, paddingTop: 10 } }>Price</P1>
                        <FilterDiv>
                            <FilterBy checktitle={"500 & more"} Pricechange={Pricechange.bind(null, 500)} />
                            <FilterBy checktitle={"400 & more"} Pricechange={Pricechange.bind(null, 400)} />
                            <FilterBy checktitle={"300 & more"} Pricechange={Pricechange.bind(null, 300)} />
                            <FilterBy checktitle={"200 & more"} Pricechange={Pricechange.bind(null, 200)} />
                            <FilterBy checktitle={"100 & more"} Pricechange={Pricechange.bind(null, 100)} />
                        </FilterDiv>
                        <P1 color='rgba(139, 195, 74, 1)' size={ 18 } weight={ 400 } style={ { paddingLeft: 15, paddingBottom: 10, paddingTop: 10 } }>Rating</P1>
                        <FilterDiv>
                            <FilterBy checktitle={"4.5 stars"} Ratingchange={Ratingchange.bind(null, 4.5)} />
                            <FilterBy checktitle={"4.4 stars"} Ratingchange={Ratingchange.bind(null, 4.4)} />
                            <FilterBy checktitle={"4.3 stars"} Ratingchange={Ratingchange.bind(null, 4.3)} />
                            <FilterBy checktitle={"4.2 stars"} Ratingchange={Ratingchange.bind(null, 4.2)} />
                            <FilterBy checktitle={"4.1 stars"} Ratingchange={Ratingchange.bind(null, 4.1)} />
                        </FilterDiv>
                    </FilterDisplay>
                    <ProductDisplay>
                        <SortContainer>
                            <SortSelect name="filter" id="filter" value={filter} onChange={handleChange}>
                                <option value="default">Relevance</option>
                                <option value="priceHighToLow">Price: High to Low</option>
                                <option value="priceLowToHigh">Price: Low to High</option>
                            </SortSelect>
                        </SortContainer>
                        {/* <AdBanner src={ Advertisment } alt="advertisement" /> */}
                        <ProductContainer>
                            { product.map( i => {
                                if ( i % 7 == 0 || i == 1 ) {
                                    return (
                                        <><AdBanner src={ Advertisment } alt="advertisement" />
                                            <ProductCard>
                                            <OfferAndLike>
                                                <DiscountContainer>
                                                    <DiscountContent>
                                                        {i.discount}%
                                                    </DiscountContent>
                                                </DiscountContainer>
                                                <LikeButton>
                                                    <FavoriteBorderOutlinedIcon />
                                                </LikeButton>
                                            </OfferAndLike>
                                            <ProductImageContainer>
                                                <ProductImage src={ ProductIMG } />
                                            </ProductImageContainer>
                                                <P1 color='#000000' size={ 11 } weight={ 200 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>{ i.categories }</P1>
                                                <P1 color='#000000' size={ 15 } weight={ 700 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>{ i.name }</P1>
                                            <P1 color='#000000' size={ 12 } weight={ 700 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>Rs.{i.price}</P1>
                                            <RatingAndAddDiv>
                                                <RatingDiv>
                                                    <P1 color='#000000' size={ 14 } weight={ 700 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>4.{ 6 - (i%6) }</P1>
                                                    <BorderStar>
                                                        <StarBorderIcon />
                                                    </BorderStar>
                                                    <P1 color='#000000' size={ 20 } weight={ 200 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>|</P1>
                                                    <P1 color='#000000' size={ 14 } weight={ 700 } style={ { paddingLeft: 5, paddingBottom: 0, paddingTop: 0 } }>{ 3 * i }K</P1>
                                                </RatingDiv>
                                                <AddToCart>
                                                    <AddIcon />
                                                    <P1 color='#000000' size={ 15 } weight={ 700 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>ADD</P1>
                                                </AddToCart>
                                            </RatingAndAddDiv>
                                        </ProductCard></>
                                    )
                                }
                                return (
                                    <ProductCard>
                                            <OfferAndLike>
                                                <DiscountContainer>
                                                    <DiscountContent>
                                                        {i.discount}%
                                                    </DiscountContent>
                                                </DiscountContainer>
                                                <LikeButton>
                                                    <FavoriteBorderOutlinedIcon />
                                                </LikeButton>
                                            </OfferAndLike>
                                            <ProductImageContainer>
                                                <ProductImage src={ ProductIMG } />
                                            </ProductImageContainer>
                                                <P1 color='#000000' size={ 11 } weight={ 200 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>{ i.categories }</P1>
                                                <P1 color='#000000' size={ 15 } weight={ 700 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>{ i.name }</P1>
                                            <P1 color='#000000' size={ 12 } weight={ 700 } style={ { paddingLeft: 25, paddingBottom: 0, paddingTop: 0 } }>Rs.{i.price}</P1>
                                            <RatingAndAddDiv>
                                                <RatingDiv>
                                                    <P1 color='#000000' size={ 14 } weight={ 700 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>4.{ 6 - (i%6) }</P1>
                                                    <BorderStar>
                                                        <StarBorderIcon />
                                                    </BorderStar>
                                                    <P1 color='#000000' size={ 20 } weight={ 200 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>|</P1>
                                                    <P1 color='#000000' size={ 14 } weight={ 700 } style={ { paddingLeft: 5, paddingBottom: 0, paddingTop: 0 } }>{ 3 * i }K</P1>
                                                </RatingDiv>
                                                <AddToCart>
                                                    <AddIcon />
                                                    <P1 color='#000000' size={ 15 } weight={ 700 } style={ { paddingLeft: 0, paddingBottom: 0, paddingTop: 0 } }>ADD</P1>
                                                </AddToCart>
                                            </RatingAndAddDiv>
                                        </ProductCard>
                                );
                            })}
                        </ProductContainer>
                    </ProductDisplay>
                </SuperCard>
            </Background>
            <Footer />
        </React.Fragment>
    )
}

export default ProductOverview