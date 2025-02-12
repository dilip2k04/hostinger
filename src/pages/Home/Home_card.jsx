import React from 'react'


export default function Home_card ({img,title,para}) {
  return (
    <div className="row g-0">
      <div className="col-3">
      <div className="text-center d-flex flex-column justify-content-center align-items-center gap-5">
      <img src='/imgs/teaching1.png' alt="" width={185} height={185}/>
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo velit saepe tenetur optio accusamus nesciunt nisi illo, iste mollitia neque explicabo esse reprehenderit, a vitae ab sint, quisquam unde atque.</p>
    </div>
      </div>
      <div className="col-9">
        <div className="vertical">
          
        </div>
      </div>
    </div>
  )
}
