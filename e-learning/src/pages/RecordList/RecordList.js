import React from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

import RecordHasFeedBack from "./RecordHasFeedBack";

const RecordList = (props) => {
  let { lesson } = props;

  const renderRecords = () => {
    return lesson.records?.map((item, index) => {
      return (
        <Fragment key={index}>
          <RecordHasFeedBack item={item} lesson={lesson} />
        </Fragment>
      );
    });
  };

  return (
    <>
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
              <th scope="col" className="w-96 py-3 px-6 text-center">
                Record
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="mx-auto">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderRecords()}</tbody>
        </table>
      </div>
    </>
  );
};

export default RecordList;
