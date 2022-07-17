import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import AudioComponent from "../../components/AudioPlayer/AudioPlayer";
import {
  getAllLessonsAction,
  getLessonByIdAction,
  getOneLessonByIdAction,
} from "../../redux/actions/LessonActions";
import { getAllRecordsByLessonIdAction } from "../../redux/actions/RecordActions";
import '../Lesson/LessonDetailUser.css'
import LessonSlider from "../Courses/LessonSlider";
import VideoPlayerUser from "../../components/VideoPlayer/VideoPlayerUser";

export const DemoLessonDetailUser = (props) => {

  const fakeLesson = {

  }

  const demoLesson = {
    top: "-6rem",
    left: "-7rem",
}
  return (
    <>
<div className="background-lesson border-2 border-gray-200 rounded-2xl scale-75 absolute top-0 left-0 z-50" style={demoLesson}>
        <div className="py-6 px-12">
<nav class="bg-white	 drop-shadow-lg flex px-5 pt-5 text-gray-700 border border-gray-200 rounded-lg" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-3">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          {props.courseData.name}
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          {props.lessonData.name}
        </span>
      </div>
    </li>
  </ol>
</nav>
<div className="mt-4">
   <VideoPlayerUser lesson={fakeLesson} fixedBanner={props.courseData.banner} fixedUrl={props.lessonData.url}/>
</div>
      <button
        class="mt-4 text-base inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded bg-white text-gray-700 border drop-shadow-lg"
      >
        Description
      </button>
      <div id="collapseTwo" class="bg-white rounded-lg border border-2 border-gray-300 accordion-collapse collapse show">
        <div class="accordion-body py-4 px-5">
            {props.lessonData.description}
        </div>
      </div>
</div>
</div>

    </>
  );
};
