import React from 'react';
import NavigationItem from './NavigationItem.js/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link = '/' > Burger Builder </NavigationItem>
        <NavigationItem link = '/orders' > Orders</NavigationItem>
        <NavigationItem link = '/auth' > Authentication</NavigationItem>
    </ul>
)

export default navigationItems;