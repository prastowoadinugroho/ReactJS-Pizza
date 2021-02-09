import React from 'react'
import { Bars, Nav,NavIcon,NavLink } from './navbarElement'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to = '/'>Pizza</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars/>
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
