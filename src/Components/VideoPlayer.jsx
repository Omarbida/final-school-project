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
  const rmainingTinme = format(videoDuration - currentPlayerTime);

  return (
    <Box
      sx={{
        position: "relative",
      }}
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
      />
      <ControlIcons
        playandpause={handlePlayAndPause}
        playing={playing}
        handleMute={handleMute}
        mute={mute}
        played={played}
        rmainingTinme={rmainingTinme}
      />
    </Box>
  );
}
export default VideoPlayer;

function Overlay() {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        justifyContent: "center",
        zIndex: "10",
      }}
    >
      <RankButton rank={1} />
      <RankButton rank={2} />
      <RankButton rank={3} />
      <RankButton rank={4} />
      <RankButton rank={5} />
    </Box>
  );
}

function RankButton({ rank }) {
  return (
    <Button
      fullWidth
      variant="text"
      sx={{
        transition: "all 0.2s ease-in-out",
        paddingRight: "0",
        paddingLeft: "20px",
        ":hover": {
          background: "transparent",
          paddingRight: "20px",
          paddingLeft: "0",
        },
      }}
    >
      <img width={"100%"} src={`ranks/rank${rank}.png`} />
    </Button>
  );
}
