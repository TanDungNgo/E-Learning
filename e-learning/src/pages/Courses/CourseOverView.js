import React from "react";

const CourseOverView = (props) => {
  const sampleData = 'Here is sample course overview 1;Here is sample course overview 2;Here is sample course overview 3'
  var { description } = props;
  if (description == '') description = sampleData;
  const renderOverView = description?.split(";").map((item, index) => {
    return (
      <li className="my-1" style={{ maxInlineSize: "none" }} key={index}>
        <div className="flex align-center relative">
          <span className="dot absolute"></span>
          <span className="pl-8 text-medium font-medium tracking-tight">
            {item}
          </span>
        </div>
      </li>
    );
  });

  return <ul className="list-inside">{renderOverView}</ul>;
};

export default CourseOverView;
