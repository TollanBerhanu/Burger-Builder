import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    const [price, setPrice] = useState(4.00)
    const [purchaseable, setPurchaseable] = useState(false)
    const [ordered, setOrdered] = useState(false)

    const updatePurchaseableState = (updatedIngredients: any) => {
        let sumIng = Object.keys(updatedIngredients).map((ingKey) => {
            return updatedIngredients[ingKey]
        })
        .reduce((sum, el) => {
            return sum + el
        }, 0)
        console.log('Purchasable: ' + sumIng)
        console.log(ingredients)
        setPurchaseable(sumIng > 0)
    }
    const addIngredientHandler = (type: string) => {
        const updatedIngredients  = {
            ...ingredients
        }
        // 'type' is a key with type of ingredients ... this is done to avoid typescript error
        updatedIngredients[type as keyof typeof ingredients] += 1
        setIngreients(updatedIngredients) // Update the ingredients
        setPrice(price + INGRIDIENT_PRICES[type as keyof typeof ingredients]) // Update the price
        updatePurchaseableState(updatedIngredients)
    }

    const removeIngredientHandler = (type: string): boolean => {
        const updatedIngredients = {
            ...ingredients
        }
        if(ingredients[type as keyof typeof ingredients] > 0){
            updatedIngredients[type as keyof typeof ingredients] -= 1
            setIngreients(updatedIngredients)
            setPrice(price - INGRIDIENT_PRICES[type as keyof typeof ingredients])
            updatePurchaseableState(updatedIngredients)
            return true
        }
        else return false
    }

    const orderHandler = () => {
        setOrdered(true)
    }
    const closeOrderModalHandler = () => {
        setOrdered(false)
    }
    const continuePurchaseHandler = () => {
        alert('Purchased!')
    }

    return(
        <>
            
            <Modal show={ordered} modalClosed={closeOrderModalHandler}>
                <OrderSummary ingredients={ingredients}
                    price={price}
                    purchaseCancelled={closeOrderModalHandler}
                    purchaseContinued={continuePurchaseHandler} />
            </Modal>
            
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredientAdded={addIngredientHandler} 
                ingredientRemoved={removeIngredientHandler}
                ingredients={ingredients}
                price={price}
                purchaseable={purchaseable}
                ordered={orderHandler} />
        </>
    );
}

export default BurgerBuilder;