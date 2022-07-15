import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css"

export default function AudioComponent(props) {
  const musicTracks = [
    {
      name: "Memories",
      src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
    }
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  return (
    <div className="audio-player w-full">
      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem" }}
        autoPlay={false}
        layout="horizontal-reverse"
        customAdditionalControls={[]}
        src={props.record ? props.record.record_file : 'https://firebasestorage.googleapis.com/v0/b/fir-react-upload-bad49.appspot.com/o/audio%2F1657856651324.wav?alt=media&token=7a08ca58-4e8b-4c52-aa38-d5b310cc081f'}
        customVolumeControls={[]}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={false}
        showJumpControls={false}
        // other props here
      />
    </div>
  );
}
