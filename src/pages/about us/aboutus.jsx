import React from 'react';
import './aboutus.css'

const aboutus = () => {
  return (
    <div className='about'>
      <h5>About Us </h5>

        <div className="ourmission">
            <h3>Our Mission</h3>
            <div className="ourmissioncontent">
                <img src="/src/assets/our mission.jpg" alt="image" />
                <p>To deliver an online education experience for CBSE students currently in Grades 3-9 across the GCC region, fostering independent thinking[, bridging learning gaps, and nurturing a love for knowledge.</p>
            </div>                                                        
        </div>
        <hr />

        <div className="ourvission">
            <h3>Our Vission</h3>
            <div className="ourvissioncontent">
                <p>To become the premier platform for academic excellence, empowering students to achieve their highest potential augmented through innovative and personalized help with their school curriculum.</p>
                <img src="/src/assets/oru vission.jpg" alt="img" />
            </div>  
        </div>
        <hr />

      <div className="ourfounder">
        <h3>Our Founder</h3>
        <p>IQ Bridge was founded by alumni of IIT and IIM, two of India’s most prestigious institutions. With a shared vision for academic brilliance and a passion for impactful education, our founders bring a wealth of expertise and leadership to redefine online learning. Their combined experience in cutting-edge technology, strategic problem-solving, and advanced pedagogy ensures that every student benefits from world-class guidance.</p>
      </div>
      <hr />

      <div className="whyiq">
        <h3>Why IQ Bridge ?</h3>
        <div className="crow1">
            <div className="c1">
                  <img src="/src/assets/about c1.jpg" alt="" />
                  <p><strong>Elite Educators</strong></p>
                  <p>Choose your Mentor from 1000+ Mentors From Skill Link Community</p>
            </div>

            <div className="c2">
                  <img src="/src/assets/about c2.jpg" alt="" />
                  <p><strong>State-of-the-Art</strong></p>
                  <p>Get Certified from Skill Link For Every Course you Finish on Skill Link </p>
            </div>

            <div className="c3">
                  <img src="/src/assets/about c3.jpg" alt="" />
                  <p><strong>Affordable Pricing</strong></p>
                  <p>Track your Progress and Gain Your Skill Accordingly</p>
            </div>
        </div>

        <div className="crow2">
            <div className="c4">
                  <img src="/src/assets/about c4.jpg" alt="" />
                  <p><strong>Flexible Schedules</strong></p>
                  <p>Get Notification Alerts for Every Unfinished Courses to Keep You Motivated</p>
            </div>

            <div className="c5">
                  <img src="/src/assets/about c5.jpg" alt="" />
                  <p><strong>Personalized Learning Approach</strong></p>
                  <p>Get Your Roadmap According to your skills and Skill Alerts</p>
            </div>
        </div>

        
        
      </div>
      <hr />
    </div>
  )
}

export default aboutus
