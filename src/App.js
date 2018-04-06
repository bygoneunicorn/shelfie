import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
        inventory : []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:4000/api/inventory').then(res =>{
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventory}/>
        <Form />
      </div>
    );
  }
}

export default App;
