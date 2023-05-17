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
import useScreenWidth from "../../kooks/useScreenwith";
function VideoInfoSection({ video, userInfo }) {
  const { is650, is350 } = useScreenWidth();
  return (
    <Container
      sx={{
        padding: "0!important",
      }}
      maxWidth="md"
    >
      <Grid container>
        <Grid item container xs={is650 ? 7 : 12}>
          <Typography variant={is650 ? "h5" : "h6"}>{video?.title}</Typography>
        </Grid>
        {is650 ? (
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
                <Typography variant="body1">{video?.likesCount}</Typography>
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
            <Grid
              item
              container
              xs={3}
              pr={is350 ? 0 : 1}
              justifyContent={"center"}
            >
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
          {video?.tags.map((tag, i) => {
            return <Chip key={tag + i} variant="outlined" label={tag} />;
          })}
        </Grid>

        <Grid item container xs={12} alignItems={"center"} gap={3}>
          <PoligonAvatar size={"60px"} avatar={userInfo?.avatarImg} />
          <Box>
            <Typography fontWeight={"800"} variant="h6">
              {userInfo?.name} {userInfo?.lastName}
            </Typography>
            <Typography>
              {userInfo?.followsCount ? userInfo?.followsCount : "0"}
            </Typography>
          </Box>
          <Button variant="outlined">Follow</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default VideoInfoSection;
