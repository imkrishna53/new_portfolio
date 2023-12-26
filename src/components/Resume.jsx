import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import removeMobileNav from './RemoveNav';

export const Resume = () => {
    // Creating a temporary URL for the Blob
    const url = 'assets/resume/krishna-resume.pdf'

    // Creating an anchor element
    const a = document.createElement('a');

    // Setting the download attribute with the desired file name
    a.download = 'krishna-resume.pdf';

    // Setting the href attribute with the temporary URL
    a.href = url;

    // Appending the anchor element to the document
    document.body.appendChild(a);
    const location = useLocation();
    const handleDownload = () => {
      a.click();
      // Removing the anchor element from the document
      document.body.removeChild(a);
    }

    useEffect(() => {
      removeMobileNav()
    })
  return (
    <section id="resume" className={location.pathname === '/resume' && 'resume section-show'}>
    <div className="container">

      <div className="section-title">
        <h2>Resume</h2>
        <p>Check My Resume 
      <button className="btn btn-download sticky" onClick={handleDownload}><i className="bi bi-download"></i> Download</button></p>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Krishna Kumar</h4>
            <p><em>Innovative and deadline-driven software developer with 5+ years of experience developing backend and frontend from initial concept to final, polished deliverable.</em></p>
            <p>
            </p><ul>
              <li>Khairi 2, Doiwala, Dehradun (Uttarakhand)</li>
              <li>807-786-2184</li>
              <li>imkrishna53@gmail.com</li>
            </ul>
            <p></p>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of computer application (MCA)</h4>
            <h5>2013 - 2016</h5>
            <p><em>Graphic Era Hill University, Bhimtal, Uttarakhand</em></p>
            <p>The faculty and staff exhibit exceptional quality, providing students with readily accessible support for academic and college-related challenges.</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Science (BSC)</h4>
            <h5>2010 - 2013</h5>
            <p><em>MBPG College (Kumaon University), Haldwani, Uttarakhand, IN</em></p>
            <p>I initially pursued a BSc degree, but during that time, my interest shifted towards a professional course aligned with my passion. Recognizing the need for a distinctive path in Computer Science to pursue a programming career, I opted for an MCA to enhance my professional growth.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior software Engineer</h4>
            <h5>2022 - Present</h5>
            <p><em>Mindfire Solutions, Noida, Uttar Pradesh, IN </em></p>
            <p>
            </p><ul>
             <li>Spearheaded a virtual eyewear try-on platform, elevating customer engagement by 25% through groundbreaking real-time
              visualization.</li>
              <li>Created Pupil Distance and Fitting Height calculators with exceptional accuracy rates of 97% and 99%, respectively, utilizing
                JavaScript, Tensorflow.js, and Google's MediaPipe library, thereby establishing new optometric standards.</li>
              <li>Engineered a pioneering system that increased diagnostic accuracy in ophthalmology by an impressive 30%</li>
            </ul>
            <p></p>
          </div>
          <div className="resume-item">
            <h4>Associate Delivery (Level III)</h4>
            <h5>2020 - 2021</h5>
            <p><em>smartData Enterprises Ltd, Dehradun, Uttarakhand, IN</em></p>
            <p>
            </p><ul>
              <li>Developed a Fambul plateform for Sierra Leonean community to connect, collaborate, and learn. This web application includes
                digital tools and resources developed for the community, and geared towards this mission.</li>
              <li>Recommended and consulted with clients to gethering all requirements or weekly demo.</li>
            </ul>
            <p></p>
          </div>
          <div className="resume-item">
            <h4>Software Engineer</h4>
            <h5>2017 - 2020</h5>
            <p><em>Matrix Marketers, Mohali, Punjab, IN</em></p>
            <p>
            </p><ul>
              <li>Developed numerous development programs (with Laravel, Wordpress)</li>
              <li>Managed up to 3 projects or tasks at a given time while under pressure</li>
              <li>Created 3-4 projects (Minton Spidell, Nutrachamps, homeJab, 2Blunt) for client and was made in Laravel &amp; wordpress </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
