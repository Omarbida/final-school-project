import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  Slider,
  styled,
  Typography,
  Grid,
  Slide,
  Zoom,
  Button,
} from "@mui/material";
import {
  PlayArrowSharp,
  VolumeUp,
  Fullscreen,
  VolumeOff,
  Pause,
} from "@mui/icons-material";
import useScreenWidth from "../kooks/useScreenwith";

export const ButtonIconsStyle = {
  filter: "drop-shadow(2px 2px 5px rgba(0, 255, 255, 0.5))",
};
const color = "#fff";

const textShadow = {
  textShadow: "0px 0px 2px black",
  color: "#fff",
};
const PrettoSlider = styled(Slider)({
  cursor: "default",
  height: "5px",
  borderRadius: "0",
  padding: "0",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
const ControlIcons = ({
  playandpause,
  playing,
  handleMute,
  mute,
  played,
  rmainingTinme,
  toggleFullScreen,
}) => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(true);
  const [mouseMoving, setMouseMoving] = useState(false);
  const { is350 } = useScreenWidth();
  const handleMouseMove = () => {
    setShow(true);
    setMouseMoving(true);
    setTimeout(() => setMouseMoving(false), 100);
  };

  useEffect(() => {
    let timer;
    if (mouseMoving) {
      setShow(true);
    } else {
      timer = setTimeout(() => setShow(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [mouseMoving, setShow]);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          zIndex: 1000,
          background: playing ? "transparent" : "rgba(0, 0, 0, 0.6)",
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
        onClick={playandpause}
        onMouseMove={handleMouseMove}
        ref={containerRef}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid
            item
            container
            paddingRight={2}
            xs={12}
            direction="row"
            justifyContent={"space-between"}
            sx={{
              overflow: "hidden",
            }}
          >
            <Slide
              timeout={100}
              direction="right"
              in={!playing || show}
              mountOnEnter
              container={containerRef.current}
            >
              <IconButton sx={ButtonIconsStyle} onClick={playandpause}>
                {playing ? (
                  <Pause fontSize={is350 ? "large" : "medium"} />
                ) : (
                  <PlayArrowSharp fontSize={is350 ? "large" : "medium"} />
                )}
              </IconButton>
            </Slide>
            <Slide
              timeout={100}
              direction="left"
              in={!playing || show}
              mountOnEnter
              container={containerRef.current}
            >
              <Box display={"flex"} alignItems={"center"}>
                <IconButton sx={ButtonIconsStyle} onClick={handleMute}>
                  {!!mute ? (
                    <VolumeOff
                      fontSize={is350 ? "medium" : "small"}
                      sx={{
                        color: color,
                      }}
                    />
                  ) : (
                    <VolumeUp
                      fontSize={is350 ? "medium" : "small"}
                      sx={{
                        color: color,
                      }}
                    />
                  )}
                </IconButton>
                <IconButton
                  sx={ButtonIconsStyle}
                  aria-label="play"
                  onClick={toggleFullScreen}
                >
                  <Fullscreen
                    fontSize={is350 ? "medium" : "small"}
                    sx={{
                      color: color,
                    }}
                  />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={textShadow}
                    fontSize={is350 ? "20px" : "15px"}
                    color={color}
                  >
                    {rmainingTinme}
                  </Typography>
                </Box>
              </Box>
            </Slide>
          </Grid>
          <Grid container item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              value={played * 100}
              defaultValue={20}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ControlIcons;
