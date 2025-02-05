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

      <div className="Sub">
        <h3>Subjects we cover</h3>
      </div>
    </div>
  )
}
