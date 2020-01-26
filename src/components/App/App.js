import React, { useState, useEffect} from 'react';
import './App.css';
import local from '../../data/local';
import NewsContainer from './../NewsContainer/NewsContainer'
import Menu from './../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm';



const App = () => {
  const [currentNews, setNewsArticle] = useState('local')
  const [data] = useState(null)

  
  const selectNews = (data) => {
    setNewsArticle(data[data]);
    // this.setState({ currentNews: this.state.data[data] })
  }

  const filterSearch = (search) => {
    const searchResults = this.state.currentNews.filter(article => {
      return article.headline.toLowerCase().includes(search.toLowerCase()) || article.description.toLowerCase().includes(search.toLowerCase())
    })
    this.setState({ currentNews: searchResults })
  }

  useEffect(() => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => response.json())
      .then(data => {
      currentNews(data);
    });
  }, []);

    return (
      <div className="App">
        <SearchForm search={filterSearch} {...data} />
        <div className="Menu">
          <Menu selectNews={selectNews} />
          {currentNews.length &&
            <NewsContainer articles={currentNews} />
          }
        </div>
      </div>
    );
  }


export default App;
