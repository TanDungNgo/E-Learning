import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleItems.module.css";

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
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { listCourses } = props;
  const renderCourse = (listCourses) => {
    return listCourses.map((item, index) => {
      return (
        <div
          key={index}
          style={{ height: 300, width: 400 }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <CourseCard course={item} />
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
