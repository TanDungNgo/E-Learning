import React from "react";
import {
  FolderOpenOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

//this is for user profile
const StudentRequestList = (props) => {
  let { liststudent } = props;
  let { studentcontrol } = props;
  console.log("liststudent ", liststudent);
  const renderStudents = () => {
    return liststudent?.map((item, index) => {
      return (
        <tr
          key={index}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.username}
          </th>
          <td className="py-3 px-6">
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
          <td className="py-4 px-6 truncate">{item.email}</td>
          <td className="py-4 px-6">{item.join_date}</td>
          {
            studentcontrol
            &&
          <td className="py-4 flex items-center align-middle justify-center content-center">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </button>
          </td>}
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
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="w-20 py-3 px-6">
                Avatar
              </th>
              <th scope="col" className="w-40 py-3 px-6">
                Email
              </th>
              <th scope="col" className="w-40 py-3 px-6">
                Video Link
              </th>
              <th scope="col" className="w-32 py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderStudents()}</tbody>
        </table>
      </div>
    </>
  );
};

export default StudentRequestList;
