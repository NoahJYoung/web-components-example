/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Observable} from 'windowed-observable';
import {createUseStyles} from 'react-jss';
import {loginStyles} from './LoginPanelStyles';

const observable = new Observable('user');

const useStyles = createUseStyles(loginStyles);

export const LoginPanel = ({userData}) => {
    const [user, setUser] = useState(userData);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        setUser(userData);
    }, [userData]);

    const handleLogin = username => {
        if (username) {
            setUser(username);
            observable.publish(username);
        } else {
            alert('Please enter your username and password');
        }
    };

    const handleLogout = () => {
        setUser(null);
        observable.publish('');
    };

    const handleOnChange = event => {
        setUsername(event.target.value);
    };

    const classes = useStyles();

    return user ? 
        (
        <div className={classes.panelContainer}>
            <h3 style={{margin: 0, padding: 0, fontWeight: '200'}}>Hello,</h3>

            <h2 style={{margin: 0, padding: 0, fontWeight: '400'}}>{user}</h2>

            <button className={classes.button} onClick={handleLogout}>Log out</button>
        </div>
    ) : (
        <div className={classes.loginForm}>
            <label className={classes.label}>Username</label>

            <input className={classes.input} onChange={handleOnChange} type="text" placeholder="Enter your username" required />

            <label className={classes.label}>Password</label>

            <input className={classes.input} type="password" placeholder="Enter your password" required />

            <button onClick={() => handleLogin(username)} className={classes.button}>Log In</button>
        </div>
    );
};
