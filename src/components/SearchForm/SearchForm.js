import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    constructor() {
      super();
      this.state = {
        
        }   
    }
    render() {
        return (
          <header>
            <input
              type='text'
              placeholder='Title'
              name='title'
              value={this.state.title}
              onChange={event => this.handleChange(event)}
            />
            <button onClick={event => this.submitIdea(event)}>Search</button>
          </header>
        )
      }
    
    }

export default SearchForm;