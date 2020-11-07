import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class Header extends Component{
  render() {
    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.title}
        {this.props.num}
        
    </header>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="Body">
        <Header title="Hello from app" num={5}/>
        <Header title="Hello from app2"/>
      </div>
    );
  }
}

export default App;
