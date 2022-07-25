import React from "react";
import "./PendingRequestList.css";
import { TeacherService } from "../../../services/TeacherService";
import { useDispatch } from "react-redux";
import { getPendingRequestTeacherAction } from "../../../redux/actions/UpgradeTeacherActions";
const UpgradeRequestList = (props) => {
  let { requestlist } = props;
  let { requestcontrol } = props;
  const dispatch = useDispatch();
  const handleAccept = (id) => {
    TeacherService.ApproveTeacher(id)
      .then((result) => {
        dispatch(getPendingRequestTeacherAction());
      })
      .catch((error) => {
        console.log("error>>", error);
      });
  };
  const handleReject = (id) => {
    TeacherService.RejectTeacher(id)
      .then((result) => {
        dispatch(getPendingRequestTeacherAction());
      })
      .catch((error) => {
        console.log("error>>", error);
      });
  };
  const renderRequestList = () => {
    return requestlist?.map((item, index) => {
      return (
        <tr
          key={index}
          className="overflow-auto bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.username}
          </th>
          <td className="py-3 px-6">{item.status}</td>
          <td className="py-4 px-6">{item.email.substr(0, 15) + "..."}</td>
          <td className="py-4 px-6 truncate">
            <a href={item.video_link}>{item.video_link}</a>
          </td>
          <td className="py-4 px-6">{item.created_at}</td>

          {requestcontrol && (
            <td className="py-4 flex items-center align-middle justify-center content-center">
              <button
                type="button"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => handleAccept(item.id)}
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => handleReject(item.id)}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </td>
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
              <th scope="col" className="py-3 px-6 title-table">
                Username
              </th>
              <th scope="col" className="w-20 py-3 px-6 title-table">
                Status
              </th>
              <th scope="col" className="w-40 py-3 px-6 title-table">
                Email
              </th>
              <th scope="col" className="w-40 py-3 px-6 title-table">
                Introduction Video
              </th>
              <th scope="col" className="w-32 py-3 px-6 title-table">
                Date
              </th>
              <th scope="col" className="py-3 px-6 title-table">
                <span className="">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderRequestList()}</tbody>
        </table>
      </div>
    </>
  );
};

export default UpgradeRequestList;
