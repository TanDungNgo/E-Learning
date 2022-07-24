import React from 'react'

const TimePicker = () => {
  const seconds = [];
  for (var i = 0; i <= 60; i++) {
    seconds.push(<option className='p-2' key={i} value={i}>{i}</option>);
  }
  const minutes = [];
  for (var i = 0; i <= 30; i++) {
    minutes.push(<option className='p-2' key={i} value={i}>{i}</option>);
  }
  

  const timePickers = [];

  // Minh se dua vao push de day them input vao
  timePickers.push(
<div class="mt-2 p-3 w-full bg-white rounded-lg border-2 border-orange-400">
  <div class="flex">
    {/* <label for="minutes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">minute</label> */}
    <select id='minutes' name="minutes" class="overflow-hidden pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer">
      {minutes}
    </select>
    <span class="text-xl mx-2"> : </span>
    <select name="seconds" class="pl-2 block w-full text-sm text-gray-500 bg-orange-100 border-0 border-b-2 border-orange-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-orange-200 peer">
      {seconds}
    </select>
  </div>
</div>
  )
  return (
    <>
      {timePickers}
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-fit">
  Add
</button>
    </>
  )
}

export default TimePicker