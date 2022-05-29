import React from 'react'
import { CompanyHeaderName, CompanyNameImage, HamburgerMenu, HeaderBox, HeaderLink, HeaderLinks } from './Header.styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton.component';

const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <HeaderBox >
                <CompanyHeaderName>
                    <CompanyNameImage></CompanyNameImage>
                </CompanyHeaderName>
                <HeaderLink>
                    <HeaderLinks>Home</HeaderLinks>
                    <HeaderLinks>Product</HeaderLinks>
                    <HeaderLinks>Account</HeaderLinks>
                    <ShoppingCartIcon />
                    <SearchIcon />
                </HeaderLink>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    <MenuIcon fontSize='large' />
                </HamburgerMenu>
            </HeaderBox>
            <BurgerButton open={open}/>
        </>
    )
}

export default Header