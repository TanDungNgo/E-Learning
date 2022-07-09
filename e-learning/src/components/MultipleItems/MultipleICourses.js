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
      return (
        <div
          key={index}
          style={{ height: 400, width: 300 }}
          className={`${styleSlick["width-item"]} px-5  `}
        >
          <img
            src={`${item.banner}`}
            alt="abc"
            className="w-full"
            style={{ height: 200 }}
          />
          <div
            className="grid grid-cols-4 px-1 border-x border-gray-400"
            style={{ height: 70 }}
          >
            <div className="col-span-3">
              <h1 className="font-bold mb-0 text-base">{item.name}</h1>
              <p className="mb-0">{item.description}</p>
            </div>
            <div className="col-span-1 text-right">
              <p className="m-0">{item.teacher_id}</p>
              <i className="fa fa-star text-yellow-500 p-1">
                <span className="text-black px-1">{item.voting}</span>
              </i>
            </div>
          </div>
          <ButtonBase
            textContent="View detail"
            className="w-full !rounded-none"
            onClick={() => {
              props.history.push(`/courses/${item.id}`);
            }}
          />
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
