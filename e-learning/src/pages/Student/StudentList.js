import React from "react";
import moment from "moment";
import "./StudentList.css";
const StudentList = (props) => {
  let { listStudents } = props;
  let { studentControl } = props;
  let { userControl } = props;
  const renderStudents = () => {
    return listStudents?.map((item, index) => {
      return (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          {!studentControl && (
            <th
              scope="row"
              className="truncate py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.course_name}
            </th>
          )}
          <th
            scope="row"
            className="truncate py-4 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.username}
          </th>
          <td className="py-3 px-2">
            <div className="flex align-middle items-center">
              <div>
                <img
                  className="object-cover rounded-full w-8 h-8"
                  src={item.avatar}
                  alt="abc"
                />
              </div>
              <div>
                <span className="pl-2 text-sm font-semibold"></span>
              </div>
            </div>
          </td>

          <td className="py-4 px-2 truncate">{item.email}</td>
          <td className="py-4 px-2">
            {moment(item.created_at).format("YYYY-MM-DD HH:mm:ss")}
          </td>
          {studentControl && (
            <td className="py-4 flex items-center align-middle justify-center content-center">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </td>
          )}
          {userControl && (
            <th>
              <td className="py-4 flex items-center align-middle justify-center content-center">
                <select defaultValue={item.role}>
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                  <option value="teacher">teacher</option>
                </select>
              </td>
            </th>
          )}
        </tr>
      );
    });
  };
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {!studentControl && (
                <th scope="col" className="py-3 px-2 title-table w-60">
                  Course
                </th>
              )}
              <th scope="col" className="py-3 px-2 title-table w-60">
                Username
              </th>
              <th scope="col" className="w-20 py-3 px-2 title-table">
                Avatar
              </th>
              <th scope="col" className="w-40 py-3 px-2 title-table">
                Email
              </th>
              <th scope="col" className="w-32 py-3 px-2 title-table">
                Join Date
              </th>
              {studentControl && (
                <th scope="col" className="py-3 px-2 title-table">
                  <span className="">Edit</span>
                </th>
              )}
              {userControl && (
                <th scope="col" className="py-3 px-2 title-table">
                  <span className="">Role</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>{renderStudents()}</tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
