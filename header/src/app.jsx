/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {LoginPanel} from './components/LoginPanel';
import {Logo} from './components/Logo';
import {Observable} from 'windowed-observable';

import {createUseStyles} from 'react-jss';
import {appStyles} from './appStyles';

const useStyles = createUseStyles(appStyles);

const headerObservable = new Observable('header');

export const App = ({userData}) => {
    const [headerMessage, setHeaderMessage] = useState('');

    const handleMessageEvent = newMessage => {
        setHeaderMessage(newMessage);
    };

    useEffect(() => {
        headerObservable.subscribe(handleMessageEvent);
        return () => {
            headerObservable.unsubscribe(handleMessageEvent);
        };  
    }, [handleMessageEvent]);

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Logo />
            <h1 className={classes.headerMessage}>{headerMessage}</h1>
            <LoginPanel userData={userData} />
        </div>
    );
};
