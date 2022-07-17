import React from "react";

const CourseOverView = (props) => {
  const fakeDataConst =
    "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company;Me will create a portfolio of ;15 apps to be able apply for junior developer jobs at a technology company";

  const dataToGet = props.fixedData ? props.fixedData : fakeDataConst;

  const renderOverView = dataToGet.split(";").map((item, index) => {
    return (
      <li className="my-1" style={{ maxInlineSize: "none" }} key={index}>
        <div className="flex align-center relative">
          <span className="pl-8 text-medium font-medium tracking-tight">
            {item}
          </span>
        </div>
      </li>
    );
  });

  return (
    <>
      <ul className="list-inside">{renderOverView}</ul>
    </>
  );
};

export default CourseOverView;
