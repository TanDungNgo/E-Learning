import React from 'react'
import { NavLink } from 'react-router-dom'
import { BellFilled, SettingFilled, CreditCardFilled, EditFilled, ContactsTwoTone, VideoCameraAddOutlined } from "@ant-design/icons";

const SideBar = () => {
  return (
<aside className="w-64 pl-2 fixed" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-white rounded-2xl dark:bg-white drop-shadow">

        <ul class="space-y-2">
            <li>
                <NavLink
                    to="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg
                        class="flex-shrink-0 w-6 h-6 text-blue-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span class="font-semibold tracking-tighter text-blue-600 flex-1 ml-3 whitespace-nowrap">Enrolled Courses</span>
                    {/*
                    <span
                        class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                    */}
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-new/course"
                    class="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <VideoCameraAddOutlined className='text-xl mr-1.5' style={{color: '#F97316'}}/>
                    <span class="font-semibold tracking-tighter text-orange-600 flex-1 ml-3 whitespace-nowrap">Create Course</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#"
                    class="flex items-center p-2 text-base font-normal text-yellow-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BellFilled className='text-xl mr-1' style={{color: 'rgb(250 204 21)'}}/>
                    <span class="font-semibold tracking-tighter text-yellow-500 flex-1 ml-3 whitespace-nowrap">Notification</span>
                    <span
                        class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-yellow-600 bg-yellow-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <SettingFilled className='text-xl mr-1' style={{color: '#6b7280'}}/>
                    <span class="font-semibold tracking-tighter text-gray-800 flex-1 ml-3 whitespace-nowrap">Setting</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg
                        class="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 dark:text-red-400 group-hover:text-red-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clipRule="evenodd"></path>
                    </svg>
                    <span class="font-semibold tracking-tighter flex-1 ml-3 whitespace-nowrap text-red-500">Logout</span>
                </NavLink>
            </li>
        </ul>
    </div>
</aside>
  )
}

export default SideBar