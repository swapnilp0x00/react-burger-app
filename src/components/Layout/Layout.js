import React from 'react';
import classes from './Layout.css';
import Aux from '../../HOC/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;