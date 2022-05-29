import React from 'react'
import { ShopText, Description, DescriptionImageContainer, DescriptionWrapper, Diseases, LeafLogo, NutritionWork, Rating, ShopButton } from './WebsiteDescription.styles'
import LeafImage from '../../../assets/Images/logo-leaf-new 1.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from '../../../assets/Images/organic.png'
function WebsiteDescription() {
    return (
        <DescriptionWrapper>
            <DescriptionImageContainer >
                <img src={Image} alt='Some Product' style={{ minHeight: 350, minWidth: 400 }} />
            </DescriptionImageContainer>
            <Description >
                <LeafLogo >
                    <img src={LeafImage} alt='Leaf' />
                </LeafLogo>
                <Diseases >Geriatrics, Nephrology, Obesity, Diabetes, Hyperlipidemia,
                    Hypertension, Obstetrics, Paediatrics...</Diseases>
                <NutritionWork >Specialty Nutrition That Works!</NutritionWork>
                <Rating >Highest Rated Regional Vendors</Rating>
                <ShopButton ><ShoppingCartIcon /><ShopText>Shop Now</ShopText></ShopButton>
            </Description>
        </DescriptionWrapper>
    )
}

export default WebsiteDescription