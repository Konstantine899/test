import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import nav from './components/header/navigation/nav';
import cartridje from './components/header/navigation/cartridje/cartridje'
import fueling from './components/header/navigation/fuelling/fuelling'







export default class  App extends Component{

 
 render(){
  return (
    <div>
      
      <header>
      <Switch>
      <Route path=""  component ={nav} />
      </Switch>
      
      </header>
      <body>
      <Route path =""  component ={cartridje} />
      <Route path =""   component ={fueling} />
      
      
      
      </body>
      <footer>
        
      </footer>
    </div>
  );
  }
}

 
