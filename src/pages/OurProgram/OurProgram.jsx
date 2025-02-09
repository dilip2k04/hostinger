import React from 'react';
import './OurProgram.css'

export default function OurProgram() {
  return (
    <div className='ourprogram'>
      <h5>Our Program </h5>

      <div className="ourprgm">
          <div className="ourprgmcontent">
              <div className="ourprgmimageandcontent">
                <img src="/src/assets/our program 1.jpg" alt="image" />
                <p>We offer one-on-one tutoring sessions tailored to each student's unique learning style and pace, ensuring effective understanding and retention of concepts.</p>
              </div>
              <button>Book a Demo</button>
              <hr />
          </div>                                                        
      </div>

      <div className="grade">
        <div className="gradec1">
          <h3>Grade 3 - 5</h3>
          <img src="/src/assets/gradec1.jpg" alt="image" />
        </div>

        <div className="gradec1">
          <h3>Grade 6 - 9</h3>
          <img src="/src/assets/gradec2.jpg" alt="image" />
        </div>
      </div>
      <hr />
      <div className="all_sub">
      <h3>Subjects we cover</h3>
      <div className="Sub-1">
        <div className="sub_Card d-inline-flex flex-column justify-content-center align-items-center gap-3 rounded-5"> 
          <h4>English</h4>
          <img src="/src/assets/image.png" alt="" width={185} height={185}/>
          <a href="" className='btn '>Get Started</a>
        </div>
      </div>
      </div>
    </div>
  )
}
