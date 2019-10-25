import React,  { Component }  from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


// components
import HomepageLayout from './components/HomepageLayout'
import Signup from './components/Signup'


class App extends Component {
 
  render(){  
    return (
      <Router>
<Switch>
  <Route exact path="/" component={HomepageLayout}/>

  <Route exact path='/signup' component={Signup}/>
  
</Switch>
</Router>
    );
  }
}

export default App;
