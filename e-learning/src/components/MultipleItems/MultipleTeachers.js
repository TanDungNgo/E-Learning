import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect } from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleItems.module.css";

import ButtonBase from "../Button/Button";
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

const description =
  "Giảng viên dạy tốt, nhiệt tình, được rất nhiều học sinh yêu mến. Có kinh nghiệm giảng dạy lâu năm, trình độ học vấn cao.";

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

  useEffect(()=> {

  },[])
  const { listTeachers, history, localtion } = props;
  console.log("listTeachers", listTeachers);
  console.log("props", props);
  const renderTeachers = (listTeachers) => {
    return listTeachers.map((item, index) => {
      console.log("render", item)
      return (
        <div
          key={index}
          style={{ height: 100, width: 300 }}
          className={`${styleSlick["width-item"]} ${styleSlick["height-item"]} px-5  `}
        >
          <TeacherCard />
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
