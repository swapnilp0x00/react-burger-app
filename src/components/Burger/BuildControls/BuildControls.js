import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const buildCOntrols = props => {
    return (
        <div className={classes.BuildControls}>
            <div>Current Price: <strong>{props.price.toFixed(2)}</strong></div>
            {controls.map(control => <BuildControl 
            key={control.label} 
            label={control.label}
            disabled={props.disabledInfo[control.type]}
            removed={() => props.ingredientRemoved(control.type)} 
            added={() => props.ingredientAdded(control.type)}/>)}
            <button className={classes.OrderButton} disabled={!props.canPurchase}>ORDER NOW</button>
        </div>
    );
}

export default buildCOntrols;