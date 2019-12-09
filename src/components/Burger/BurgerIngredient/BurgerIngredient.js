import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case 'burger-bottom':
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case 'burger-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seed1}></div>
          <div className={classes.Seed2}></div>
        </div>
      );
      break;
    case 'burger-meat':
      ingredient = <div className={classes.Meat}></div>;
      break;
    case 'burger-cheese':
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case 'burger-salad':
      ingredient = <div className={classes.Salad}></div>;
      break;
    case 'burger-bacon':
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      break;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
