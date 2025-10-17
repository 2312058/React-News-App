import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const API_KEY = 'a8e1882443b2400bb3933dfb36a10a6f';
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
      setArticles(response.data.articles);
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {articles.map((article, index) => (
        <NewsItem key={index} {...article} />
      ))}
    </div>
  );
};

export default NewsList;