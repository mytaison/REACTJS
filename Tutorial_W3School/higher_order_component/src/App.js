import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hoc from './HOC.js';
import StockList from './StockList.js';
import UserList from './UserList';
const StockData = [
  {
      id: 1,
      name: "Megan"
  },
  {
      id: 2,
      name: "Davis"
  }
];
const UserData = [
  {
      id: 1,
      name: "Mehedi"
  },
  {
      id: 2,
      name: "Megamind"
  }
];
const Stocks = Hoc(StockList , StockData);
const Users = Hoc(UserList , UserData);

class App extends React.Component {
  render(){
    return (
      <div className="App">
        Higher-Order Component Tutorial
        <div>
          {/* When not using Higher Order Component */}
          {/* <StockList /> */}
          <Users />
          <Stocks />
        </div>
      </div>
    );
  }
}
// App = Hoc(App);
export default App;
