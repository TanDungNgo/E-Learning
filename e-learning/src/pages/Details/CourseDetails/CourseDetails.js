import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourseByIdAction } from "../../../redux/actions/CourseActions";

export const CourseDetails = (props) => {
  console.log("id", props.match.params.id);
  const dispatch = useDispatch();
  const { courseDetails } = useSelector((state) => state.CourseReducer);
  console.log("CourseDetails", courseDetails);
  console.log("CourseDetails", props.match.params.id);
  useEffect(() => {
    dispatch(getCourseByIdAction(props.match.params.id));
  }, []);

  return (
    <div style={{ height: 500 }} className="flex justify-center items-center">
      <h1>{props.match.params.id}</h1>
      <h1>{props.match.params.id}</h1>
      <h1>{props.match.params.id}</h1>
      <h1>{props.match.params.id}</h1>
      
    </div>
  );
};
