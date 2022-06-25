import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleItems.module.css";

import ButtonBase from "../Button/Button";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export const MultipleTeachers = (props) => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { listTeachers, history, localtion } = props;
  const renderTeachers = (listTeachers) => {
    return listTeachers.map((item, index) => {
      return (
        <div
          key={index}
          style={{ height: 400, width: 300 }}
          className={`${styleSlick["width-item"]} px-5  `}
        >
          <img
            src={`${item.avatar}`}
            alt="abc"
            className="w-full"
            style={{ height: 200 }}
          />
          <div className="border-x border-gray-400">
            <h1 className="text-lg font-bold text-center">
              {item.teacherName}
            </h1>
            <p className="mb-0 px-1">
              {item.description.length > 50
                ? item.description.substr() + "..."
                : item.description}
            </p>
          </div>
          <ButtonBase
            textContent="View detail"
            className="w-full !rounded-none"
            onClick={() => {
              alert(item.teacherName + "  ||  " + item.description);
            }}
          />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderTeachers(listTeachers)}</Slider>
    </div>
  );
};
