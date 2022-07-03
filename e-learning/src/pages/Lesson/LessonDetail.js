import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

export const LessonDetail = (props) => {
  const [videoSrc, setVideoSrc] = useState("");
  const { listAudio } = useSelector((state) => state.LessonReducer);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let listAudioTemp = listAudio;

  const renderAudio = () => {
    return listAudioTemp.map((item, index) => {
      let testAudioRecord = URL.createObjectURL(item);

      console.log("testAudioRecord", testAudioRecord);
      return (
        <audio
          src={testAudioRecord}
          controls
          className="inline-block"
          key={index}
        />
      );
    });
  };
  const handleChangeUploadVideo = (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];

    //Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setVideoSrc(e.target.result);
    };
    // console.log();
  };

  return (
    <div className="grid grid-cols-3 gap-3 container mt-10">
      <div className="col-span-2">
        <VideoPlayer />
      </div>
      <div className="col-span-1 bg-green-400">{renderAudio()}</div>
    </div>
  );
};
