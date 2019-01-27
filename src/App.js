import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dahsboard/Dashboard';
import ScrumBoard from './components/scrumboard/ScrumBoard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateScrumBoard from './components/scrumboard/CreateScrumBoard';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/scrumboard/:id' component={ScrumBoard} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/newBoard" component={CreateScrumBoard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;