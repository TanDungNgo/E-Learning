import React from "react";

import { AudioComponent } from "../../components/AudioPlayer/AudioPlayer";

const RecordListAll = (props) => {
  let { lesson } = props;
  const renderRecords = () => {
    return lesson.records?.map((item, index) => {
      return (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {lesson.course_name}
          </th>
          <td className="truncate py-4 px-6">{lesson.name}</td>
          <td className="truncate py-4 px-6">
            {item.minute}:{item.second}
          </td>
          <td className="py-4 px-6">
            <div className="flex align-middle items-center">
              <div>
                <img
                  className="object-cover rounded-full w-8 h-8"
                  src="https://v1.tailwindcss.com/img/jonathan.jpg"
                  alt="abc"
                />
              </div>
              <div>
                <span className="pl-2 text-sm font-semibold">
                  {item.username}
                </span>
              </div>
            </div>
          </td>
          <td className="py-4 px-6">
            <AudioComponent record={item} />
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20">
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
              <th scope="col" className="py-3 px-6">
                User
              </th>
              <th scope="col" className="w-64 py-3 px-6">
                Record File
              </th>
            </tr>
          </thead>
          <tbody>{renderRecords()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default RecordListAll;
