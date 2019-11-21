import React, { Component } from 'react';
import './App.css';
import local from '../../data/local';
import NewsContainer from './../NewsContainer/NewsContainer'
import Menu from './../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      "currentNews": local,
      'data': null
      // {
      //   local, entertainment,
      //   health: health,
      //   technology,
      //   science,
      // }   
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(data => this.setState({ data }))
    .catch(err => console.log('error'))
  }
  
  selectNews = (data) => {
    this.setState({currentNews:this.state.data[data]})
  }

  // filterAllNews = (type) => {
  //   this.setState({ currentNews:this.state.data[type]})
  // }

  filterSearch = (search) => {
    console.log(search)
    console.log(this.state.data.local)
    const searchResults = this.state.data.health.filter(article => {
      return article.headline.toLowerCase().includes(search.toLowerCase())|| article.description.toLowerCase().includes(search.toLowerCase())
    })
    console.log(searchResults)
    this.setState({ currentNews: searchResults }) 
  }

  render() {    
    return (
      <div className="App">
        <SearchForm search={this.filterSearch} {...this.state.data}/>
        <div className="Menu">
        <Menu filterAllNews={this.filterAllNews} selectNews={this.selectNews}/>
          <NewsContainer articles={this.state.currentNews} />
        </div>
      </div>
    );
  }
}

export default App;
