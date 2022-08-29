/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Observable} from 'windowed-observable';

const appStyles = {
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
}

const h1Styles = {
    fontSize: '4rem',
    fontWeight: '100',
    fontFamily: 'inherit',
    color: '#476af5',
    textTransform: 'uppercase',
}

const h2Styles = {
    fontSize: '2.5rem',
    fontWeight: '100',
}

const userObservable = new Observable('user');

export const App = ({userData}) => {
    const [user, setUser] = useState('')
    const handleUserEvent = newUser => {
        setUser(newUser);
    };

    useEffect(() => {
        userObservable.subscribe(handleUserEvent);
        return () => {
            userObservable.unsubscribe(handleUserEvent);
        };  
    }, [handleUserEvent]);

    return (
        <div style={appStyles}>
            <h1 style={h1Styles}>{`Hello ${user}`}</h1>
            <h2 style={h2Styles}>Welcome to the React app</h2>
        </div>
    );
};
