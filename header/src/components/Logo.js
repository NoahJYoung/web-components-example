import React from 'react';
import {createUseStyles} from 'react-jss';
import {logoStyles} from './LogoStyles';

const useStyles = createUseStyles(logoStyles);

export const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <h2 className={classes.h2}>A</h2>
            <h1 className={classes.h1}>Cool</h1>
            <h3 className={classes.h3}>Logo</h3>
        </div>
    );
};
