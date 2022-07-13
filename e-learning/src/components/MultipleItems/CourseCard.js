import React from 'react'
import { NavLink } from 'react-router-dom'
import './CourseCard.css'
import { FolderOpenOutlined, UserOutlined } from "@ant-design/icons";

const CourseCard = (props) => {
  return (
    <>
        <NavLink to="/">
            <div class="max-w-sm bg-white rounded-lg border-8 border-white shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img class="banned-img rounded-t-lg" src={props.course.banner} alt="" />
                <div class="p-3">
                    
                    <h6 class="mb-2 text-base font-bold tracking-tight text-gray-800 dark:text-white">
                        {props.course.name}
                    </h6>
                    
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 description-text">
                        {props.course.description}
                    </p>

                    <div className='flex justify-between'>
                        <div className='flex'>
                            <FolderOpenOutlined className='folder-icon'/>
                            <span class="ml-2 text-gray-800 font-medium text-xs leading-none flex items-center">23 lessons</span>
                        </div>
                        <div className='flex'>
                            <span class="text-gray-800 font-medium text-sm leading-none flex items-center">23</span>
                            <span class="ml-1 text-gray-800 font-thin text-xs leading-none flex items-end">Students</span>
                        </div>
                    </div>

                    <hr className='mb-4 mt-2 line'/>

                    <div className='flex justify-between'>
                        <div class="flex items-center">
                            <img class="w-8 h-8 rounded-full mr-2" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                            <div class="text-sm">
                                <span class="text-gray-800 font-bold leading-none flex items-center">{props.course.teacher_name}</span>
                            </div>
                        </div>
                        <div className='text-lg flex item-center'>
                            <span class="text-pink-500 font-bold leading-none flex items-center">$500</span>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    </>
  )
}

export default CourseCard