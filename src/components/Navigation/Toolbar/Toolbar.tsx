import React from "react";
import './Toolbar.scss'
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props: any) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className="Toolbar_Logo">
            <Logo />
        </div>
        <nav className="Toolbar_Nav">
            <NavItems />
        </nav>
    </header>
)

export default Toolbar