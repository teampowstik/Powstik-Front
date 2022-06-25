import React from 'react'
import { CompanyHeaderName, CompanyNameImage, HamburgerMenu, HeaderBox, HeaderLink, HeaderLinks } from './Header.styles'
import cart from '../../../assets/Vector.svg'

import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerButton from '../BurgerButton/BurgerButton.component';
import AccountImage from '../../../assets/Group.svg';
import InputField from '../InputField/InputField.components';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <HeaderBox >
                <CompanyHeaderName>
                    <CompanyNameImage to='/'></CompanyNameImage>
                </CompanyHeaderName>
                <HeaderLink>
                    <HeaderLinks to='/product'>Products</HeaderLinks>
                    <HeaderLinks to='/service'>Services</HeaderLinks>
                    <InputField />
                    <Link to='/cart'>
                        <img src={cart} alt='cart' style={{ width: 30, height: 30 }} />
                    </Link>
                    <Link to='/account-details'>
                        <img src={AccountImage} alt='Account' style={{ width: 30, height: 30 }} />
                    </Link>
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