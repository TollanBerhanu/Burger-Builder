import React from "react";
import './NavItem.scss'

const NavItem = (props: any) => (
    <li className="NavItem">
        <a href={props.link} 
            className={props.active ? 'active' : ''}> {props.children} </a>
        </li>
)

export default NavItem