import React from 'react'
import { CompanyHeaderName, CompanyNameImage, HamburgerMenu, HeaderBox, HeaderLink, HeaderLinks, LinkContainer } from './Header.styles'
import cart from '../../../assets/Vector.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import BurgerButton from '../../../util/components/BurgerButton/BurgerButton.component';
import AccountImage from '../../../assets/Group.svg';
import InputField from '../InputField/InputField.components';
import { Link } from 'react-router-dom';
import NavLinks from '../../../util/components/NavLinks/NavLinks.component';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <HeaderBox >
                <CompanyHeaderName>
                    <CompanyNameImage to='/'></CompanyNameImage>
                </CompanyHeaderName>
                <HeaderLink>
                    <HeaderLinks onMouseEnter={setIsOpen.bind(null, true)} to='/product'>Products</HeaderLinks>
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
            {isOpen && <NavLinks onMouseEnter={setIsOpen.bind(null, true)} onMouseLeave={setIsOpen.bind(null, false)} Open={isOpen} />}
        </>
    )
}

export default Header;