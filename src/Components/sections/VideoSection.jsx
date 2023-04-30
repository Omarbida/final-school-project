import { Box, Button, Container } from "@mui/material";
import VideoPlayer from "../VideoPlayer";

function VideoSection() {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        gap: 2,
        p: "0!important",
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
  );
}
export default VideoSection;
