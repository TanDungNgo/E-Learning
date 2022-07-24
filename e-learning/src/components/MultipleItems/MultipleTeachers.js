import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleItems.module.css";

import TeacherCard from "./TeacherCard";

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
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { listTeachers } = props;
  const renderTeachers = (listTeachers) => {
    return listTeachers.map((item, index) => {
      return (
        <div
          key={index}
          style={{ height: 100, width: 300 }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <TeacherCard teacher={item} />
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
