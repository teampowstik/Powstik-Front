import React from 'react'
import DescriptionAndBuy from './DescriptionAndBuy/DescriptionAndBuy.component'
import { ProductContainer, Container, BuyContainer, ImagePreview, ImageShow } from './product.styles';
import image from '../../assets/Rectangle_154-removebg-preview.png';
import image2 from '../../assets/Rectangle_153__1_-removebg-preview.png';
import { H1, P1 } from '../../util/StyledComponent/premadeComponent';
const ProductPage = () => {
    return (
        <Container>
            <ProductContainer>
                <P1 color='#616161' size={21} weight={400}>Home/Products</P1>
                <H1 color='#000000' size={32} >120 Tablets – Ryder Spirulina</H1>
                <BuyContainer>
                    <ImagePreview>
                        <img src={image} alt='Preview' style={{ background: "rgba(139, 195, 74, 0.2)", marginBottom: 12 }} />
                        <img src={image} alt='Preview' style={{ background: "rgba(139, 195, 74, 0.2)", marginBottom: 12 }} />
                        <img src={image} alt='Preview' style={{ background: "rgba(139, 195, 74, 0.2)", marginBottom: 12 }} />
                        <img src={image} alt='Preview' style={{ background: "rgba(139, 195, 74, 0.2)", marginBottom: 12 }} />
                        <img src={image} alt='Preview' style={{ background: "rgba(139, 195, 74, 0.2)", marginBottom: 12 }} />
                    </ImagePreview>
                    <ImageShow>
                        <img src={image2} alt="BigPreview" />
                    </ImageShow>
                    <DescriptionAndBuy heading="Product Tags" disease="Diabetes" type="Groceries" price={468} count={1} description1="A delicious combination of premium nuts, seeds & raisins. Roasted & seasoned with our secret spice mix. Good health and taste in every bite."
                        description2="Taste profile: A little savoury, a little sweet. A little crunchy a little chewy. A hint of pepper a tinge of chilly. Good health & great taste in every bite." />
                </BuyContainer>
            </ProductContainer>
        </Container>
    )
}

export default ProductPage