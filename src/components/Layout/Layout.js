import React from 'react';
import classes from './Layout.css';
import Aux from '../../HOC/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
    <Aux>
        <div>SideDrawer, Backdrop</div>
        <Toolbar></Toolbar>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;