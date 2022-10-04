import React from "react";
import './BuildControl.scss'

const BuildControl = (props: any) => 
    (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less">Less</button>
            <button className="More" onClick={props.added}>More</button>
        </div>
    )

export default BuildControl;