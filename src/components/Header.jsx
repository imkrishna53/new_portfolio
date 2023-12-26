import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GLightbox from 'glightbox';
import MobileMenuContext from '../context/MobileMenuContext';
const Waypoint = require('waypoints/lib/noframework.waypoints');

export const Header = () => {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);
  const {toggleMenu, mobileMenuObj} = useContext(MobileMenuContext);
console.log(mobileMenuObj);
  const pathname = location.pathname;
  const select = (el, all = false) => {
    el = el.trim()
    if(el)
    {
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }


  useEffect(() => {
  /**
   * Mobile nav toggle
   */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      console.log('header');
      setClicked(true);
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
    
  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '#navbar .nav-link', function(e) {
    let section = select(this.hash)
    if (section) {
      e.preventDefault()

      let navbar = select('#navbar')
      let header = select('#header')
      let sections = select('section', true)
      let navlinks = select('#navbar .nav-link', true)

      navlinks.forEach((item) => {
        item.classList.remove('active')
      })

      this.classList.add('active')

      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }

      if (this.hash == '#header') {
        header.classList.remove('header-top')
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        return;
      }

      if (!header.classList.contains('header-top')) {
        header.classList.add('header-top')
        setTimeout(function() {
          sections.forEach((item) => {
            item.classList.remove('section-show')
          })
          section.classList.add('section-show')

        }, 350);
      } else {
        sections.forEach((item) => {
          item.classList.remove('section-show')
        })
        section.classList.add('section-show')
      }

      scrollto(this.hash)
    }
  }, true)

  }, [clicked])

  
  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  // /**
  //  * Initiate portfolio details lightbox 
  //  */
  // const portfolioDetailsLightbox = GLightbox({
  //   selector: '.portfolio-details-lightbox',
  //   width: '90%',
  //   height: '90vh'
  // });


  /**
   * Activate/show sections on load with hash links
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let initial_nav = select(window.location.hash)

      if (initial_nav) {
        let header = select('#header')
        let navlinks = select('#navbar .nav-link', true)

        header.classList.add('header-top')

        navlinks.forEach((item) => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })

        setTimeout(function() {
          initial_nav.classList.add('section-show')
        }, 350);

        scrollto(window.location.hash)
      }
    }
  });
  
  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <header id="header" className={pathname !== '/' ? 'header-top' : ''}>
      <div className="container">

        <h1><Link to="/">Krishna Kumar</Link></h1>
        <h2>I am a dedicated <span>Software Developer</span> based in Uttarakhand<br /><br /> Demonstrating a strong passion for my work. </h2>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className={pathname === '/about' ? 'nav-link active' : ''} to="/about" >About</Link></li>
            <li><Link className="nav-link" to="/resume">Resume</Link></li>
            <li><Link className="nav-link" to="/skills">Language Skills</Link></li>
           
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
