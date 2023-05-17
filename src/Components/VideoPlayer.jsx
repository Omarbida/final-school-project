import ReactPlayer from "react-player";
import ControlIcons from "./ControlIcons";
import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import zIndex from "@mui/material/styles/zIndex";
function VideoPlayer({ video }) {
  const [playerstate, setPlayerState] = useState({
    playing: false,
    mute: false,
    played: 0,
  });
  const { playing, mute, played } = playerstate;
  const playerRef = useRef(null);
  const BoxRef = useRef(null);
  const handlePlayAndPause = () => {
    setPlayerState({
      ...playerstate,
      playing: !playerstate.playing,
    });
  };
  const handleMute = (event) => {
    event.stopPropagation();
    setPlayerState({
      ...playerstate,
      mute: !playerstate.mute,
    });
  };
  const handlePlayerProgress = (state) => {
    setPlayerState({ ...playerstate, ...state });
  };
  const currentPlayerTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : "00:00";
  const videoDuration = playerRef.current
    ? playerRef.current.getDuration()
    : "00:00";
  const format = (seconds) => {
    if (isNaN(seconds)) {
      return "00:00";
    }

    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");

    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    } else {
      return `${mm}:${ss}`;
    }
  };
  const [isFullScreen, setIsFullScreen] = useState(false);
  const rmainingTinme = format(videoDuration - currentPlayerTime);
  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (isFullScreen) {
      document.exitFullscreen?.();
      setIsFullScreen(false);
    } else {
      BoxRef?.current?.requestFullscreen?.();
      setIsFullScreen(true);
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1000,
      }}
      ref={BoxRef}
    >
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={video}
        playing={playing}
        muted={mute}
        ref={playerRef}
        onEnded={() =>
          setPlayerState({
            ...playerstate,
            playing: false,
          })
        }
        onProgress={handlePlayerProgress}
      ></ReactPlayer>
      <ControlIcons
        playandpause={handlePlayAndPause}
        playing={playing}
        handleMute={handleMute}
        mute={mute}
        played={played}
        rmainingTinme={rmainingTinme}
        toggleFullScreen={toggleFullScreen}
      />
    </Box>
  );
}
export default VideoPlayer;
