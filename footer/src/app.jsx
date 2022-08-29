/* eslint-disable react/prop-types */
import React from 'react';

import {createUseStyles} from 'react-jss';
import {appStyles} from './appStyles';

const useStyles = createUseStyles(appStyles);

export const App = ({userData}) => {
   
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div className={classes.footerInfoContainer}>
                <h3 className={classes.footerTitle}>Web Components POC</h3>
                <p className={classes.footerAuthors}>By Noah, Artem & Andrea</p>
            </div>
        </footer>
    );
};
