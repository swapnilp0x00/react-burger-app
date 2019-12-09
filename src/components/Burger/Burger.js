import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  return (
    <div className={classes.Burger}>
        <BurgerIngredient type="burger-top"></BurgerIngredient>
        <BurgerIngredient type="burger-cheese"></BurgerIngredient>
        <BurgerIngredient type="burger-meat"></BurgerIngredient>
        <BurgerIngredient type="burger-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
