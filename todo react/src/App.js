import React, {Component} from 'react';
import './App.css';
import Header from './header'
import List from './list'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text:'' }
}

gettodo=(x)=>{
  this.setState({text: x})
}
  render(){
    return (
    <div className="App">
      <h1>To Do List</h1>
      <Header getit={this.gettodo} />
      <List new={this.state.text} />
    </div>
  );
  }
  
}

export default App;
