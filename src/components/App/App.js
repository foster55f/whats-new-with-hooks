import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from './../NewsContainer/NewsContainer'
import entertainment from '../../data/entertainment';
import health from '../../data/health';


import Menu from './../Menu/Menu'



class App extends Component {
  constructor() {
    super();
    this.state = {
      "currentNews": local,
      entertainment,
      health:health
    }
  }

  filterAllNews = (type) => {
    this.setState({ currentNews:this.state[type]})
  }

  render() {    
    return (
      <main className="App">
        <Menu filterAllNews = {this.filterAllNews} hello='world'/>
        <NewsContainer articles = {this.state.currentNews}/>
      </main>
    );
  }
}

export default App;
