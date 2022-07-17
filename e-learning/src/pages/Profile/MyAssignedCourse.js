import React from 'react'
import CourseCard from '../../components/MultipleItems/CourseCard'
import TabBar from '../../components/TabBar/TabBar'

const numbers = [1,2,3,4,5,6,7]

const listCourses = numbers.map((number)=>{
    return <CourseCard key={number.toString()} course=""/>
})

const MyAssignedCourse = () => {
  return (
    <>
    {/* <div className="flex items-left justify-left py-8 pl-24">
        <span className="text-xl font-semibold">My assiged course</span>
        <div className="each-line"></div>
    </div> */}
    <TabBar/>
    <div class="mt-8 grid overflow-hidden grid-cols-3 grid-rows-none gap-5">
        {listCourses}
    </div>
    </>
  )
}

export default MyAssignedCourse