import React from 'react';
import './NewsArticle.css';
import NewsContainer from '../NewsContainer/NewsContainer';

const NewsArticle = (props) => {
    return (
        <article className='newsArticle' id={props.id}>
            <div>
                <img className='img' src={props.image}/>
            </div>
            <div>
                <h2>{props.headline}</h2>
                <p>{props.description}</p>
                <a href={props.url}>Article Link</a>
            </div>
        </article>
    )
}
  
export default NewsArticle;