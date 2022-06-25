import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import { useReactMediaRecorder } from "react-media-recorder";
import "./VideoPlayer.css";
import { useDispatch } from "react-redux";
import { setAudioActions } from "../../redux/actions/LessonActions";
const arrTimePause = [
  {
    minute: 0,
    seconds: 20,
  },
  {
    minute: 0,
    seconds: 40,
  },
  {
    minute: 0,
    seconds: 55,
  },
  {
    minute: 1,
    seconds: 15,
  },
];
let stt = 0;
const username = "nguduyvinh";
const lessonNumber = "1";
const courseName = "test";
const VideoPlayer = () => {
  const videoElement = useRef(null);

  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [displayHidden, setDisplayHidden] = useState("hidden");
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await videoElement.current.currentTime;

      // calculations
      let elapsed_ms = Math.floor(elapsed_sec * 1000);
      let ms = elapsed_ms % 1000;
      let min = Math.floor(elapsed_ms / 60000);
      let seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      arrTimePause.forEach((item) => {
        if (min === item.minute && seconds === item.seconds && ms < 100) {
          videoElement.current.pause();
          setDisplayHidden("");
          setIsStop(false);
          arrTimePause.shift();
          stt++;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder(
    {
      video: false,
      audio: true,
      blobPropertyBag: {
        type: "audio/wav",
      },
    }
  );

  const stopTimer = () => {
    setIsStart(false);
    stopRecording();

    setDisable(!disable);
  };

  const handleSave = async () => {
    let fileName = username.concat(
      "_",
      courseName,
      "_",
      lessonNumber,
      "_",
      stt
    );
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const audioFile = new File([audioBlob], `${fileName}.wav`, {
      type: "audio/wav",
    });

    // const formData = new FormData(); // preparing to send to the server

    // formData.append('file', audioFile);  // preparing to send to the server

    dispatch(setAudioActions(audioFile));
    // onSaveAudio(formData); // sending to the server
  };

  return (
    <div className="relative">
      <div className=""></div>
      <video
        controls
        ref={videoElement}
        poster="https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg"
        className="w-full"
      >
        <source
          src="http://minhbh194619.tk/WIN_20220529_00_16_43_Pro.mp4?fbclid=IwAR1gZRcF5893B6nRTAwhUuxncrgWjtGYxFc9OJWAOL1ftHDKrUJBJaKmX-8"
          type="video/mp4"
        />
      </video>
      <div className={`video-audio__overlay  ${displayHidden} `}></div>
      <div className={`audio-record  ${displayHidden} text-center`}>
        {!isStop ? (
          <>
            <p className="m-2 text-white font-bold"> Nhấn để thu âm</p>
            <button
              onClick={() => {
                if (!isStart) {
                  startRecording();
                }
                setIsStart(!isStart);
                setDisable(!disable);
              }}
              disabled={disable}
            >
              <i
                className="fa fa-microphone  text-white "
                style={{ fontSize: 40 }}
              ></i>
            </button>
            <div className="flex gap-1 justify-center mt-2">
              <button
                className="bg-red-700 shadow-md rounded-sm p-1 text-white text-lg "
                style={{ width: 100 }}
                disabled={!disable}
                onClick={() => {
                  stopRecording();
                  setIsStart(!isStart);
                  setDisable(!disable);
                  setIsStop(!isStop);
                }}
              >
                Stop
              </button>
              <button
                className="bg-white shadow-md rounded-sm p-1 text-black text-lg "
                style={{ width: 100 }}
                disabled={!disable}
                onClick={stopTimer}
              >
                Clear
              </button>
            </div>
          </>
        ) : (
          <div>
            <audio src={mediaBlobUrl} controls className="inline-block" />

            <div className="mt-5">
              <button
                className="bg-blue-600 shadow-xl rounded-sm p-1 text-white text-lg  mr-2 "
                style={{ width: 100 }}
                onClick={() => {
                  setIsStop(false);
                  stopTimer();
                  setDisable(false);
                }}
              >
                Ghi lại?
              </button>
              <button
                className="bg-blue-600 shadow-xl rounded-sm p-1 text-white text-lg "
                style={{ width: 100 }}
                onClick={() => {
                  setIsStop(false);
                  setDisplayHidden("hidden");
                  handleSave();
                  videoElement.current.play();
                }}
              >
                Tiếp tục?
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
