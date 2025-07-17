import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsApp(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
     const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    // const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${API_KEY}`;

  useEffect(() => {
    axios
      .get(NEWS_URL)
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", borderRadius: "20px", backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
      <h4>📰 Daily News Headlines</h4>
      {articles.map((article, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
          }}
        >
          <h4>{article.title}</h4>
          <p>{article.description}</p>
          
          <a href={article.url} target="_blank" rel="noopener noreferrer" >
            <div style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} > Read more →</div>
           
          </a>
          
        </div>
      ))}
    </div>
  );
}

export default NewsApp;

