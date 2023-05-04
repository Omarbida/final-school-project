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
} from "@mui/icons-material";

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
}) => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(true);
  const [mouseMoving, setMouseMoving] = useState(false);

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
          justifyContent: "space-between",
          zIndex: 2,
          background: playing ? "transparent" : "rgba(0, 0, 0, 0.6)",
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
        onClick={playandpause}
        onMouseMove={handleMouseMove}
      >
        {/*topsextion*/}
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="start"
          sx={{ padding: 2 }}
          ref={containerRef}
          overflow={"hidden"}
        >
          <Grid item>
            <Slide
              timeout={100}
              direction="right"
              in={!playing}
              mountOnEnter
              container={containerRef.current}
            >
              <Typography sx={{ ...textShadow }} variant="h6" color={color}>
                Katarina Pintakill Howlingabys
              </Typography>
            </Slide>
          </Grid>
        </Grid>
        {/*midle section*/}
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Zoom
            timeout={150}
            in={!playing}
            mountOnEnter
            container={containerRef.current}
          >
            <IconButton
              sx={{ ...ButtonIconsStyle }}
              aria-label="play"
              onClick={playandpause}
            >
              <PlayArrowSharp
                fontSize="large"
                sx={{
                  color: color,
                }}
              />
            </IconButton>
          </Zoom>
        </Grid>
        {/* Bottom Section */}
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
            justifyContent={"flex-end"}
            sx={{
              overflow: "hidden",
            }}
          >
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
                      fontSize="medium"
                      sx={{
                        color: color,
                      }}
                    />
                  ) : (
                    <VolumeUp
                      fontSize="medium"
                      sx={{
                        color: color,
                      }}
                    />
                  )}
                </IconButton>
                <IconButton sx={ButtonIconsStyle} aria-label="play">
                  <Fullscreen
                    fontSize="medium"
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
                  {" "}
                  <Typography variant="h6" sx={textShadow} color={color}>
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
