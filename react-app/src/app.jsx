/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Observable} from 'windowed-observable';
import {createUseStyles} from 'react-jss';
import {appStyles} from './styles';

const useStyles = createUseStyles(appStyles);

const userObservable = new Observable('user');
const headerObservable = new Observable('header');

export const App = ({userData}) => {
    const [user, setUser] = useState(userData);

    const handleOnChange = event => {
		headerObservable.publish(event.target.value);
	};

    const handleUserEvent = newUser => {
        setUser(newUser);
    };

    useEffect(() => {
        userObservable.subscribe(handleUserEvent);
        return () => {
            userObservable.unsubscribe(handleUserEvent);
        };  
    }, [handleUserEvent]);

    const classes = useStyles();

    return (
        <div className={classes.app}>
            <h1 className={classes.h1}>{`Hello ${user}`}</h1>
            <h2 className={classes.h2}>Welcome to the React app!</h2>
            <p className={classes.paragraph}>Type a message below to see it appear in the header.</p>
            <input type='text' className={classes.messageInput} onChange={handleOnChange} />
        </div>
    );
};
