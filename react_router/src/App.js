import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ( params ) => {
  console.table(params);
  return (<h1>Welcome User {params.username}!</h1>)
} 

export default class extends React.Component{
  state = {
    loggedIn : false
  }
  loginHandler = () => {
    this.setState({loggedIn : !this.state.loggedIn});
  }
  render(){
    return (
      <Router>
        <div>Welcome to React Router</div>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/user/Mehedi">User Mehedi</Link>
          </li>
        </ol>
        <h2>NavLinks</h2>
        <ol>
          <li>
            <NavLink to="/" exact activeStyle={
              {color:'green'}
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              {color:'green'}
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user" exact activeStyle={
              {color:'green'}
            }>User</NavLink>
          </li>
          <li>
            <NavLink to="/user/Mehedi" exact activeStyle={
              {color:'green'}
            } >User Mehedi</NavLink>
          </li>
        </ol>
        <Prompt 
        when={!this.state.loggedIn}
        message = {(location)=>{
          return location.pathname.startsWith('/user')? 'Are you sure? ' : true
        }}
        ></Prompt>
        <input type="button" value={this.state.loggedIn? 'Log out':'Log In'} onClick={ this.loginHandler }/>
        <Route path="/" exact render={
          () => {
            return <h1>Hi from React-Router/Route</h1>
          }
        }>
        </Route>
          {/* For URI /about or /about/ then use only exact , if URI /about then use strict */}
        <Route path="/about" exact strict render={
          () => {
            return <h1>Developer: Mehedi Hasan Megamind</h1>
          }
        }></Route>
        <Route path="/user" exact strict component={User}></Route>
        <Route path="/user/:username" exact strict   render={
          ({match})=>(
            this.state.loggedIn ? ( <User username={match.params.username} />) : ( <Redirect to="/" />)
           )
        }></Route>
      </Router>
    );
  }
}

// function App() {
  
// }

// export default App;
