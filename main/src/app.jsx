import React, {useState, useEffect} from 'react';
import '../../react-app/build/reactApp';
import '../../header/build/Header';
import '../../svelte-app/public/build/bundle';
import '../../litcomponent/index.js';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {Observable} from 'windowed-observable';

import styles from './app.module.css';

const centeredStyles = {
    fontSize: '20px',
    display: 'flex',
    height: 'calc(100vh - 230px)',
    justifyContent: 'center',
    alignItems: 'center',
};

const userObservable = new Observable('user');

export const App = () => {
    const [user, setUser] = useState('');
    const page1Message = user ? `hello ${user} this is page 1` : 'Log in to see page 1 content';

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
        <div className={styles.app}>
        <BrowserRouter>
            <header-app userData={user} />
            <div className={styles.linkContainer}>
                <Link to='/'>Home</Link>

                <Link to='/svelte'>Svelte App</Link>

                <Link to='/react'>React App</Link>

                <Link to='/lit'>Lit Component</Link>
            </div>
            <Routes>
                <Route path="/" element={<div style={centeredStyles}>{page1Message}</div>} />

                <Route path="/svelte" element={<svelte-app userData={user}></svelte-app>} />

                <Route path="/react" element={<react-app userData={user}></react-app>} />

                <Route path="/lit" element={<lit-component userData={user}></lit-component>} />
            </Routes>
        </BrowserRouter>
    </div>
    );
};
