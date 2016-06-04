import React from 'react';
import ReactDOM from 'react-dom';

import styles from './styles.module.css';
import './app.css'

const App = React.createClass({
    render: function () {
        return (
            <div className={styles.wrapper}>
                <h1>Environment: {__NODE_ENV__}</h1>
            </div>
        );
    }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App/>, mountNode);