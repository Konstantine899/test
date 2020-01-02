import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Card from './cartridje'

export default class Cartridje extends Component{
    render(){
        return(
            <body>
                <Route path="" exact component = {Card} />
            </body>
        );
    }
}