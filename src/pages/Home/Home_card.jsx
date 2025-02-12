import React from 'react'


export default function Home_card ({img,title,para}) {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center gap-5">
      <img src={img} alt="" width={185} height={185}/>
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  )
}
