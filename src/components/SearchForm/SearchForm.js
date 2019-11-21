import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchField: ''
        }   
    }

    handleChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault()
        this.props.search(this.state.searchField.toLowerCase())
        this.setState({searchField:''})
    }
    render() {
        return (
            <header>
                <h1>What's New</h1>
                <div className='searchContainer'>   
                    <input
                        type='text'
                        placeholder='Search'
                        name='title'
                        onChange={event => this.handleChange(event)}
                        value={this.state.searchField}
                    />
                    <button onClick={this.handleSearch} className="searchButton">Search</button>
                </div>
            </header>
        )
      }
    
    }

export default SearchForm;