import React from "react";

export default function SwiperItem({
  img,
  location = "hello world",
  title = "Eiffle Complex",
}) {
  return (
    <div className="section-five-content-body-item">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="section-five-place">
        <h3 className="section-five-place-buildname">{title}</h3>
        <div className="section-five-place-location">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="15.958"
              viewBox="0 0 12 15.958"
            >
              <path
                id="location-dot-solid"
                d="M6.741,15.6C8.344,13.594,12,8.731,12,6A6,6,0,0,0,0,6c0,2.731,3.656,7.594,5.259,9.6a.944.944,0,0,0,1.481,0ZM6,4A2,2,0,1,1,4,6,2,2,0,0,1,6,4Z"
                fill="#dfa01e"
              />
            </svg>
          </span>
          {location}
        </div>
      </div>
    </div>
  );
}
