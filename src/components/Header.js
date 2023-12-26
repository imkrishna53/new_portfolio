import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <header id="header" className={pathname != '/' ? 'header-top' : ''}>
      <div className="container">

        <h1><Link to="/">Krishna Kumar</Link></h1>
        <h2>I am a dedicated <span>Software Developer</span> based in Uttarakhand<br /><br /> Demonstrating a strong passion for my work. </h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className={pathname == '/about' ? 'nav-link active' : ''} to="/about">About</Link></li>
            <li><Link className="nav-link" to="/resume">Resume</Link></li>
            <li><Link className="nav-link" to="/skills">Language Skills</Link></li>
            {/* <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <div className="social-links">
          <a href="https://www.facebook.com/dream.developr" target='_blank' className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/krishna_mishra_8792/" target='_blank' className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/krishna-mishra-367862107/" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>

      </div>
    </header>
  )
}
