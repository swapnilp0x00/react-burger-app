import React, { Component } from "react";
import Aux from '../../HOC/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'; 

const INGREDIENT_PRICES = {
    salad: 1,
    meat: 5,
    cheese: 3,
    bacon: 4
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0
        },
        totalPrice: 4
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newCount;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render() {
        return (
        <Aux>
            <div>
                {this.state.totalPrice}
            </div>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
                ingredientAdded={this.addIngredient}
                ingredientRemoved={this.removeIngredient}
            />
        </Aux>
        )
    }
}

export default BurgerBuilder;