import React, { Component } from 'react';
import Aux from '../../HOC/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 1,
  meat: 5,
  cheese: 3,
  bacon: 4
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasing: false,
    isLoading: false
  };

  componentDidMount() {
    axios.get('/ingredients.json').then(response => {
      console.log(response);
      this.setState({ ingredients: response.data });
    });
  }

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };
  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = newCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };

  purchasehandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    console.log('AAA');
    this.setState({ purchasing: false });
  };

  purchaseContinuedHandler = () => {
    // alert('Continued');
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: 'Swapnil',
        email: 'abc@gmail.com'
      },
      deliveryMethod: 'fast'
    };

    this.setState({ isLoading: true });
    axios
      .post('/orders.json', order)
      .then(response => {
        console.log(response);
        this.setState({ isLoading: false, purchasing: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false, purchasing: false });
      });
  };

  render() {
    // Derive disabled infor from state
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Spinner />;
    if (this.state.ingredients) {
      // Derive canPurchase from state
      const canPurchase = Object.keys(this.state.ingredients)
        .map(i => this.state.ingredients[i])
        .some(i => i > 0);

      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ordered={this.purchasehandler}
            purchasing={this.state.purchasing}
            canPurchase={canPurchase}
            price={this.state.totalPrice}
            disabledInfo={disabledInfo}
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
          />
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinuedHandler}
          ingredients={this.state.ingredients}
        ></OrderSummary>
      );
    }
    if (this.state.isLoading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
