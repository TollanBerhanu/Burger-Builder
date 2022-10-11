import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = (props: any) => {
    const ingredientSummary = Object.keys(props.ingredients).map((ingKey) => {
        return <li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>
    })

    return(
        <div className="OrderSummary">
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    )
}

export default OrderSummary