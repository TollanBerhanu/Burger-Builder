import React from "react";
import './Layout.scss'
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = (props: any) => {
    return(
        <div className="Layout">
            <Toolbar />
            <div>Toolbar, sidebar, backdrop</div>
            <main className="content">
                { props.children }
            </main>
        </div>
    )
}

export default Layout;