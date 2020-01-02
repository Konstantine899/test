import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const aplication = (
    <BrowserRouter>
    <App />
    </BrowserRouter>
)

ReactDOM.render(aplication , document.getElementById('root'));


