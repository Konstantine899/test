import React, { Component } from 'react';
import './cartridje.scss';

export default class Card extends Component {
    // создаю state
    state = {
        cartridje: [
            { name: 'Toshiba T-810E', price: "44,00" }
        ]
    }
    render() {

        const cartridje = this.state.cartridje // не забывай инициализировать state и занести его в переменную

        return (
            <body>
                <h1>{cartridje[0].name}&nbsp;&nbsp;&nbsp;{cartridje[0].price}</h1>
            </body>
        );
    }
}

