import React from 'react'
import './Home.css'
import Card from '../OurProgram/components/Card/Card'
import Home_card from './Home_card'


export default function Home() {
  const card_data=[{
    img:"/assets/Card_img_1.jpg",
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'',
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'',
    title:'Elite Mentorship',
    para:'Mentoring from IIT-IIM Alumni Founders'
  },
  {
    img:'',
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
    {/* <div className="circle-Blue"></div>
    <div className="circle"></div> */}
    
    
    

    </div>
    
  )
}
