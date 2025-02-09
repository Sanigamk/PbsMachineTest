import React from "react";

export default function SwiperItem({ img, title = "hello world" }) {
  return (
    <div className="section-five-content-body-item">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div>{title}</div>
    </div>
  );
}
