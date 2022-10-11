import React from "react";
import './NavItems.scss'
import NavItem from "./NavItem/NavItem";

const NavItems = () => (
    <ul className="NavItems">
        <NavItem link="/" active>Burger Builder</NavItem> {/* Compiles to active={true} */}
        <NavItem link="/">Checkout</NavItem>
    </ul>
)

export default NavItems