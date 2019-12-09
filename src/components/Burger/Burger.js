import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="burger-top"></BurgerIngredient>
        <BurgerIngredient type="cheese"></BurgerIngredient>
        <BurgerIngredient type="meat"></BurgerIngredient>
        <BurgerIngredient type="salad"></BurgerIngredient>
        <BurgerIngredient type="bacon"></BurgerIngredient>
        <BurgerIngredient type="burger-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
