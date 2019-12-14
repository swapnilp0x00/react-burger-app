import React from 'react';
import Aux from '../../../HOC/Aux';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey, index) => (
    <li key={igKey + index}>
      <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout</p>
    </Aux>
  );
};

export default orderSummary;