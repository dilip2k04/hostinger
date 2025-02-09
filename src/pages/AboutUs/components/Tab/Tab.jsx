import React from "react";
import "./Tab.css";

export default function Tab({
  title,
  right_pic = false,
  img,
  content,
  is_content = false,
}) {
  return (
    <div>
      <div className="title_tag d-flex justify-content-center align-items-center row g-0">
        <div className="col-5">
          <div className="left_line"></div>
        </div>
        <div className="col-2">
          {" "}
          <h2><i>{title}</i></h2>
        </div>
        <div className="col-5">
          <div className="right_line"></div>
        </div>
      </div>
      <div className="tab_contents row g-0 d-flex">
        {!is_content ? (
          right_pic ? (
            <>
              <div className="col-8 d-flex justify-content-center align-items-center flex-column p-3">
                <div>
                  <h3>{content}</h3>
                </div>
              </div>
              <div className="col-4">
                <img src={img} className="tab_img" alt="" />
              </div>
            </>
          ) : (
            <>
              <div className="col-4">
                <img src={img} className="tab_img" alt="" />
              </div>
              <div className="col-8 d-flex justify-content-center align-items-center flex-column p-3">
              <div>
                  <h3>{content}</h3>
                </div>
              </div>
            </>
          )
        ) : (
          <div className="col-12 p-3">
            <div>
              <h3>{content}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
