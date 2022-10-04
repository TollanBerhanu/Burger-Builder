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
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} />
            ))}
        </div>
    )
}

export default BuildControls