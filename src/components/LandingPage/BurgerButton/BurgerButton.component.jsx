import React from 'react'
import { AllLinks, Links } from './BurgerButton.styles'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const BurgerButton = ({ open }) => {
    return (
        <AllLinks open={open}>
            <Links>Home</Links>
            <Links>Product</Links>
            <Links>Account</Links>
            <Links><ShoppingCartIcon /></Links>
            <Links><SearchIcon /></Links>
        </AllLinks>
    )
}

export default BurgerButton