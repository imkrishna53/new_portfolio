import React from 'react';
import { useLocation } from 'react-router-dom';

export const About = () => {
    const location = useLocation();
  return (
<section id="about" className={location.pathname == '/about' && 'about section-show'}>
  <div className="about-me container">

    <div className="section-title">
      <h2>About</h2>
      <p>Learn more about me</p>
    </div>

    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img src="assets/img/me.jpg" className="img-fluid" alt="" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Senior Software Engineer (NodeJS/PHP/ReactJS)</h3>
        <p className="fst-italic">
          Software Engineer with 5+ years of experience in developing web applications.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>08 Jul 1992</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8077862184</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dehradun, Uttarakhand</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="age">
              <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span id="age_current">31</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
              <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>imkrishna53@gmail.com</span></li>
            </ul>
          </div>
        </div>
        <p>
          Proven ability in optimizing web functionality that improve data retrieval and workflow efficiencies. Proficient in developing databases, writing and testing codes, troubleshooting simple/complex issues and implementing new features based on user feedback.
        </p>
      </div>
    </div>

  </div>

  
  <div className="counts container">

    <div className="row">

      <div className="col-lg-3 col-md-6">
        <div className="count-box">
          <i className="bi bi-emoji-smile"></i>
          <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter">0</span>
          <p>Happy Clients</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div className="count-box">
          <i className="bi bi-journal-richtext"></i>
          <span data-purecounter-start="0" data-purecounter-end="4" data-purecounter-duration="1" className="purecounter">0</span>
          <p>Projects</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <i className="bi bi-headset"></i>
          <span data-purecounter-start="0" data-purecounter-end="8" data-purecounter-duration="1" className="purecounter">0</span>
          <p>Hours Of Support</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <i className="bi bi-award"></i>
          <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" className="purecounter">0</span>
          <p>Awards</p>
        </div>
      </div>

    </div>

  </div>

  <div className="skills container">

    <div className="section-title">
      <h2>Skills</h2>
    </div>

    <div className="row skills-content">

      <div className="col-lg-6">

        <div className="progress">
          <span className="skill">HTML <i className="val">70%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">CSS <i className="val">60%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">JavaScript <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

      <div className="col-lg-6">

        <div className="progress">
          <span className="skill">PHP <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">WordPress/CMS <i className="val">80%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">ReactJs <i className="val">90%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div className="progress">
          <span className="skill">NodeJs <i className="val">75%</i></span>
          <div className="progress-bar-wrap">
            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div>

    </div>

  </div>
  <div className="interests container">

    <div className="section-title">
      <h2>Interests</h2>
    </div>

    <div className="row">
      <div className="col-lg-3 col-md-4">
        <div className="icon-box">
          <i className="ri-store-line" style={{ color: '#ffbb2c' }}></i>
          <h3>Laravel</h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }}></i>
          <h3>NodeJS</h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
        <div className="icon-box">
          <i className="ri-calendar-todo-line" style={{ color: '#e80368' }}></i>
          <h3>ReactJS</h3>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
        <div className="icon-box">
          <i className="ri-paint-brush-line" style={{ color: '#e361ff' }}></i>
          <h3>Django</h3>
        </div>
      </div>
    </div>

  </div>
</section>
  );
};


