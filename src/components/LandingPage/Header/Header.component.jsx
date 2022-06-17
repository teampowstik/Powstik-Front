import React from 'react'
import { CompanyHeaderName, CompanyNameImage, HamburgerMenu, HeaderBox, HeaderLink, HeaderLinks } from './Header.styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton.component';
import AccountImage from '../../../assets/Group.svg';
import InputField from '../InputField/InputField.components';

const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <HeaderBox >
                <CompanyHeaderName>
                    <CompanyNameImage></CompanyNameImage>
                </CompanyHeaderName>
                <HeaderLink>
                    <HeaderLinks>Products</HeaderLinks>
                    <HeaderLinks>Services</HeaderLinks>
                    <InputField />
                    <ShoppingCartIcon />
                    <img src={AccountImage} alt='Account' style={{ width: 30, height: 30 }} />
                </HeaderLink>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    <MenuIcon fontSize='large' />
                </HamburgerMenu>
            </HeaderBox>
            <BurgerButton open={open} />
        </>
    )
}

export default Header