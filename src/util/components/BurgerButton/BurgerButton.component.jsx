import React from 'react'
import { AllLinks, Links } from './BurgerButton.styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const BurgerButton = ({ open }) => {
    return (
        <AllLinks open={open}>
            <Links to='/product'>Product</Links>
            <Links to='/account-details'>Account</Links>
            <Links to='cart'><ShoppingCartIcon /></Links>
            <Links><SearchIcon /></Links>
        </AllLinks>
    )
}

export default BurgerButton