import React, { useState } from "react";
import './Layout.scss'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props: any) => {

const [showSideDrawer, setShowSideDrawer] = useState(false)

const toggleSideDrawerHandler = () => {
    setShowSideDrawer((prevState) => !prevState) // Best practice of accessing state with in setState function
}

const closeSideDrawerHandler = () => {
    setShowSideDrawer(false)
}

    return(
        <div className="Layout">
            <Toolbar drawerToggleClicked={toggleSideDrawerHandler} />
            <SideDrawer show={showSideDrawer} closed={closeSideDrawerHandler} />
            <main className="content">
                { props.children }
            </main>
        </div>
    )
}

export default Layout;