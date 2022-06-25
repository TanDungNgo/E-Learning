import { useState, useEffect } from "react";

const useVideoPlayer = (videoElement) => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [muted, setMuted] = useState(false);

  // // and then...
  // setPlaying(true);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const toggleFullscreen = () => {
    if (videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  };

  useEffect(() => {
    playing ? videoElement.current.play() : videoElement.current.pause();
  }, [playing, videoElement]);

  const handleOnTimeUpdate = () => {
    const progressTmp =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setProgress(progressTmp);
  };

  const handleVideoProgress = (event) => {
    const manualChange = Number(event.target.value);
    videoElement.current.currentTime =
      (videoElement.current.duration / 100) * manualChange;
    setProgress(manualChange);
  };

  const handleVideoSpeed = (event) => {
    const speedTmp = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setSpeed(speedTmp);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    muted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [muted, videoElement]);

  return {
    progress,
    muted,
    playing,
    speed,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
    toggleFullscreen,
  };
};

export default useVideoPlayer;
