import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Router Tutorial</h1>
        <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component = {About}/>
            <Route path="/shop" component = {Shop}/>
          </Switch>
          
         </div>
        </Router>
        
      </header>
      
    </div>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
