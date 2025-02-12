import React from 'react'
import './Home.css'
import Home_card from './Home_card'


export default function Home() {
  const card_data=[{
    img:"/src/assets/Card_img_2.jpg", 
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'/src/assets/Card_img_3.jpg',
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'/src/assets/Card_img_4.jpg',
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'/src/assets/Card_img_1.jpg',
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  }
]
  return (
    
    <div className='Home'>
    <h2 className=' mx-5 NavTitle'>Home</h2>
    <div className="content d-flex justify-content-center align-items-center flex-column gap-5">
      <h2 className='Title'>"Personalised <span>Learning</span>  Experience"</h2>
      <h2 className='Para blue text-wrap'>Helping students think independently, bridge learning gaps, and achieve academic<br/> excellence through expert-led,personalized education</h2>
    </div>
    {card_data.map((card_data,index) =>{
      return  (
        <div key={index}
        className="Home_card text-center d-flex justify-content-center align-items-center gap-3 border-2 rounded-5">
          <Home_card 
          img={card_data.img} 
          title={card_data.title} 
          para={card_data.para} />
        </div>
    );
    })}
    </div>
  )
}
