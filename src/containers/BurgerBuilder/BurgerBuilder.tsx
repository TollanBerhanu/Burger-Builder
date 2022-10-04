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
        const updatedIngredients  = {
            ...ingredients
        }
        // 'type' is a key with type of ingredients ... this is done to avoid typescript error
        updatedIngredients[type as keyof typeof ingredients] += 1
        setIngreients(updatedIngredients) // Update the ingredients
        let updatedPrice = price
        updatedPrice += INGRIDIENT_PRICES[type as keyof typeof ingredients]
        setPrice(updatedPrice) // Update the price
    }

    const removeIngredientHandler = (type: string): boolean => {
        const updatedIngredients = {
            ...ingredients
        }
        if(ingredients[type as keyof typeof ingredients] > 0){
            updatedIngredients[type as keyof typeof ingredients] -= 1
            setIngreients(updatedIngredients)
            setPrice(price - INGRIDIENT_PRICES[type as keyof typeof ingredients])
            return true
        }
        else return false
    }

    return(
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredientAdded={addIngredientHandler} 
                ingredientRemoved={removeIngredientHandler}
                ingredients={ingredients} />
        </>
    );
}

export default BurgerBuilder;