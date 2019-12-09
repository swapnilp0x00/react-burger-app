import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  let transformedIngredients = [];
  for (let igKey in props.ingredients) {
    if (props.ingredients.hasOwnProperty(igKey)) {
      // console.log(igKey)
      const temp = Array(props.ingredients[igKey]).fill(1).map((_, i) => {
        return (<BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>);
      });
      // console.log(temp);
      transformedIngredients.push(...temp);
    }
  }
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='burger-top'>
      </BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type='burger-bottom'></BurgerIngredient>
    </div>
  );
};

export default burger;
