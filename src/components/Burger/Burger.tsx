import React from "react";
import './Burger.scss'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props: any) => {
    let ingredients = Object.keys(props.ingredients).map(ingKey => { // Transform the object into an array of string keys
         return [...Array(props.ingredients[ingKey])].map((_,i) => { // Declare and spread an array with each ingredients no. as its size
            return <BurgerIngredient key={ingKey+i} type={ingKey} /> // Return a BurgerIngredient with the ingredient key as type and a unique key
         })
        }).reduce((prevArr: JSX.Element[], el: JSX.Element[]) => { // transform the ingredients array so that it will be an empty array
            return prevArr.concat(el) // Fill the array with JSX elements of ingredients
        }, []) // Set initial value to empty array
        if(ingredients.length === 0)
            ingredients = [<p>Please start adding ingredients!</p>]
        // else console.log(ingredients)
        
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;