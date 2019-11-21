import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
    return (
        <article className='newsArticle' id={props.id}>
            <div>
                <img className='img' src={props.image} alt={`of ${props.title}`}/>
            </div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.url}>Article Link</a>
            </div>
        </article>
    )
}

export default NewsArticle;