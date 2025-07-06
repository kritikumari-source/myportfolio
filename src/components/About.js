import React, { useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import kriti from "./kriti.jpg";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="resume-container container py-5">
      <div className="row align-items-center justify-content-center mb-4" data-aos="fade-up">
        {/* Left: Image */}
        <div className="col-lg-1">

        </div>
        <div className="col-lg-3 mb-4 mb-lg-0 float-right">
            <img
              src="/kriti.jpg"
              alt="kriti"
              style={{
                width: "160px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
        </div>

        {/* Right: Contact Info */}
        <div className="col-lg-2">

        </div>
        <div className="col-lg-4">
          <div className="card card-custom p-4">
            <h4 className="mb-3">Contact</h4>
            <p>
              <FaEnvelope className="me-2 text-danger" />
              kritikumari75@gmail.com
            </p>
            <p>
              <FaPhone className="me-2 text-success" />
              +91-8296137139
            </p>
            <p>
              <FaLinkedin className="me-2 text-primary" />
              <a
                href="https://www.linkedin.com/in/kriti-kumari-696165a6/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kriti
              </a>
            </p>
            <p>
              <FaGithub className="me-2 text-dark" />
              <a
                href="https://github.com/kritikumari-source"
                target="_blank"
                rel="noreferrer"
              >
                github.com/kriti
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="row justify-content-center mb-4 mt-4" data-aos="fade-up">
        <div className="col-lg-10">
          <div className="card card-custom">
            <div className="card-header bg-light">
              <h5 className="mb-0">
                <button
                  className="btn btn-link text-decoration-none text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#aboutMeCollapse"
                  aria-expanded="true"
                  aria-controls="aboutMeCollapse"
                >
                  <b>About Me</b>
                </button>
              </h5>
            </div>
            <div id="aboutMeCollapse" className="collapse show">
              <div className="card-body">
                <strong></strong> Highly motivated and detail-oriented Front-End
                Developer with a strong foundation in HTML, CSS, JavaScript, and
                React.js. Proven ability to design and develop responsive,
                user-centric websites and web applications. Experience in
                collaborative environments, project management, and technical
                documentation. Strong analytical and problem-solving skills.
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* projects */}
        {/* weather app */}
        <div className="row justify-content-center mb-4 mt-4" data-aos="fade-up">
          <div className="col-lg-10">
            <div className="card card-custom">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    <b>Projects</b>
                  </button>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show">
                <div className="card-body">
                  <strong>WeatherApp: A Real-Time Weather Forecast App</strong>
                  <p>
                    WeatherApp is a responsive weather application that provides
                    users with real-time weather data, forecasts, and
                    location-based insights with AQI index. It allows users to
                    search for any city worldwide and displays current
                    conditions such as temperature, humidity, wind speed, and a
                    1-day forecast.
                  </p>
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Real-time weather updates using OpenWeatherMap API.</li>

                    <li>1-day weather forecast with icons.</li>

                    <li>Geolocation to detect and display local weather.</li>

                    <li>Responsive design for mobile and desktop.</li>

                    <li>Error handling for invalid locations.</li>

                    <li>Dark/light mode toggle.</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Languages & Frameworks:</strong>
                    </li>
                    <li>Frontend: HTML, CSS, JavaScript, React</li>
                    <li>API: OpenWeatherMap API</li>
                    <li>Styling: Bootstrap / CSS Modules</li>
                    <li>Other Tools: Axios</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Tools & Platforms:</strong>
                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ToDoList */}
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div className="col-lg-10">
            <div className="card card-custom">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    <b>Projects</b>
                  </button>
                </h5>
              </div>

              <div id="aboutMeCollapse" className="collapse show">
                <div className="card-body">
                  <strong>To-Do List: App to maintain daily routine</strong>
                  <p>
                    A simple and efficient to-do list web application that helps users manage daily tasks.
                     Features include task creation, editing, deletion, 
                     marking as complete, and persistent storage using local storage.
                      Built with React and styled for a clean, responsive user experience.


                  </p>
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Built a responsive, single-page to-do list application using React and functional components.</li>

                    <li>Implemented features including add/edit/delete tasks and persistent storage using LocalStorage.</li>

                    <li>Used React hooks (useState, useEffect) to manage state and side effects effectively.</li>

                    <li>Designed an intuitive user interface with real-time task updates and dynamic filtering.

</li>

                    <li>Error handling for invalid locations.</li>

                    <li>Dark/light mode toggle.</li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Languages & Frameworks:</strong>
                    </li>
                    HTML5, CSS3, JavaScript (ES6+), React.js
                  </ul>
                  <ul>
                    <li>
                      <strong>Tools & Platforms:</strong>
                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* newsapp */}
        
              <div className="row justify-content-center mb-4 mt-4" data-aos="fade-up">
          <div className="col-lg-10">
            <div className="card card-custom">
              <div className="card-header bg-light">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    <b>Projects</b>
                  </button>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show">
                <div className="card-body">
                  <strong>NewsApp: Headlines of news</strong>
                  <p>
                    A dynamic news application that fetches and displays the latest headlines using the NewsAPI. Built with React,
                     it features category-based filtering (e.g., sports, technology, health), responsive design, 
                     and real-time updates. The app uses Axios for API calls and implements pagination for improved performance and UX.
                     It demonstrates key front-end concepts like API integration, conditional rendering, and component-based architecture.
                  </p>
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Routing:

Implemented React Router for seamless navigation between news categories.</li>

                    <li>Dark mode: Added dark mode toggle for improved accessibility and user preference.</li>

                    {/* <li>Geolocation to detect and display local weather.</li>

                    <li>Responsive design for mobile and desktop.</li>

                    <li>Error handling for invalid locations.</li>

                    <li>Dark/light mode toggle.</li> */}
                  </ul>
                  <ul>
                    <li>
                      <strong>Languages & Frameworks:</strong>
                    </li>
                    <li>Frontend: HTML, CSS, JavaScript, React</li>
                    <li>API: News API</li>
                    <li>Styling: Bootstrap / CSS Modules</li>
                    {/* <li>Other Tools: Axios</li> */}
                  </ul>
                  <ul>
                    <li>
                      <strong>Tools & Platforms:</strong>
                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
           



        {/* Resume Button */}
        <div className="text-center mb-5" data-aos="fade-up">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success btn-lg px-4 py-2"
          >
            <FaDownload className="me-2" /> Download Resume
          </a>
        </div>

        
      </div>
    // </div>
  );
};

export default Resume;
