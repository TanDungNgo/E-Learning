import React from "react";

const CourseOverView = (props) => {
  const fakeDataConst =
    "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company;Me will create a portfolio of ;15 apps to be able apply for junior developer jobs at a technology company";

<<<<<<< HEAD
// const fakeDataConst = "You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company;Me will create a portfolio of ;15 apps to be able apply for junior developer jobs at a technology company"
const fakeDataConst = props.description
const dataToGet = (props.fixedData ? props.fixedData : fakeDataConst)
=======
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
>>>>>>> 9580ffeaadc7427f32faff74ba9c29eaed9ace1c

  return (
    <>
      <ul className="list-inside">{renderOverView}</ul>
    </>
  );
};

export default CourseOverView;
