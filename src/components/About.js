
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div className="resume-container">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <b> About me</b>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body">
              <strong></strong> Highly motivated and detail-oriented Front-End
              Developer with a strong foundation in HTML, CSS, JavaScript, and
              React.js. Proven ability to design and develop responsive,
              user-centric websites and web applications. Experience in
              collaborative environments, project management, and technical
              documentation. Strong analytical and problem-solving skills honed
              through technical roles and rigorous preparation for competitive
              examinations.
            </div>
          </div>
        </div>
        
      </div>

    

      {/* <div className="container pt-5">
  <div className="row g-4 mb-5 justify-content-center"> */}
    {/* Card 1 */}
    {/* <div className="col-md-10 col-lg-6">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Technical Skills</h5>
          <ul className="card-text ps-3">
            <li><strong>Languages & Frameworks:</strong> HTML5 | CSS3 | JavaScript (ES6+) | React.js</li>
            <li><strong>Tools & Platforms:</strong> Git | GitHub | VS Code | Chrome DevTools | WAMP Server | MySQL</li>
          </ul>
        </div>
      </div>
    </div> */}

    {/* Card 2 */}
     {/* <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">Projects</h5>
          <ul className="card-text ps-3">
            <li>Weather App</li>
            <li>To-Do List</li>
            <li>News App</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> */} 
<div className="container pt-5">
  <div className="row g-4 mb-5 justify-content-center">

    {/* Card 1 - Technical Skills */}
    <div className="col-md-10 col-lg-6">
      <div className="card h-100 shadow-sm border-primary">
        <div className="card-header bg-primary text-white d-flex align-items-center">
          <FaReact className="me-2" />
          <h5 className="mb-0">Technical Skills</h5>
        </div>
        <div className="card-body">
          <ul className="card-text ps-3">
            <li><strong>Languages & Frameworks:</strong> HTML5, CSS3, JavaScript (ES6+), React.js</li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Chrome DevTools, WAMP Server, MySQL</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Card 2 - Projects */}
    <div className="col-md-10 col-lg-6">
      <div className="card h-100 shadow-sm border-primary">
        <div className="card-header bg-primary text-white d-flex align-items-center">
          <FaReact className="me-2" />
          <h5 className="mb-0">Projects</h5>
        </div>
        <div className="card-body">
          <ul className="card-text ps-3">
            <li>Weather App</li>
            <li>To-Do List</li>
            <li>News App</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>



      {/* 🔽 Resume Button - Centered Below Cards */}
      <div className="text-center mb-5">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Open Resume
        </a>
      </div>

      {/* Contact Info */}
      <div className="mt-4">
        <h2>Contact</h2>
        <p>
          <FaEnvelope /> kritikumari75@gmail.com
        </p>
        <p>
          <FaPhone /> +91-8296137139
        </p>
        <p>
          <FaLinkedin />{" "}
          <a href="https://www.linkedin.com/in/kriti-kumari-696165a6/">
            linkedin.com/in/kriti
          </a>
        </p>
        <p>
          <FaGithub /> <a href="https://github.com/kriti">github.com/kriti</a>
        </p>
        <p>hi commit</p>
      </div>
    </div>
  );
};

export default Resume;


