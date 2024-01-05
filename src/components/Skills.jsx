import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import removeMobileNav from './RemoveNav';
import { seo } from '../helpers/seo';

export const Skills = () => {
   const location = useLocation();
   useEffect(() => {
    removeMobileNav();
   })
   seo({
    title: 'Krishna-Skills',
    description: 'Krishna Skills'
   })
  return (
    <section id="services" className={location.pathname === '/skills' && 'services section-show'}>
    <div className="container">

      <div className="section-title">
        <h2>Language Skills</h2>
        <p>My Skills</p>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="icon-box">
            <div className="icon"><i className="bx bxl-dribbble"></i></div>
            <h4><a href="">Laravel</a></h4>
            <p>Open-source PHP web framework designed for the development of web applications, following the model-view-controller (MVC) architectural pattern.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-tachometer"></i></div>
            <h4><a href="">NodeJS</a></h4>
            <p>Event-driven, Non-Blocking I/O model, built on the V8 JavaScript runtime and enables the development of scalable and high-performance network applications.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-world"></i></div>
            <h4><a href="">ReactJS</a></h4>
            <p>An Open-source JavaScript library developed and maintained by Facebook. It's used for building user interfaces (UI) for single-page applications where the UI needs to be dynamic and responsive.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-slideshow"></i></div>
            <h4><a href="">HTML5</a></h4>
            <p>Developed by the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG), HTML5 introduces new features and enhancements, providing a more powerful and versatile foundation for building web pages and applications.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"></i></div>
            <h4><a href="">MySQL</a></h4>
            <p>an open-source relational database management system (RDBMS) that is widely used for managing and organizing structured data. It is developed, distributed, and supported by Oracle Corporation.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"></i></div>
            <h4><a href="">jQuery</a></h4>
            <p>A fast, lightweight, and feature-rich JavaScript library designed to simplify the client-side scripting of HTML.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"></i></div>
            <h4><a href="">JavaScript</a></h4>
            <p>An essential technology for web development and is supported by all major web browsers.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bx bx-arch"></i></div>
            <h4><a href="">Django</a></h4>
            <p>It simplifies common tasks, encourages best practices, and follows the model-view-controller (MVC) architectural pattern (or more specifically, the model-view-template pattern).</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}
