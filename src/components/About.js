import React, { useEffect, useState } from "react";
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
import PropTypes from 'prop-types';
 import  { Component } from 'react';


 export default function Resume(props) {

  useEffect(() => {
    AOS.init({ duration: 200 });
  }, []);



  return (
    
     <div className= "resume-container container py-5" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}> 

      <div
        className= "row align-items-center justify-content-center mb-4"style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
       
      >
        {/* Left: Image */}
        <div className= "col-lg-1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}></div>
        <div className= "col-lg-3 mb-4 mb-lg-0 float-right" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
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
        <div className= "col-lg-2"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}></div>
        <div className="col-lg-4" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} >
          <div className= "card card-custom p-4" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
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
                style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
              >
                linkedin.com/in/kriti
              </a>
            </p>
            <p>
              <FaGithub className="me-2 text-dark"  />
              <a
                href="https://github.com/kritikumari-source"
                target="_blank"
                rel="noreferrer"
                style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
              >
                github.com/kriti
              </a>
            </p>
            {/* resume */}
           
           <div className="content me-2"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} >
      <a
        href="/resume.pdf"         
        target="_blank"            
        rel="noopener noreferrer"  
        style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743' }}

>
        Download Resume
      </a>
    </div>
    {/*  */}
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="row justify-content-center mb-4 mt-4"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
        <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <h5 className="mb-0" style={{backgroundColor: props.mode=== 'dark'??'#13466e', color: props.mode=== 'dark'?'white':'#042743'}}>
                <button
                  className="btn btn-link text-decoration-none text-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#aboutMeCollapse"
                  aria-expanded="true"
                  aria-controls="aboutMeCollapse"
                >
                  <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>About Me</b></div>
                </button>
              </h5>
            </div>
            <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <strong></strong> <p>Highly motivated and detail-oriented Front-End
                Developer with a strong foundation in HTML, CSS, JavaScript, and
                React.js. Proven ability to design and develop responsive,
                user-centric websites and web applications. Experience in
                collaborative environments, project management, and technical
                documentation. Strong analytical and problem-solving skills.</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* projects */}
        {/* weather app */}
        <div
          className="row justify-content-center mb-4 mt-4"
           style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  <button
                    className="btn btn-link text-decoration-none text-dark" 
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse" >
                    <div className="head2" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Projects</b></div>
                  </button>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>WeatherApp: A Real-Time Weather Forecast App</b></div>
                  <p>
                    WeatherApp is a responsive weather application that provides
                    users with real-time weather data, forecasts, and
                    location-based insights with AQI index. It allows users to
                    search for any city worldwide and displays current
                    conditions such as temperature, humidity, wind speed, and a
                    1-day forecast.
                  </p>
                  
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Key Features:</b></div>
                  
                  
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
                      <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Languages & Frameworks:</b></div>
                      
                    </li>
                    <li>Frontend: HTML, CSS, JavaScript, React</li>
                    <li>API: OpenWeatherMap API</li>
                    <li>Styling: Bootstrap / CSS Modules</li>
                    <li>Other Tools: Axios</li>
                  </ul>
                  <ul>
                    <li>
                      <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Tools & Platforms:</b></div>
                      
                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ToDoList */}
        <div className="row justify-content-center mb-4" data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                    
                  >

                      
                    
                  </button>
                  <b>Projects</b>
                  {/* <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Projects</b></div> */}

                </h5>
              </div>

              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>To-Do List: App to maintain daily routine</b></div>
                  <p>
                    A simple and efficient to-do list web application that helps
                    users manage daily tasks. Features include task creation,
                    editing, deletion, marking as complete, and persistent
                    storage using local storage. Built with React and styled for
                    a clean, responsive user experience.
                  </p>
                   <div className="head3" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Key Features:</b></div>
                 
                  <ul>
                    <li>
                      Built a responsive, single-page to-do list application
                      using React and functional components.
                    </li>

                    <li>
                      Implemented features including add/edit/delete tasks and
                      persistent storage using LocalStorage.
                    </li>

                    <li>
                      Used React hooks (useState, useEffect) to manage state and
                      side effects effectively.
                    </li>

                    <li>
                      Designed an intuitive user interface with real-time task
                      updates and dynamic filtering.
                    </li>

                    <li>Error handling for invalid locations.</li>

                    <li>Dark/light mode toggle.</li>
                  </ul>
                  <ul>
                    <li>
                       <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Languages and Framework</b></div>
                      
                    </li>
                    HTML5, CSS3, JavaScript (ES6+), React.js
                  </ul>
                  <ul>
                    <li>
                       <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Tools & Platform:</b></div>
                      
                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsapp */}

        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                     {/* <div className="head1" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Projects</b></div> */}

                    
                  </button>
                  <b>Projects</b>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>NewsApp: Headlines of news</b></div> 
                  
                 
                  <p>
                    A dynamic news application that fetches and displays the
                    latest headlines using the NewsAPI. Built with React, it
                    features category-based filtering (e.g., sports, technology,
                    health), responsive design, and real-time updates. The app
                    uses Axios for API calls and implements pagination for
                    improved performance and UX. It demonstrates key front-end
                    concepts like API integration, conditional rendering, and
                    component-based architecture.
                  </p>
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Key Features:</b></div> 
                 
                  <ul>
                    <li>
                      Routing: Implemented React Router for seamless navigation
                      between news categories.
                    </li>

                    <li>
                      Dark mode: Added dark mode toggle for improved
                      accessibility and user preference.
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Languages and Frameworks:</b></div> 
                     
                    </li>
                    <li>Frontend: HTML, CSS, JavaScript, React</li>
                    <li>API: News API</li>
                    <li>Styling: Bootstrap / CSS Modules</li>
                  </ul>
                  <ul>
                    <li>
                      <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Tools and Platforms:</b></div> 

                    </li>
                    Git, GitHub, VS Code, Chrome DevTools.
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
             <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                
                  </button>
                  <b>Professional Experience</b>
                
                </h5>
               
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>CSIR-National Metallurgical Laboratory (CSIR-NML) —
                    Jamshedpur, Jharkhand (Nov 2016 – Apr 2017)
                  </b></div> 
                    
                  <p>
                    <ul>
                      <li>
                        Developed a 'Customer Satisfaction Feedback' web
                        application using PHP, HTML, CSS, JavaScript, and MySQL,
                        enhancing feedback collection and data analysis
                        processes.
                      </li>
                      <li>
                        {" "}
                        Managed project documentation and contributed to
                        institutional publications, including the Annual Report
                        2016-2017.
                      </li>
                      <li>
                        {" "}
                        Gained experience in end-to-end website development,
                        from requirement gathering to deployment and
                        maintenance.
                      </li>
                    </ul>
                  </p>
                  
                 <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>Key Achievements:
                  </b></div> 
                  <ul>
                    <li>
                      {" "}
                      Successfully delivered a fully functional feedback system,
                      improving user experience and data management.
                    </li>
                    <li>
                      {" "}
                      Contributed to public-facing documentation that improved
                      institutional visibility.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     {/* Intern */}
        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    </button>
                <b>Intern</b> 
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                 <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>  Tata Steel — Jamshedpur, Jharkhand (May 2014 – Jun 2014)
                    
                  </b></div> 
                    
                   
 
                  <p>
                    <ul>
                      <li>
                        {" "}
                        Contributed to a 'Code Review Tool Project' aimed at
                        improving code quality within development teams.
                      </li>
                      <li>
                        {" "}
                        Managed project documentation and contributed to
                        institutional publications, including the Annual Report.
                        2016-2017.
                      </li>
                      <li>
                        {" "}
                        Worked alongside senior developers, gaining exposure to
                        real-world software development cycles and best
                        practices in coding standards.
                      </li>
                    </ul>
                  </p>
                  <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b> Key Learnings:
                    
                  </b></div>
                  
                  <ul>
                    <li>
                      {" "}
                      Understood the importance of peer code reviews and quality
                      assurance.
                    </li>
                    <li>
                      {" "}
                      Gained experience with software tools for collaborative
                      development.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                  </button>
                   <b>Education</b>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  
                  <p>
                    <ul>
                      
                      <li>
                        {" "}
                        Bachelor of Technology (B.Tech) in Computer Science.
                      <li>Koustav Institute of Self Domain — 2012 – 2016.</li>

                      </li>
                     
                    </ul>
                 </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
{/* Academic performance */}
         <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                  </button>
                <b>  Academic and personal Achievements:
                    
                  </b>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  
                  <p>
                    <ul>
                      
                      <li>
                        {" "}
                        Certificate of Excellence in State Level Speech Competition, recognized and praised by the Chief Minister of
Jharkhand.
                      <li>Awarded the prestigious 'Jharkhand Police Education Trust Scholarship' for four consecutive years for outstanding
academic performance.</li>

                      </li>
                     
                    </ul>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* UPSC */}
        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
 <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    
                  
                  </button>
                <b>UPSC</b>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                 
                  <p>
                    <ul>
                      <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b>  <p>UPSC Civil Services Examination Preparation (2017-2024):</p>
                    
                  </b></div>
                     
                      <li>
                        {" "}
                         Developed in-depth knowledge of Indian polity, governance, and current affairs.
                      <li> Gained strong analytical, critical thinking, and problem-solving skills.
</li>
<li> Mastered time management, discipline, and perseverance through years of rigorous preparation.</li>

                      </li>
                      
                     
                    </ul>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div
          className="row justify-content-center mb-4 mt-4"
          data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}
        >
          <div className="col-lg-10" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
            <div className="card card-custom" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
              <div className={`card-header ${props.mode === 'light'?? 'bg-light'}`} style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link text-decoration-none text-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#aboutMeCollapse"
                    aria-expanded="true"
                    aria-controls="aboutMeCollapse"
                  >
                    <div className="head" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}} ><b> Strengths & Interests
                    
                  </b></div>
                    
                  </button>
                </h5>
              </div>{" "}
              {/* ✅ Properly closed card-header here */}
              <div id="aboutMeCollapse" className="collapse show" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                <div className="card-body" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
                  
                  <p>
                    <ul>
                      
                      <li>
                        {" "}
                         Strong analytical and logical reasoning skills.

                      <li>Passionate about clean, user-friendly UI/UX design</li>
<li>Enthusiastic learner of new technologies and frameworks.</li>
<li> Interests include technology, reading, and public speaking.</li>
                      </li>
                     
                    </ul>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Button */}
         {/* <div className="text-center mb-5" data-aos="fade-up" style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-success btn-lg px-4 py-2"
          >
            <FaDownload className="me-2" /> Download Resume
          </a>
         </div> */}
      </div>
    </div> 
  );
};

