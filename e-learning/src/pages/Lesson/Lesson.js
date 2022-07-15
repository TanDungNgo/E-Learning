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
      return (
        <div>
          <audio
          src={testAudioRecord}
          controls
          className="inline-block"
          key={index}
        />
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
