import React, { Component } from 'react';
import './App.css';
import local from '../../data/local';
import NewsContainer from './../NewsContainer/NewsContainer'
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import Menu from './../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      "currentNews": local,
      'data':{local, entertainment,
        health: health,
        technology,
        science,
      }   
    }
  }

  filterAllNews = (type) => {
    this.setState({ currentNews:this.state.data[type]})
  }

  render() {    
    return (
      <main className="App">
        <SearchForm/>
        <Menu filterAllNews={this.filterAllNews} hello={[1, 2, 3, 4, 5]}/>
        <NewsContainer articles = {this.state.currentNews}/>
      </main>
    );
  }
}

export default App;
