import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";

import {initializeApp} from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL, connectStorageEmulator } from "firebase/storage";

import {default as storage} from "../firebaseConfig";

import { ReactDOM } from "react";


const RecordView = (props) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 500);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
    onStop: (blobUrl, blob) => {
      const filename = `${new Date().getTime()}.wav`;
      const uploadFile = document.createElement('button');
      uploadFile.innerHTML = 'Upload';
      uploadFile.addEventListener('click', () => {
        const storageRef = ref(storage, 'audio/' + filename);
        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, blob).then((snapshot) => 
        { 
          console.log('Uploaded a blob or file!');
          getDownloadURL(storageRef).then((url) => {
            console.log(url);
          });
        });
      }
      );
      document.body.appendChild(uploadFile);

      const audio = document.createElement('audio');
      audio.src = blobUrl;
      audio.controls = true;
      document.body.appendChild(audio);

    }
  });

  return (
    <div className="absolute">
      <p>{status}</p>
      <button onClick={startRecording} className="text-red-500 ">
        Start Recording
      </button>
      <button onClick={stopRecording} className="text-green-500">
        Stop Recording
      </button>
    </div>
  );
};
export default RecordView;