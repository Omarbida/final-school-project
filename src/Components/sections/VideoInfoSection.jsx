import { Box, Button, Container, Tooltip, Typography } from "@mui/material";
import PoligonAvatar from "../../Components/PoligonAvatar";
import ReplyIcon from "@mui/icons-material/Reply";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
function VideoInfoSection() {
  return (
    <Container
      sx={{
        padding: "0!important",
      }}
      maxWidth="md"
    >
      <Box>
        <Typography variant="h5">
          Lorem ipsum dolor, sit amet consectetur{" "}
        </Typography>
        <Typography variant="p" color={"primary"}>
          #Lorem #ipsum #dolor
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <PoligonAvatar size={"60px"} rank={2} />
            <Box>
              <Typography fontWeight={"800"} variant="h6">
                Omar bida
              </Typography>
              <Typography>154,6k</Typography>
            </Box>
            <Button
              sx={{
                height: "fit-content",
              }}
              variant="contained"
              color={"secondary"}
            >
              Follow
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Tooltip placement={"top"} title={"Well Played"}>
              <Button variant="contained" color="secondary">
                <MilitaryTechIcon fontSize={"large"} />
              </Button>
            </Tooltip>
            <Tooltip placement={"top"} title="Share">
              <Button variant="contained" color="secondary">
                <ReplyIcon fontSize={"large"} />
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default VideoInfoSection;
