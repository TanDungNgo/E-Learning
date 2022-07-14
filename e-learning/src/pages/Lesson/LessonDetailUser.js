import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import {
  getAllLessonsAction,
  getLessonByIdAction,
} from "../../redux/actions/LessonActions";
import { getAllRecordsByLessonIdAction } from "../../redux/actions/RecordActions";

export const LessonDetailUser = (props) => {
  let { lessonId, courseId } = props.match.params;

  const { lessonsDefault } = useSelector((state) => state.LessonReducer);

  const [indexOfLesson, setIndexOfLesson] = useState(
    lessonsDefault.findIndex((item) => item.id === parseInt(lessonId))
  );

  console.log("i", indexOfLesson);

  const { userLogin } = useSelector((state) => state.UserReducer);

  const { lesson } = useSelector((state) => state.LessonReducer);
  const { recordsDefault } = useSelector((state) => state.RecordReducer);
  console.log(recordsDefault);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getLessonByIdAction(lessonId));
    console.log("lesson", lessonId, lesson);
  }, []);
  let recordsUser = recordsDefault?.filter(
    (item) => item.user_id === userLogin.id
  );
  console.log(recordsUser);
  const renderAudio = () => {
    return recordsUser?.map((item, index) => {
      console.log("item", item);
      return (
        <audio
          src={item.record_file}
          controls
          className="inline-block p-1"
          key={index}
        />
      );
    });
  };

  return (
    <>
      <div className="container my-20 text-3xl font-bold ">{lesson.name}</div>
      <div className="grid grid-cols-3 gap-3 container mt-10">
        <div className="col-span-2">
          <VideoPlayer lesson={lesson} />
          <div className="flex justify-between my-10">
            <Button
              textContent="Prev Lesson"
              className=" !rounded-none col-span-1"
              onClick={() => {
                let { id } = lessonsDefault[indexOfLesson - 1];
                props.history.push(`/courses/${courseId}/lessons/${id}`);
                dispatch(getLessonByIdAction(id));
                setIndexOfLesson(indexOfLesson - 1);
              }}
              disabled={indexOfLesson === 0 ? true : false}
            ></Button>
            <Button
              textContent="Next Lesson"
              className=" !rounded-none col-span-1"
              onClick={() => {
                console.log("indexOfLesson", indexOfLesson);
                let { id } = lessonsDefault[indexOfLesson + 1];
                props.history.push(`/courses/${courseId}/lessons/${id}`);
                dispatch(getLessonByIdAction(id));
                setIndexOfLesson(indexOfLesson + 1);
              }}
              disabled={
                indexOfLesson === lessonsDefault.length - 1 ? true : false
              }
            ></Button>
          </div>
        </div>
        <div className="col-span-1 bg-green-400 mt-10">{renderAudio()}</div>
      </div>
    </>
  );
};
