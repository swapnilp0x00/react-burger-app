import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seed1}></div>
          <div className={classes.Seed2}></div>
        </div>
      );
      break;
    case 'bread-meat':
      ingredient = <div className={classes.Meat}></div>;
      break;
    case 'bread-cheese':
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case 'bread-salad':
      ingredient = <div className={classes.Salad}></div>;
      break;
    case 'bread-bacon':
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      break;
  }
  return ingredient;
};

burgerIngredient.PropTypes = {
    type: PropTypes.string
}

export default burgerIngredient;
