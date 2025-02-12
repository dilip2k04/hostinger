import React from 'react'

export default function VerticalCards() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="card cross_card" style={{width: '80%'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
              <div className="cross_card_content text-center text-muted p-3">
              <img src="/imgs/cross_card1.png" className="crosscard_img" alt="" />
                <h5>Elite Mentorship</h5>
                Mentoring from IIT-IIM Alumni Founders              </div>
            </div>
          </div>
          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card"  style={{width: '80%'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card2.png"  className="crosscard_img" alt="" />

                <h3>One - on - One Sessions</h3>
              <div className="cross_card_content text-center text-muted p-3">
              One-on-One interactive live online sessions              </div>
            </div>
          </div>
          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card"  style={{width: '80%'}}>
            <div className="card-body  d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card3.png" className="crosscard_img" alt="" />

                <h3>Personalized study plans</h3>
              <div className="content cross_card_content text-center text-muted p-3">
              Personalized Study Plans tailored to each student              </div>
            </div>
          </div>
          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card" style={{width: '80%'}}>
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card4.png" className="crosscard_img" alt="" />

                <h3>Certified Mentors</h3>
              <div className="cross_card_content text-center text-muted p-3">
              Experienced and certified CBSE educators              </div>
            </div>
          </div>
    </div>
  )
}
