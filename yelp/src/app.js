import React from 'react';
import ReactDOM from 'react-dom';

import './app.css'
import styles from './styles.module.css'

import 'font-awesome/css/font-awesome.css'

import App from './containers /App/App.js';

const mountNode = document.querySelector('#root');
ReactDOM.render(<App/>, mountNode);