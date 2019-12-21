import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/Menu/DrawerToggle';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}></DrawerToggle>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    )
}

export default toolbar;