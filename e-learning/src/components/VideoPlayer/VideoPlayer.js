import React, { useEffect, useRef, useState } from "react";
import "./VideoPlayer.css";
import { useReactMediaRecorder } from "react-media-recorder";
import "./VideoPlayer.css";
import { useDispatch } from "react-redux";
import { setAudioActions } from "../../redux/actions/LessonActions";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

import { initializeApp } from "@firebase/app";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "@firebase/storage";

import swal from "sweetalert";
import axios from "axios";

const firebaseConfig = {
  storageBucket: "fir-react-upload-bad49.appspot.com", // <- Your storage bucket {sẽ chính sửa thành bucket chung sau}
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const arrTimePause = [];
let stt = 0;
const username = "ngotandung";
const lessonNumber = "1";
const courseName = "Course1";
const VideoPlayer = (props) => {
  const [lesson_id, setLesson_id] = useState(lessonNumber);
  // console.log(lesson_id)
  const [lesson, setLesson] = useState([]);
  useEffect(async () => {
    let result = await fetch(`http://127.0.0.1:8000/api/timedata/${lesson_id}`);
    result = await result.json();
    if (result.status === 200) {
      setLesson(result.lesson);
      var time = [];
      console.log("arrTimePause", result.time);
      for (time in result.time) {
        const obj = {
          minute: result.time[time].minute,
          second: result.time[time].second,
        };
        arrTimePause.push(obj);
      }
    }
  }, []);

  // console.log("arrTimePause", arrTimePause);
  // console.log("link", lesson.video_link)

  const videoElement = useRef(null);

  const [isStart, setIsStart] = useState(false);
  const [isStop, setIsStop] = useState(false);
  const [displayHidden, setDisplayHidden] = useState("hidden");
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const [minute, setMinute] = useState("0");
  const [second, setSecond] = useState("0");

  useEffect(() => {
    const interval = setInterval(async () => {
      const elapsed_sec = await videoElement.current.currentTime;

      // calculations
      let elapsed_ms = Math.floor(elapsed_sec * 1000);
      let ms = elapsed_ms % 1000;
      let min = Math.floor(elapsed_ms / 60000);
      let seconds = Math.floor((elapsed_ms - min * 60000) / 1000);

      arrTimePause.forEach((item) => {
        if (min === item.minute && seconds === item.second && ms < 100) {
          setMinute(item.minute);
          setSecond(item.second);
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

    const storageRef = ref(storage, "audios/" + fileName + ".wav");
    uploadBytes(storageRef, audioBlob).then((snapshot) => {
      console.log("Uploaded Successfully");
      getDownloadURL(storageRef).then(async (url) => {
        // save url to database
        const data = new FormData();
        data.append("lesson_id", lesson_id); // lesson_id for call api
        data.append("url", url); // url_file_audio for call api
        data.append("minute", minute);
        data.append("second", second);
        const res = await axios.post(
          "http://localhost:8000/api/save-audio-record",
          data
        );
        if (res.status === 200) {
          console.log("Saved to database");
        }
      });
    });

    dispatch(setAudioActions(audioFile));
    // onSaveAudio(formData); // sending to the server
  };

  return (
    <div className="relative">
      <div className=""></div>
      <video
        controls
        ref={videoElement}
        src={lesson.video_link}
        type="video/mp4"
      >
      </video>
      <div className={`video-audio__overlay  ${displayHidden} `}></div>
      <div className={`audio-record  ${displayHidden} text-center`}>
        {!isStop ? (
          <>
            <p className="m-2 text-black font-bold"> Nhấn để thu âm</p>
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
                className="fa fa-microphone  text-black "
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
      <div className="items-center flex-shrink-0 grid grid-cols-2 gap-2">
        <Link
          to={`/addtimedata/${lesson_id}`}
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
        >
          Add timedata
        </Link>
        <Link
          to={`/edittimedata/${lesson_id}`}
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-500 ease-in-out hover:scale-95"
        >
          Edit timedata
        </Link>
      </div>
    </div>
  );
};

export default VideoPlayer;
