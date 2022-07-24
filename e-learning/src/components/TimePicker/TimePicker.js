import React from "react";

const TimePicker = () => {
  const seconds = [];
  for (var i = 0; i <= 59; i++) {
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

  const timePickers = [];

  // Minh se dua vao push de day them input vao
  timePickers.push(
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
        >
          {seconds}
        </select>
      </div>
    </div>
  );
  return (
    <>
      {timePickers}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-sm w-fit my-2">
        Add
      </button>
    </>
  );
};

export default TimePicker;
