import React from 'react';
import './NewsContainer.css';
import NewsArticle from './../NewsArticle/NewsArticle';


const NewsContainer = (props) => {
    const { articles } = props

    const newsArticles = articles.map(article => {
        return (
            <NewsArticle
                key={article.id}
                id={article.id}
                title={article.headline}
                image={article.img}
                description={article.description}
                url={article.url}
            />
        )
    })
    return (
        <div className='news-Container'>
           {newsArticles}
            </div>
    )
}


export default NewsContainer;