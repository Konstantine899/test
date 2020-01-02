import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss'


class Navigation extends Component {
// Создаем состояние
    state = {
        items : [
           {name: ' Катриджи '} ,
           {name: ' Тоннер '},
           {name:' Чернила '},
           {name: ' Запчасти '},
           {name: ' Принтеры '},
           {name: ' Бумага/Фото '},
           {name: ' Ноутбуки '},
           {name: ' ПВЭМ/Комплектующие'},
           {name: ' Проекторы '}
       ]
   }
    render() {
       const items = this.state.items  // инициализируем state и заносим в переменную

        return (

            <nav className="navigation">
                <li> 
                    <NavLink to="/src/components/header/main/cartridjes/сartridjes.js" exact>{items[0].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/tonner/tonner.js" exact>{items[1].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/fuelling/fuelling.js" exact>{items[2].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/spare_parts/spare_parts.js" exact>{items[3].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/printer/printer.js" exact>{items[4].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/paper/paper.js" exact>{items[5].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/laptop/laptop.js" exact>{items[6].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/parts/parts.js" exact>{items[7].name}</NavLink>
                </li>
                <li>
                    <NavLink to="/src/components/main/projector/projector.js" exact>{items[8].name}</NavLink>
                </li>
            </nav>
        );

    }
}

export default Navigation;