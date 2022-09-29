import React from "react";
import './Burger.scss'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props: any) => {
    let breadTop = {
        type: 'bread-top'
    }
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;