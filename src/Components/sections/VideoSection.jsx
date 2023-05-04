import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import VideoPlayer from "../VideoPlayer";
import { useEffect, useRef } from "react";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { ButtonIconsStyle } from "../ControlIcons";

function VideoSection() {
  return (
    <>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          gap: 2,
          p: "0!important",
          position: "relative",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            p: "0!important",
          }}
        >
          <VideoPlayer video={"vids/katarinaPintakill.mp4"} />
        </Container>
      </Container>
    </>
  );
}
export default VideoSection;
function SideVideo({ children }) {
  return (
    <Box
      width={"15%"}
      sx={{
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        background: "url(bg3.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </Box>
  );
}
function Overlay({ direction }) {
  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        left: "0",
        top: "0",
        zIndex: "5",
        background: `linear-gradient(${
          direction ? direction : 0
        }deg ,transparent,hsla(0, 0%, 7%, 0.3), #121212)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{
          p: 1,
          ...ButtonIconsStyle,
        }}
      >
        {direction === 90 ? (
          <SkipNextIcon
            sx={{
              scale: "1.5",
            }}
            fontSize={"large"}
          />
        ) : (
          <SkipPreviousIcon
            sx={{
              scale: "1.5",
            }}
            fontSize={"large"}
          />
        )}
      </IconButton>
    </Box>
  );
}
