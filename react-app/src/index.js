import React from 'react';
import ReactDOM from 'react-dom';

import Jss from 'jss';
import JssPreset from 'jss-preset-default';
import {JssProvider} from 'react-jss';

import {App} from './app.jsx';

class ReactApp extends HTMLElement{
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
        this.applicationRoot = document.createElement('div');
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'main.css';
        this.root.appendChild(this.applicationRoot);
        this.root.appendChild(link);
    }

    connectedCallback() {
        Jss.setup({
            insertionPoint: this.applicationRoot,
            ...JssPreset()
        });
        const userData = this.attributes.userData.value;
        ReactDOM.render((
            <JssProvider jss={Jss}>
                <App userData={userData} />
            </JssProvider>
        ), this.applicationRoot);
    }

    disconnectedCallback() {
        ReactDOM.render(null, this.applicationRoot);
    }
}

window.customElements.define('react-app', ReactApp);
