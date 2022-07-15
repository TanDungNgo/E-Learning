import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import AudioComponent from "../../components/AudioPlayer/AudioPlayer";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoPlayerUser from "../../components/VideoPlayer/VideoPlayerUser";
import {
  getAllLessonsAction,
  getLessonByIdAction,
  getOneLessonByIdAction,
} from "../../redux/actions/LessonActions";
import { getAllRecordsByLessonIdAction } from "../../redux/actions/RecordActions";

export const LessonDetailUser = (props) => {
  const dispatch = useDispatch();
  let { lessonId, courseId } = props.match.params;
  console.log('lessonId & courseId get from params',lessonId,courseId);


  const { userLogin } = useSelector((state) => state.UserReducer);

  const { lesson } = useSelector((state) => state.LessonReducer);
  const { recordsDefault } = useSelector((state) => state.RecordReducer);
  
  

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getOneLessonByIdAction(courseId, lessonId));
    dispatch(getAllRecordsByLessonIdAction(lessonId));
    
    console.log("lesson", lesson);
  }, []);
  let recordsUser = recordsDefault?.filter(
    (item) => {
      console.log(item);
      return (item.user_id === userLogin.id) && item
    }
  );
  console.log("recordGetFromState",recordsDefault);
  console.log("userLogin",userLogin);
  console.log("recordsUser",recordsUser);
  const renderAudio = () => {
    return recordsUser?.map((item, index) => {
      console.log("recordsUser-item", item);
      return (
        <>
          <AudioComponent record={item}/>
        </>
      );
    });
  };

  return (
    <>
      <div className="container my-20 text-3xl font-bold ">{lesson.name}</div>
      <div className="grid grid-cols-3 gap-3 container mt-10">
        <div className="col-span-2">
          <VideoPlayerUser lesson={lesson} />
          <div className="flex justify-between my-10">
            <Button
              textContent="Prev Lesson"
              className=" !rounded-none col-span-1"
              onClick={() => {
              }}
              disabled={true}
            ></Button>
            <Button
              textContent="Next Lesson"
              className=" !rounded-none col-span-1"
              onClick={() => {
              }}
              disabled={
                true
              }
            ></Button>
          </div>
        </div>
        <div className="col-span-1 bg-green-400 mt-10">{renderAudio()}</div>
      </div>
    </>
  );
};
