import React from "react";
import {
  FolderOpenOutlined,
  UserOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { USER_LOGIN } from "../../utils/settings/config";
import {NotifyService} from "../../services/NotifyService";
import { useEffect, useState } from "react";
const UserNotify = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(async() => {
        const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
        const userNotifications = await NotifyService.getUserNotifications(userLogin.id).then(function(response){
            setNotifications(response.notify);
            console.log(response.notify);
        })
    }
    , []);
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
                        {notifications.map((notification) => (
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
}
export default UserNotify;
