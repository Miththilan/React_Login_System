import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import LoginFront from './Components/LoginFront';
import WelcomePage from './Components/WelcomePage';



class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginFront}/>
            <Route path="/Welcome/:username" component={WelcomePage}/>
            <Route path="/logout" component={LoginFront}/>
        </Switch>
     </BrowserRouter>
    )
  }
}

export default App;
