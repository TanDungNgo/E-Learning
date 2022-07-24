import { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";

// export default function AudioComponent(props) {
//   const { item } = props;
//   const musicTracks = [
//     {
//       name: "Memories",
//       src: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
//     },
//   ];

//   const [trackIndex, setTrackIndex] = useState(0);

//   return (
//     <div className="audio-player w-full">
//       <AudioPlayer
//         // style={{ width: "300px" }}
//         style={{ borderRadius: "1rem" }}
//         autoPlay={false}
//         layout="horizontal-reverse"
//         customAdditionalControls={[]}
//         src={item?.record_file}
//         customVolumeControls={[]}
//         onPlay={(e) => console.log("onPlay")}
//         showSkipControls={false}
//         showJumpControls={false}
//         // other props here
//       />
//     </div>
//   );
// }

export const AudioComponent = (props) => {
  const videoElement = useRef(null);
  const { record } = props;
  return (
    <div className="audio-player w-full">
      <AudioPlayer
        ref={videoElement}
        style={{ borderRadius: "1rem" }}
        autoPlay={false}
        layout="horizontal-reverse"
        customAdditionalControls={[]}
        src={record?.record_file}
        customVolumeControls={[]}
        showSkipControls={false}
        showJumpControls={false}
      />
    </div>
  );
};
