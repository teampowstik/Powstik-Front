import React from 'react'
import { NavContainer } from './NavLinks.styles'
import Navdata from '../../../JSON/data.json';
import NavTitle from '../../NavTitle/NavTitle.component';
const NavLinks = () => {
    console.log(Navdata.map(items => items))
    return (
        <NavContainer>
            {
                Navdata.map(items => <NavTitle items={items} />)
            }
        </NavContainer>
    )
}

export default NavLinks