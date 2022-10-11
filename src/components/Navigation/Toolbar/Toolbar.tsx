import React from "react";
import './Toolbar.scss'
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Toolbar = () => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavItems />
        </nav>
    </header>
)

export default Toolbar