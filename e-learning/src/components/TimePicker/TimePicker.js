import React from "react";
<<<<<<< HEAD
=======
import { TimedataService } from "../../services/TimedataService";
>>>>>>> b4ecde28b204ee34d6012a447d69301dcce77a69

const TimePicker = (props) => {
  let {lessonId} = props
  const seconds = [];
<<<<<<< HEAD
  for (var i = 0; i <= 59; i++) {
=======
  for (var i = 0; i <= 60; i++) {
>>>>>>> b4ecde28b204ee34d6012a447d69301dcce77a69
    seconds.push(
      <option className="p-2" key={i} value={i}>
        {i}
      </option>
    );
  }
  const minutes = [];
  for (var i = 0; i <= 30; i++) {
    minutes.push(
      <option className="p-2" key={i} value={i}>
        {i}
      </option>
    );
  }
<<<<<<< HEAD
=======
  const savetimedata = async () => {
    let e = document.getElementById("minutes");
    let minute = e.options[e.selectedIndex].text;
    let e2 = document.getElementById("seconds");
    let second = e2.options[e2.selectedIndex].text;
    const data = new FormData();
    data.append("lesson_id", lessonId)
    data.append("minute", minute);
    data.append("second", second);
    await TimedataService.createTimedata(data);
    window.alert("Thêm timedata thành công");
  };
>>>>>>> b4ecde28b204ee34d6012a447d69301dcce77a69

  const timePickers = [];

  // Minh se dua vao push de day them input vao
  timePickers.push(
<<<<<<< HEAD
    <div className="mt-2 p-3 w-full bg-white rounded-lg border-2 border-orange-400">
      <div className="flex">
        <select
          id="minutes"
          name="minutes"
          className="overflow-hidden pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer"
        >
          {minutes}
        </select>
        <span className="text-xl mx-2"> : </span>
        <select
          name="seconds"
          className="pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer"
=======
    <div class="mt-2 p-3 w-full bg-white rounded-lg border-2 border-orange-400">
      <div class="flex">
        {/* <label for="minutes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">minute</label> */}
        <select
          id="minutes"
          name="minutes"
          class="overflow-hidden pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer"
        >
          {minutes}
        </select>
        <span class="text-xl mx-2"> : </span>
        <select
          id="seconds"
          name="seconds"
          class="pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer"
>>>>>>> b4ecde28b204ee34d6012a447d69301dcce77a69
        >
          {seconds}
        </select>
      </div>
    </div>
  );
  return (
    <>
      {timePickers}
<<<<<<< HEAD
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-sm w-fit my-2">
=======
      <button
        onClick={savetimedata}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-fit"
      >
>>>>>>> b4ecde28b204ee34d6012a447d69301dcce77a69
        Add
      </button>
    </>
  );
};

export default TimePicker;
