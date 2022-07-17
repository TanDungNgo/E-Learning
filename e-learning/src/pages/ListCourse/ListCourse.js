import React from 'react'
import CourseCard from '../../components/MultipleItems/CourseCard'
import './ListCourse.css'

const ListCourse = () => {
  return (
    <>
<div
class="mb-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg"
>
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
</svg>
Enrolled Course
</div>
<div class="grid grid-cols-3 gap-4 background-list-courses p-5 rounded-lg drop-shadow">
    <CourseCard course/>
    <CourseCard course/>

    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>
    <CourseCard course/>

</div>
    </>
  )
}

export default ListCourse