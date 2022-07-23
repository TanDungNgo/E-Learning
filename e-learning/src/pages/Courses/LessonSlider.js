import React, { Fragment } from "react";
import { FieldTimeOutlined, AudioOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTimedatasByLessonIdAction } from "../../redux/actions/TimedataActions";

const LessonSlider = (props) => {
  const dispatch = useDispatch();
  const { lessons } = props;
  const renderLessons = () => {
    return lessons?.map((item, index) => {
      return (
        <Fragment key={index}>
          <NavLink
            to={`/course/${item.course_id}/lesson/${item.id}`}
            className="flex items-center justify-center bg-inherit media-element py-3"
            onClick={() => {
              dispatch(getTimedatasByLessonIdAction(item.id));
            }}
          >
            <div className="lesson-card-content relative max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
              <img
                src="https://i.imgur.com/5dmBrx6.jpg"
                alt="plant"
                className="w-full"
              />
              <div className="p-3">
                <h6 className="mb-2 text-base font-bold  text-gray-800 dark:text-white tracking-tight">
                  Lesson : {item.name}
                </h6>

                <p className="h-8 mb-2 text-sm font-normal text-gray-700 dark:text-gray-400 description-text tracking-tighter truncate">
                  {item.description}
                </p>

                <div className="absolute bottom-5 right-3 w-11/12 ">
                  <div className="flex justify-between align-bottom">
                    <div className="flex">
                      <FieldTimeOutlined className="folder-icon" />
                      <span className="ml-1 text-gray-800 font-light text-xs leading-none flex items-center">
                        6 min
                      </span>
                    </div>
                    <div className="flex">
                      <AudioOutlined className="mic-icon" />
                      <span className="ml-1 text-gray-800 font-light text-xs leading-none flex items-end">
                        30 records
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </Fragment>
      );
    });
  };
  return (
    <>
      <div className="media-scroller snaps-inline scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        {renderLessons()}
      </div>
    </>
  );
};

export default LessonSlider;
