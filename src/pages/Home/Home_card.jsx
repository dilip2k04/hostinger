import React from 'react'

const Home_card = (img,title,para) => {
  return (
    <div className="card w-25 text-center d-flex flex-column justify-content-center align-items-center gap-3">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  )
}

export default Home_card
