import React from "react";
import './Layout.scss'

const layout = (props: any) => {
    return(
        <div className="Layout">
            <div>Toolbar, sidebar, backdrop</div>
            <main className="content">
                { props.children }
            </main>
        </div>
    )
}

export default layout;