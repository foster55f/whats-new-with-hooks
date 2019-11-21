import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, title, image, description, url}) => {
    return (
        <article className='newsArticle' id={id}>
            <div>
                <img className='img' src={image} alt={`of ${title}`}/>
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={url}>Article Link</a>
            </div>
        </article>
    )
}

export default NewsArticle;