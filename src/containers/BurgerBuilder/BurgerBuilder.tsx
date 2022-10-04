import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

function BurgerBuilder(props: any){
    const [ingredients, setIngreients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    })

    const [price, setPrice] = useState(4)

    const addIngredientHandler = (type: string) => {
        let updatedIngredients  = {
            ...ingredients
        }
        // 'type' is a key with type of ingredients ... this is done to avoid typescript error
        updatedIngredients[type as keyof typeof ingredients] = Number(updatedIngredients[type as keyof typeof ingredients] + 1)
        setIngreients(updatedIngredients) // Update the ingredients
        let updatedPrice = price
        updatedPrice += INGRIDIENT_PRICES[type as keyof typeof ingredients]
        setPrice(updatedPrice) // Update the price
    }

    const removeIngredientHandler = (type: string) => {

    }

    return(
        <>
            <p>Meat{ingredients.meat}</p>
            <p>Salad{ingredients.salad}</p>
            <p>Bacon{ingredients.bacon}</p>
            <p>Cheese{ingredients.cheese}</p>
            <p>{price}</p>
            <Burger ingredients={ingredients}/>
            <BuildControls ingredientAdded={addIngredientHandler} />
        </>
    );
}

export default BurgerBuilder;