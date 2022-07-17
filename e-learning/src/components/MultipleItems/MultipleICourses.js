import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleItems.module.css";

import ButtonBase from "../Button/Button";
import CourseCard from "./CourseCard";

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

export const MultipleCourses = (props) => {
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

  const { listCourses, history, localtion } = props;
  const renderCourse = (listCourses) => {
    return listCourses.map((item, index) => {
      console.log('course',item);
      return (
        <div
          key={index}
          style={{ height: 300, width: 400 }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <CourseCard course={item}/>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Slider {...settings}>{renderCourse(listCourses)}</Slider>
    </div>
  );
};
