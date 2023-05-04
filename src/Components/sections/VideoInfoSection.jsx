import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PoligonAvatar from "../../Components/PoligonAvatar";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function VideoInfoSection() {
  const isSmall = useMediaQuery("(min-width:650px)");
  return (
    <Container
      sx={{
        padding: "0!important",
      }}
      maxWidth="md"
    >
      <Grid container>
        <Grid item container xs={isSmall ? 7 : 12}>
          <Typography variant={isSmall ? "h5" : "h6"}>
            Lorem ipsum dolor, sit amet consectetur{" "}
          </Typography>
        </Grid>
        {isSmall ? (
          <Grid item container xs={5} alignItems={"center"}>
            <Grid item container xs={4} justifyContent={"center"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                border={"1px solid aqua"}
                borderRadius={"32px"}
                gap={1}
                p={0.6}
                pl={1}
              >
                <Typography variant="body1">15.5K</Typography>
                <Divider orientation="vertical" flexItem />
                <Button
                  sx={{
                    p: "0",
                    pr: "3px",
                    minWidth: "fit-content",
                    ":hover": {
                      background: "none",
                    },
                  }}
                  disableFocusRipple
                  disableRipple
                >
                  <FavoriteBorderIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item container xs={4} justifyContent={"center"}>
              <Tooltip placement={"top"} title="Share">
                <Button variant="outlined">
                  <ShareIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={4} justifyContent={"center"}>
              <Tooltip placement={"top"} title="Coppy link">
                <Button variant="outlined">
                  <LinkIcon />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        ) : (
          <Grid item container xs={12} alignItems={"center"}>
            <Grid item container xs={6}>
              <Box
                display={"flex"}
                alignItems={"center"}
                border={"1px solid aqua"}
                borderRadius={"32px"}
                gap={1}
                p={0.6}
                pl={1}
              >
                <Typography variant="body1">15.5K</Typography>
                <Divider orientation="vertical" flexItem />
                <Button
                  sx={{
                    p: "0",
                    pr: "3px",
                    minWidth: "fit-content",
                    ":hover": {
                      background: "none",
                    },
                  }}
                  disableFocusRipple
                  disableRipple
                >
                  <FavoriteBorderIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item container xs={3} justifyContent={"center"}>
              <Tooltip placement={"top"} title="Share">
                <Button variant="outlined">
                  <ShareIcon fontSize="small" />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={3} justifyContent={"end"}>
              <Tooltip placement={"top"} title="Coppy link">
                <Button variant="outlined">
                  <LinkIcon fontSize="small" />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        )}
        <Grid
          item
          container
          xs={12}
          sx={{
            pt: 1,
            pb: 1,
            gap: 1,
          }}
        >
          <Chip variant="outlined" label={"league of legends"} />
          <Chip variant="outlined" label={"Pintakill"} />
          <Chip variant="outlined" label={"Katarina"} />
        </Grid>

        <Grid item container xs={12} alignItems={"center"} gap={3}>
          <PoligonAvatar size={"60px"} rank={2} />
          <Box>
            <Typography fontWeight={"800"} variant="h6">
              Omar bida
            </Typography>
            <Typography>154,6k</Typography>
          </Box>
          <Button variant="outlined">Follow</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default VideoInfoSection;
