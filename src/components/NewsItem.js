import React from 'react';

const NewsItem = ({ title, description, url, urlToImage }) => (
  <div className="news-item">
    <img src={urlToImage} alt={title} style={{ width: '100%' }} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
  </div>
);

export default NewsItem;