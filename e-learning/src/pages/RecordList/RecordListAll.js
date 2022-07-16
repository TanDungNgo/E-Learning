import React from 'react'
import AudioComponent from '../../components/AudioPlayer/AudioPlayer'
import { FolderOpenOutlined, UserOutlined, DeleteOutlined } from "@ant-design/icons";

//this is for home (all)
const RecordListAll = () => {
  return (
    <>
<div class="overflow-x-auto relative shadow-md sm:rounded-lg mx-20">
    <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Course
                </th>
                <th scope="col" class="py-3 px-6">
                    Lesson
                </th>
                <th scope="col" class="w-20 py-3 px-6">
                    Time
                </th>
                <th scope="col" class="py-3 px-6">
                    User
                </th>
                <th scope="col" class="w-64 py-3 px-6">
                    Record File
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kaiwa Sieu Toc
                </th>
                <td class="truncate py-4 px-6">
                    Lesson 1: How to Ask Someone Out on a Date
                </td>
                <td class="truncate py-4 px-6">
                    0:20
                </td>
                <td class="py-4 px-6">
                    <div className='flex align-middle items-center'>
                        <div>
                            <img class="object-cover rounded-full w-8 h-8" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                        </div>
                        <div>
                            <span className='pl-2 text-sm font-semibold'>Johny Pham</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <AudioComponent />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kaiwa Sieu Toc
                </th>
                <td class="truncate py-4 px-6">
                    Lesson 1: How to Ask Someone Out on a Date
                </td>
                <td class="truncate py-4 px-6">
                    0:20
                </td>
                <td class="py-4 px-6">
                    <div className='flex align-middle items-center'>
                        <div>
                            <img class="object-cover rounded-full w-8 h-8" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                        </div>
                        <div>
                            <span className='pl-2 text-sm font-semibold'>Johny Pham</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <AudioComponent />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kaiwa Sieu Toc
                </th>
                <td class="truncate py-4 px-6">
                    Lesson 1: How to Ask Someone Out on a Date
                </td>
                <td class="truncate py-4 px-6">
                    0:20
                </td>
                <td class="py-4 px-6">
                    <div className='flex align-middle items-center'>
                        <div>
                            <img class="object-cover rounded-full w-8 h-8" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                        </div>
                        <div>
                            <span className='pl-2 text-sm font-semibold'>Johny Pham</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <AudioComponent />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kaiwa Sieu Toc
                </th>
                <td class="truncate py-4 px-6">
                    Lesson 1: How to Ask Someone Out on a Date
                </td>
                <td class="truncate py-4 px-6">
                    0:20
                </td>
                <td class="py-4 px-6">
                    <div className='flex align-middle items-center'>
                        <div>
                            <img class="object-cover rounded-full w-8 h-8" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                        </div>
                        <div>
                            <span className='pl-2 text-sm font-semibold'>Johny Pham</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <AudioComponent />
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="truncate py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Kaiwa Sieu Toc
                </th>
                <td class="truncate py-4 px-6">
                    Lesson 1: How to Ask Someone Out on a Date
                </td>
                <td class="truncate py-4 px-6">
                    0:20
                </td>
                <td class="py-4 px-6">
                    <div className='flex align-middle items-center'>
                        <div>
                            <img class="object-cover rounded-full w-8 h-8" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt=""/>
                        </div>
                        <div>
                            <span className='pl-2 text-sm font-semibold'>Johny Pham</span>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <AudioComponent />
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </>
  )
}

export default RecordListAll