import { Box, Button, Container, Typography } from "@mui/material";
import VideoPlayer from "../VideoPlayer";
import { useEffect, useRef } from "react";

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
        }deg ,hsla(0, 0%, 7%, 0.5), #121212)`,
        backdropFilter: "blur(5px)",
      }}
    ></Box>
  );
}
//  <Box
//    width={"15%"}
//    sx={{
//      overflow: "hidden",
//      position: "relative",
//      cursor: "pointer",
//      ":hover": {
//        img: {
//          filter: "none",
//          scale: "1.03",
//        },
//        div: {
//          background:
//            "linear-gradient(90deg ,hsla(0, 0%, 7%, 0.5), hsla(0, 0%, 7%, 0.98))",
//        },
//      },
//    }}
//  >
//    <img className="img" src="poppy.jpg" height={"100%"} />
//    <Overlay direction={90} />
//  </Box>;
