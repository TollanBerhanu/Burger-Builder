import React from "react";
import './BuildControls.scss'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const BuildControls = (props: any) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <span className="price">{props.price.toFixed(2)}</span></p>

            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={(props.ingredients[ctrl.type] <= 0)} />
            ))}
            <button className="OrderButton" disabled={!props.purchaseable}
                onClick={props.ordered} >ORDER NOW</button>
        </div>
    )
}

export default BuildControls