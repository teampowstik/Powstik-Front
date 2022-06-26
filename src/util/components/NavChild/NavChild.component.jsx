import React from 'react'

const NavChild = ({ items }) => {
    console.log(items.Diabetes.map(item => item.title))
    return (
        <div></div>
    )
}

export default NavChild