import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'
import {keepLogin} from '../actions'

import Header from './Header.js'
import Home from './Home'
import Login from './Login'

const cookie = new cookies()

class App extends Component {

    
    componentDidMount(){

        var userCookie = cookie.get('masihLogin')
        if(userCookie !== undefined){
            this.props.keepLogin(userCookie)
        }

    }


  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Header />
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
      </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, {keepLogin})(App)
