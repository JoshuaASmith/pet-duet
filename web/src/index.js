import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
var Raven = require('raven-js')

Raven.config('https://7f25d3eddc334f89ab832ce192bf3b71@sentry.io/122073').install()

ReactDOM.render(
    <App/>, document.getElementById('root'));
