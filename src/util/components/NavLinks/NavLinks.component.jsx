import React from 'react'
import { NavContainer } from './NavLinks.styles'
import Navdata from '../../../JSON/data.json';
import NavTitle from '../../NavTitle/NavTitle.component';
const NavLinks = () => {
    return (
        <NavContainer>
            {
                Navdata.map(items => <NavTitle key={items.Category.categoryId} items={items.Category} />)
            }
        </NavContainer>
    )
}

export default NavLinks