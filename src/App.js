import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Textform from "./components/Textform";
import ToDoList from "./components/ToDoList";
import WeatherApp from "./components/WeatherApp";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") 
      {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Myportfolio - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Myportfolio - Light Mode";
    }
  };

  return (
    <Router>
      <Header title="myportfolio" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform mode={mode} toggleMode={toggleMode} />} />
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/ToDoList" element={<ToDoList mode={mode} toggleMode={toggleMode} />} />
          <Route path="/weatherapp" element={<WeatherApp mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
