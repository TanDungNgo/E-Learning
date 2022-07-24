import React from "react";
import {
  FolderOpenOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { AudioComponent } from "../../components/AudioPlayer/AudioPlayer";
import RecordHasFeedBack from "./RecordHasFeedBack";

//this is for user profile
const RecordList = (props) => {

  let { lesson } = props;
  console.log('lessonprop',lesson);
  // console.log("lesson ", lesson);
  const renderRecords = () => {
    return lesson.records?.map((item, index) => {
      return (
        <RecordHasFeedBack item={item} index={index} lesson={lesson} />
      );
    });
  };

  return (
    <>
      <div className="mb-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
        Record
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Course
              </th>
              <th scope="col" className="py-3 px-6">
                Lesson
              </th>
              <th scope="col" className="w-20 py-3 px-6">
                Time
              </th>
              <th scope="col" className=" py-3 px-6">
                User
              </th>
              <th scope="col" className="w-96 py-3 px-6">
                <span className="">Record</span>
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {renderRecords()}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecordList;
