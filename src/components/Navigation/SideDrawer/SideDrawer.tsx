import React from "react";
import './SideDrawer.scss'
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props: any) => {
    let sideDrawerClasses = ['SideDrawer', 'SideDrawer_Close']
    if(props.show) sideDrawerClasses = ['SideDrawer', 'SideDrawer_Open']
    return (
        <>
        <Backdrop show={props.show} clicked={props.closed} />
        <div className={sideDrawerClasses.join(' ')}>
            <div className="SideDrawer_Logo">
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
        </>
    )
}

export default SideDrawer