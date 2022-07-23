import React from 'react'
import Footer from '../../../util/components/FooterWhite'
import Header from '../../LandingPage/Header/Header.component';
import { Container, ProductContainer } from '../../ProductPage/product.styles';
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent';
import { Container1, FilteredContainer } from './Product.styles';
import Accordian from '../../../util/components/Accordian/Accordian.component';
import FilterBy from '../../../util/FilterBy/FilterBy.component';
import { useEffect } from 'react';
import { Submit } from '../../configApi/function';

const ProductOverview = () => {
    const [product, setProducts] = React.useState(null);
    const getProduct = async () => {
        const res = await Submit({}, '/products/', 'get');

        setProducts(res.data);
        console.log('product data', res.data);
    };
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <React.Fragment>
            <Header />
            <Container>
                <ProductContainer >
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
                    <Container1>
                        <FilteredContainer>
                            <Accordian Title={"Mothers&Child"} />
                            <Accordian Title={"Diabetes"} />
                            <Accordian Title={"Geriatrics"} />
                            <Accordian Title={"Organic"} />
                            <Accordian Title={"Neutraceuticals"} />
                            <Accordian Title={"Plant Based Foods"} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Discount</P1>
                            <FilterBy checktitle={"70% more"} />
                            <FilterBy checktitle={"60% more"} />
                            <FilterBy checktitle={"50% more"} />
                            <FilterBy checktitle={"40% more"} />
                            <FilterBy checktitle={"30% more"} />
                            <FilterBy checktitle={"20% more"} />
                            <FilterBy checktitle={"10% more"} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Price</P1>
                            <FilterBy checktitle={"500 & more"} />
                            <FilterBy checktitle={"400 & more"} />
                            <FilterBy checktitle={"300 & more"} />
                            <FilterBy checktitle={"200 & more"} />
                            <FilterBy checktitle={"100 & more"} />
                            <P1 color='rgba(139, 195, 74, 1)' size={18} weight={400} style={{ paddingLeft: 15, paddingBottom: 10, paddingTop: 10 }}>Rating</P1>
                            <FilterBy checktitle={"4.5 stars"} />
                            <FilterBy checktitle={"4.4 stars"} />
                            <FilterBy checktitle={"4.3 stars"} />
                            <FilterBy checktitle={"4.2 stars"} />
                            <FilterBy checktitle={"4.1 stars"} />
                        </FilteredContainer>

                    </Container1>
                </ProductContainer>
            </Container>
            <Footer />
        </React.Fragment>
    )
}

export default ProductOverview