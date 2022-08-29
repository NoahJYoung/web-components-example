/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {Observable} from 'windowed-observable';


const panelContainerStyles = {
    fontFamily: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    justifyContent: 'space-evenly',
    height: '150px',
    width: '200px',
};

const loginFormStyles = {
    display: 'flex',
    padding: '5px',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '150px',
    width: '200px',
};

const buttonStyles = {
    fontFamily: 'inherit',
    cursor: 'pointer',
    color: 'white',
    background: '#476af5',
    border: 'none',
    height: '25px',
};

const observable = new Observable('user');


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

    return user ? 
        (
        <div style={panelContainerStyles}>
            <h3 style={{margin: 0, padding: 0, fontWeight: '200'}}>Hello,</h3>

            <h2 style={{margin: 0, padding: 0, fontWeight: '400'}}>{user}</h2>

            <button style={buttonStyles} onClick={handleLogout}>Log out</button>
        </div>
    ) : (
        <div style={loginFormStyles}>
            <label style={{fontSize: '0.8rem'}}>Username</label>

            <input style={{fontFamily: 'inherit'}} onChange={handleOnChange} type="text" placeholder="Enter your username" required />

            <label style={{fontSize: '0.8rem'}}>Password</label>

            <input style={{fontFamily: 'inherit'}} type="password" placeholder="Enter your password" required />

            <button onClick={() => handleLogin(username)} style={buttonStyles}>Log In</button>
        </div>
    );
};
