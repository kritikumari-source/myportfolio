
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App(props) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  const fetchAQI = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      setAqi(res.data.list[0]);
    } catch (err) {
      console.error('Failed AQI fetch:', err);
    }
  };

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      setForecast(res.data.list.slice(0, 8)); // ~1-day forecast
    } catch (err) {
      console.error('Forecast error:', err);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=weather&language=en&pageSize=5&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      
      // `https://newsapi.org/v2/top-headlines/sources?category=weatherapiKey=API_KEY`
      );
      setNews(res.data.articles);
    } catch (err) {
      console.error('News error:', err);
    }
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    setAqi(null);
    setForecast([]);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
      const { lat, lon } = res.data.coord;
      fetchAQI(lat, lon);
      fetchForecast(lat, lon);
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeather(city);
  };

  const getAQIDescription = (index) => {
    const levels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
    return levels[index - 1] || "Unknown";
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      padding: '2rem',backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
    }}>
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center' , backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
      }}>
        {/* LEFT SECTION */}
        <div style={{
          flex: '1',
          minWidth: '200px',
         padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',  backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
        }}>
          <h3 style={{marginLeft:'-10%' ,  backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>Weather App</h3>
          <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{
                padding: '10px',
                width: '70%',
                borderRadius: '6px',
                border: '1px solid #ccc',
                marginRight: '10px', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '10px 16px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
              }}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </form>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {weather && (
            <div>
              <h2>{weather.name}, {weather.sys.country}</h2>
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
              <p style={{ fontSize: '1.2rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>{weather.weather[0].description}</p>
              <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} >{Math.round(weather.main.temp)}°C</div>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind: {weather.wind.speed} m/s</p>

              {aqi && (
                <div style={{ marginTop: '1rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
                  <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><h4><b>Air Quality Index</b></h4></div>
                  
                  <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>AQI:</b>{aqi.main.aqi} ({getAQIDescription(aqi.main.aqi)})</div> 
                  <p>PM2.5: {aqi.components.pm2_5} µg/m³</p>
                  <p>PM10: {aqi.components.pm10} µg/m³</p>
                </div>
              )}
            </div>
          )}

          {forecast.length > 0 && (
            <div style={{ marginTop: '1.5rem', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
              <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><h4><b>Forecast</b></h4></div>
              
              <div style={{ display: 'flex', overflowX: 'auto', gap: '12px', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
                {forecast.map(item => (
                  <div
                    key={item.dt}
                    style={{
                      minWidth: '120px',
                      padding: '10px',
                      background: '#f9f9f9',
                      borderRadius: '8px',
                      textAlign: 'center',
                      border: '1px solid #ddd', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
                    }}
                  >
                    <p style={{ fontWeight: 'bold', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
                      {new Date(item.dt_txt).toLocaleTimeString([], {
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                    <img
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt={item.weather[0].description}
                    />
                    <p>{Math.round(item.main.temp)}°C</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SECTION - NEWS */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'
        }} >

            <h3 style= {{marginLeft:'-10%' , borderBottom: '1px solid #eee', paddingBottom: '8px' , backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>Weather News</h3>  
          
          {news.length === 0 ? (
            <p>Loading news...</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 , backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              {news.map((article, index) => (
                <li key={index} style={{ marginBottom: '16px' }}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold', textDecoration: 'none' , backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}
                  >
                    {article.title}
                  </a>
                  <br />
                  <small style={{  backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}>
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </small>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;


