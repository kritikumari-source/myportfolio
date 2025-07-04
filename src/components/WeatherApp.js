

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [aqi, setAqi] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [news, setNews] = useState([]);

//   const API_KEY = '4f319f09ee51bfa20e174f1a4445df8f';

//   const fetchAQI = async (lat, lon) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       );
//       setAqi(response.data.list[0]);
//     } catch (err) {
//       console.error('Failed to fetch AQI:', err);
//     }
//   };

//   const fetchForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
//       );
//       setForecast(response.data.list.slice(0, 12)); // 1.5-day forecast
//     } catch (err) {
//       console.error('Failed to fetch forecast:', err);
//     }
//   };
//   const NEWS_API_KEY = 'your_news_api_key_here'; // Replace with your actual NewsAPI key

// const fetchNews = async () => {
//   try {
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=weather&language=en&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`
//     );
//     setNews(response.data.articles);
//   } catch (err) {
//     console.error('Failed to fetch news:', err);
//   }
// };

//   const fetchWeather = async (cityName) => {
//     setLoading(true);
//     setError(null);
//     setAqi(null);
//     setForecast([]);
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
//       );
//       setWeather(response.data);
//       const { lat, lon } = response.data.coord;
//       fetchAQI(lat, lon);
//       fetchForecast(lat, lon);
//     } catch (err) {
//       setError('City not found or API error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (city.trim()) {
//       fetchWeather(city);
//     }
//   };

//   const getAQIDescription = (index) => {
//     const levels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
//     return levels[index - 1] || "Unknown";
//   };

//   return (
//     <div className="weather-app" style={{ padding: '20px', minHeight: '100vh' }}>
//  <div style={{ flex: 2, marginRight: '30px' }}>
//       <h1>Weather App</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           style={{
//             padding: '8px',
//             marginRight: '10px',
//             border: '1px solid #ccc',
//             borderRadius: '4px'
//           }}
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#007BFF',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           {loading ? 'Loading...' : 'Get Weather'}
//         </button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {weather && (
//         <div style={{ marginTop: '20px' }}>
//           <h2>{weather.name}, {weather.sys.country}</h2>
//           <img
//             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//             alt={weather.weather[0].description}
//           />
//           <p>{weather.weather[0].description}</p>
//           <p>{Math.round(weather.main.temp)}°C</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind: {weather.wind.speed} m/s</p>

//           {aqi ? (
//             <div style={{ marginTop: "10px" }}>
//               <h3>Air Quality Index</h3>
//               <p><strong>AQI:</strong> {aqi.main.aqi} - {getAQIDescription(aqi.main.aqi)}</p>
//               <p><strong>PM2.5:</strong> {aqi.components.pm2_5} µg/m³</p>
//               <p><strong>PM10:</strong> {aqi.components.pm10} µg/m³</p>
//             </div>
//           ) : (
//             <p>Loading AQI...</p>
//           )}
//         </div>
//       )}

//       {forecast.length > 0 && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>1-Day Forecast</h3>
//           <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
//             {forecast.map(item => (
//               <div
//                 key={item.dt}
//                 style={{
//                   minWidth: '120px',
//                   padding: '10px',
//                   border: '1px solid #ccc',
//                   borderRadius: '5px',
//                   background: '#f9f9f9',
//                   textAlign: 'center'
//                 }}
//               >
//                 <p style={{ fontWeight: 'bold' }}>
//                   {new Date(item.dt_txt).toLocaleDateString(undefined, {
//                     weekday: 'short',
//                     hour: '2-digit',
//                     minute: '2-digit',
//                     hour12: true
//                   })}
//                 </p>
//                 <img
//                   src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
//                   alt={item.weather[0].description}
//                 />
//                 <p>{Math.round(item.main.temp)}°C</p>
//                 <p style={{ fontSize: '0.9em', color: '#666' }}>
//                   {item.weather[0].description}
//                 </p>
//               </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
    
//   </div>
// )}




//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState([]);
//   const [aqi, setAqi] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [news, setNews] = useState([]);

//   const API_KEY = '4f319f09ee51bfa20e174f1a4445df8f';
//   const NEWS_API_KEY = '4f90fb9ee6ae451480677bd3b9363b18'; // Replace with your NewsAPI key

//   const fetchAQI = async (lat, lon) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
//       );
//       setAqi(response.data.list[0]);
//     } catch (err) {
//       console.error('Failed to fetch AQI:', err);
//     }
//   };

//   const fetchForecast = async (lat, lon) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
//       );
//       setForecast(response.data.list.slice(0, 12));
//     } catch (err) {
//       console.error('Failed to fetch forecast:', err);
//     }
//   };

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get(
//         `https://newsapi.org/v2/everything?q=weather&language=en&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`
//       );
//       setNews(response.data.articles);
//     } catch (err) {
//       console.error('Failed to fetch news:', err);
//     }
//   };

//   useEffect(() => {
//     fetchNews(); // Load news on page load
//   }, []);

//   const fetchWeather = async (cityName) => {
//     setLoading(true);
//     setError(null);
//     setAqi(null);
//     setForecast([]);
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
//       );
//       setWeather(response.data);
//       const { lat, lon } = response.data.coord;
//       fetchAQI(lat, lon);
//       fetchForecast(lat, lon);
//     } catch (err) {
//       setError('City not found or API error');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (city.trim()) {
//       fetchWeather(city);
//     }
//   };

//   const getAQIDescription = (index) => {
//     const levels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
//     return levels[index - 1] || "Unknown";
//   };

//   return (
//     <div style={{ display: 'flex', padding: '20px', minHeight: '100vh' }}>
//       {/* LEFT COLUMN */}
//       <div style={{ flex: 2, marginRight: '30px' }}>
//         <h1>Weather App</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter city name"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             style={{
//               padding: '8px',
//               marginRight: '10px',
//               border: '1px solid #ccc',
//               borderRadius: '4px'
//             }}
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             style={{
//               padding: '8px 16px',
//               backgroundColor: '#007BFF',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer'
//             }}
//           >
//             {loading ? 'Loading...' : 'Get Weather'}
//           </button>
//         </form>

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         {weather && (
//           <div style={{ marginTop: '20px' }}>
//             <h2>{weather.name}, {weather.sys.country}</h2>
//             <img
//               src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//               alt={weather.weather[0].description}
//             />
//             <p>{weather.weather[0].description}</p>
//             <p>{Math.round(weather.main.temp)}°C</p>
//             <p>Humidity: {weather.main.humidity}%</p>
//             <p>Wind: {weather.wind.speed} m/s</p>

//             {aqi ? (
//               <div style={{ marginTop: "10px" }}>
//                 <h3>Air Quality Index</h3>
//                 <p><strong>AQI:</strong> {aqi.main.aqi} - {getAQIDescription(aqi.main.aqi)}</p>
//                 <p><strong>PM2.5:</strong> {aqi.components.pm2_5} µg/m³</p>
//                 <p><strong>PM10:</strong> {aqi.components.pm10} µg/m³</p>
//               </div>
//             ) : (
//               <p>Loading AQI...</p>
//             )}
//           </div>
//         )}

//         {forecast.length > 0 && (
//           <div style={{ marginTop: "20px" }}>
//             <h3>1.5-Day Forecast</h3>
//             <div style={{ display: 'flex', overflowX: 'auto', gap: '10px' }}>
//               {forecast.map(item => (
//                 <div
//                   key={item.dt}
//                   style={{
//                     minWidth: '120px',
//                     padding: '10px',
//                     border: '1px solid #ccc',
//                     borderRadius: '5px',
//                     background: '#f9f9f9',
//                     textAlign: 'center'
//                   }}
//                 >
//                   <p style={{ fontWeight: 'bold' }}>
//                     {new Date(item.dt_txt).toLocaleDateString(undefined, {
//                       weekday: 'short',
//                       hour: '2-digit',
//                       minute: '2-digit',
//                       hour12: true
//                     })}
//                   </p>
//                   <img
//                     src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
//                     alt={item.weather[0].description}
//                   />
//                   <p>{Math.round(item.main.temp)}°C</p>
//                   <p style={{ fontSize: '0.9em', color: '#666' }}>
//                     {item.weather[0].description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

    

//       {/* RIGHT COLUMN — NEWS */}
//       <div style={{ flex: 1 }}>
//         <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '8px' }}>Weather News</h3>
//         {news.length === 0 ? (
//           <p>Loading news...</p>
//         ) : (
//           <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
//             {news.map((article, index) => (
//               <li key={index} style={{ marginBottom: '16px' }}>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{
//                     textDecoration: 'none',
//                     color: '#007BFF',
//                     fontWeight: 'bold',
//                     display: 'block'
//                   }}
//                 >
//                   {article.title}
//                 </a>
//                 <small style={{ color: '#666' }}>
//                   {new Date(article.publishedAt).toLocaleDateString()}
//                 </small>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
