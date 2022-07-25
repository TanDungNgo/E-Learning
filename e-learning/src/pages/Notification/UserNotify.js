import React from "react";
import { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { openNotificationWithIcon } from "../../components/Notification/Notification";
import { NotifyUserAction } from "../../redux/actions/NotifyAction";
import { ERROR } from "../../utils/settings/config";
import { NavLink } from "react-router-dom";
const UserNotify = () => {
  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
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
  const renderNotifyCation = () => {
    return notifyUserDefault?.map((notification, index) => {
      return (
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          key={index}
        >
          <th className="truncate py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <span>
              <h3>{notification.data.name}</h3>
              {notification.data.type === "new_lesson" ? (
                <NavLink to={`/course/${notification.data.course_id}`}>
                  <p>
                    {notification.data.description}{" "}
                    {notification.data.course_name}
                  </p>
                </NavLink>
              ) : (
                <p>{notification.data.description}</p>
              )}
              {notification.data.type === "feedback" && (
                <span>
                  <audio controls>
                    <source src={notification.data.url} type="audio/wav" />
                  </audio>
                </span>
              )}
              <span>
                <h5>
                  {moment(notification.created_at).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )}
                </h5>
              </span>
            </span>
          </th>
        </tr>
      );
    });
  };

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
          <tbody>{renderNotifyCation()}</tbody>
        </table>
      </div>
    </>
  );
};
export default UserNotify;
