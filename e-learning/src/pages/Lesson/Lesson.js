import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export const Lesson = () => {
  const { listAudio } = useSelector((state) => state.LessonReducer);
  useEffect(() => {}, [listAudio]);
  let listAudioTemp = listAudio;

  const renderAudio = () => {
    return listAudioTemp.map((item, index) => {
      let testAudioRecord = URL.createObjectURL(item);
      console.log(testAudioRecord)
      return (
        <div>
          <audio
          src={testAudioRecord}
          controls
          className="inline-block"
          key={index}
        />
        <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95">
          Send to teacher
        </button>
        </div>
      );
    });
  };
  return (
    <div className="grid grid-cols-3 gap-3 container mt-40">
      <div className="col-span-2">
        <VideoPlayer />
      </div>
      <div className="col-span-1 bg-green-400">{renderAudio()}</div>
    </div>
  );
};
