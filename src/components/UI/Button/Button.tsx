import React from "react";
import './Button.scss'

const Button = (props: any) => (
    <div className="Button">
        <button className={[ 'Btn', props.btnType ].join(' ')} onClick={props.clicked}> 
            {props.children}
        </button>
    </div>
    
)

export default Button