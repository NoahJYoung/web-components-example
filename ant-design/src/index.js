import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app.jsx';

import 'antd/dist/antd.css';

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
        const userData = this.attributes.userData.value;

        ReactDOM.render((
            <App userData={userData} />
        ), this.applicationRoot);
    }

    disconnectedCallback() {
        ReactDOM.render(null, this.applicationRoot);
    }
}

window.customElements.define('ant-design', ReactApp);
