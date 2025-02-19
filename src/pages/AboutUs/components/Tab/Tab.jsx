import React from "react";
import "./Tab.css";

export default function Tab({
  title = '',
  right_pic = false,
  img = '',
  content = '',
  is_title = false,
  is_content = false,
  col = 5
}) {
  if (is_title) {
    return (
      <div className="tab_container">
        <div className="title_tag d-flex justify-content-center align-items-center row g-0">
          <div className="col ">
            <div className="left_line"></div>
          </div>
          <div className="col ">
            {" "}
            <h2>
              <i>{title}</i>
            </h2>
          </div>
          <div className="col ">
            <div className="right_line"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tab_container">
      <div className="title_tag d-flex justify-content-center align-items-center row g-0">
        <div className="col-md-5 col-3">
          <div className="left_line"></div>
        </div>
        <div className="col-md-2 col-6">
          {" "}
          <h2>
            <i>{title}</i>
          </h2>
        </div>
        <div className="col-md-5 col-3">
          <div className="right_line"></div>
        </div>
      </div>
      <div className="tab_contents row g-0 d-flex">
        {!is_content ? (
          right_pic ? (
            <>
              <div className="col-md-7 order-2 order-md-1 d-flex justify-content-center align-items-center flex-column p-3">
                <div className="content">
                  <h3>{content}</h3>
                </div>
              </div>
              <div className="col-md-5 order-1 order-md-2 d-flex justify-content-center align-items-center">
                <img src={img} className="tab_img rounded" alt=""  />
              </div>
            </>
          ) : (
            <>
              <div className="col-md-5 order-1 order-md-1 d-flex justify-content-center align-items-center">
                <img src={img} className="tab_img rounded" alt="" />
              </div>
              <div className="col-md-7 order-2 order-md-2 d-flex justify-content-center align-items-center flex-column p-3">
                <div className="content">
                  <h3>{content}</h3>
                </div>
              </div>
            </>
          )
        ) : (
          <div className="col-12 p-3">
            <div >
              <h3>{content}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
