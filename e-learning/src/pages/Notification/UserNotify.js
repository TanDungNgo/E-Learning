import React from "react";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { NotifyUserAction } from "../../redux/actions/NotifyAction";
import { ERROR } from "../../utils/settings/config";

const UserNotify = () => {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));

  //redux
  const { notifyUserDefault } = useSelector((state) => state.NotifyReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (userLogin !== null) {
      dispatch(NotifyUserAction(userLogin.id));
    } else {
      openNotificationWithIcon(ERROR, "Please login", "error");
      history.push("/");
    }
  }, []);

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-20">
        <table className="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Notification
              </th>
            </tr>
          </thead>
          <tbody>
            {notifyUserDefault.map((notification) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th className="truncate py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span>
                    <h3>{notification.data.name}</h3>
                    <p>{notification.data.description}</p>
                    <span>
                      <h5>{notification.created_at}</h5>
                    </span>
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserNotify;