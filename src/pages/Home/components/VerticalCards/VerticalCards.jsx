

export default function VerticalCards() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        
        <div className="card cross_card" style={{width: '60%', height:'227px'}}>
            <div className="card-body-2 p-0 d-flex justify-content-center align-items-center flex-column">
              <div className="cross_card_content text-center text-muted p-3">
              <img src="/imgs/cross_card1.png" className="vertical_card_img" alt="" style={{marginBottom:'10px'}}/>
                <h3 className='mb-3'style={{color:'black'}}>Elite Mentorship</h3>
                <span  style={{fontSize: '16px'}}>Mentoring from IIT-IIM Alumni Founders</span>              
              </div>
            </div>
          </div>


          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card"  style={{width: '60%', height:'227px'}}>
            <div className="card-body-2 d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card2.png"  className="vertical_card_img" alt="" style={{marginBottom:'10px',marginTop:'20px'}}/>

                <h3 className='mb-3'>One-on-One <br />Sessions</h3>
              <div className="cross_card_content text-center text-muted p-3 mb-1">
              <span  style={{fontSize: '16px'}}> One-on-One interactive live online sessions</span>              </div>
            </div>
          </div>
          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card"  style={{width: '60%' , height:'227px'}}>
            <div className="card-body-2  d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card3.png" className="vertical_card_img" alt="" style={{marginBottom:'10px',marginTop:'20px' , height:'50px'}} />

                <h3 className='mb-3'>Personalized study plans</h3>
              <div className="content cross_card_content text-center text-muted p-3 mb-1">
              <span  style={{fontSize: '16px'}}>Personalized Study Plans tailored to each student</span>              </div>
            </div>
          </div>
          <div className="d-flex" >
            <div className="vertical_line" style={{height: '100px', backgroundColor: ' #041D60', padding: '1px'}}></div>
          </div>
          <div className="card cross_card" style={{width: '60%',height:'227px'}}>
            <div className="card-body-2 d-flex justify-content-center align-items-center flex-column">
            <img src="/imgs/cross_card4.png" className="vertical_card_img" alt="" style={{marginBottom:'10px',marginTop:'10px'}}/>

                <h3 className='mb-3'>Certified Mentors</h3>
              <div className="cross_card_content text-center text-muted p-3 mb-1">
              <span  style={{fontSize: '16px'}}>  Experienced and certified CBSE educators</span>              </div>
            </div>
          </div>
    </div>
  )
}
