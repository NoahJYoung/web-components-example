/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {LoginPanel} from './components/LoginPanel';
import {Logo} from './components/Logo';
import {Observable} from 'windowed-observable';


const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #bbb',
};

const headerMessageStyles = {
    fontWeight: '100',
    textAlign: 'center',
};

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
    return (
        <div style={headerStyles}>
            <Logo />
            <h1 style={headerMessageStyles}>{headerMessage}</h1>
            <LoginPanel userData={userData} />
        </div>
    );
};
