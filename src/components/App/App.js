import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import NewsContainer from './../NewsContainer/NewsContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <main className="App">
        <NewsContainer articles = {this.state.local}/>
      </main>
    );
  }
}

export default App;
