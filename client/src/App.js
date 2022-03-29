import React from 'react';
import {Route, Switch} from "react-router-dom"
import Home from './Components/Home/Home';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/' exact component={Intro}/>
      <Route path='/Home' exact component={Home}/>

    </Switch>
  
    </div>
  );
}

export default App;
