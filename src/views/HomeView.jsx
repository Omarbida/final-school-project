import Header from "../Components/Header";
import Card_Slider from "../Components/CardsSlider";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  IconButton,
  Box,
  Chip,
  Divider,
  TextField,
  useMediaQuery,
  Select,
  MenuItem,
} from "@mui/material";
import VideoPlayer from "../Components/VideoPlayer";
import PoligonAvatar from "../Components/PoligonAvatar";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useScreenWidth from "../kooks/useScreenwith";

const videos = [
  {
    video: "vids/kaylePintakill.webm",
    views: "145k",
    likes: 12,
    comments: 32,
    shares: 5,
    name: "Kayle Pintakill ARAM",
    tags: ["#league of legends", "#Pintakill", "#kayle", "#ARAM"],
    ranks: 87,
    rankRate: 3.4,
    user: {
      avatar: "bg1.jpg",
      rank: 4,
      name: "Omar bida",
    },
  },
  {
    video: "vids/kalistaPintakill.webm",
    views: "75k",
    likes: 26,
    comments: 10,
    shares: 7,
    name: "Kalista Pintakill ARAM",
    tags: ["#league of legends", "#Pintakill", "#kalista", "#ARAM"],
    ranks: 75,
    rankRate: 2.7,
    user: {
      avatar: "bg3.jpg",
      rank: 2,
      name: "zodiac madafac",
    },
  },
  {
    video: "vids/poppyOneshot.webm",
    views: "513k",
    likes: 325,
    comments: 211,
    shares: 112,
    name: "assassin Poppy",
    tags: ["#league of legends", "#oneShot", "#poppy", "#funny"],
    ranks: 197,
    rankRate: 4.3,
    user: {
      avatar: "bg4.jpg",
      rank: 3,
      name: "Clutch Lord",
    },
  },
  {
    video: "vids/poppyOutplayJ4.webm",
    views: "368k",
    likes: 147,
    comments: 97,
    shares: 67,
    name: "How to make J4 uninstall",
    tags: ["#league of legends", "#outplay", "#poppy"],
    ranks: 268,
    rankRate: 4.8,
    user: {
      avatar: "bg6.jpg",
      rank: 1,
      name: "Disrespect",
    },
  },
];

function HomeView() {
  const { is750 } = useScreenWidth();
  return (
    <>
      <Header maxWidth={"lg"} />
      <Grid container>
        <Grid item xs={is750 ? 7 : 12}>
          <Container
            maxWidth={"md"}
            sx={{
              pt: 2,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {videos?.map((video, i) => {
              return (
                <VideoPaper
                  key={video.name + video.likes + video.comments + i}
                  video={video.video}
                  views={video.views}
                  likes={video.likes}
                  comments={video.comments}
                  shares={video.shares}
                  name={video.name}
                  tags={video.tags}
                  ranks={video.ranks}
                  rankRate={video.rankRate}
                  user={video.user}
                />
              );
            })}
          </Container>
        </Grid>
        {is750 && (
          <Grid item xs={5} pr={1}>
            <Box
              sx={{
                position: "sticky",
                top: "80px",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Card_Slider />
              <Grid item xs={12} container>
                <Paper sx={{ width: "100%", padding: 1 }}></Paper>
              </Grid>
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default HomeView;

function MyIconButton({ children, value }) {
  const { is375 } = useScreenWidth();
  return (
    <Box
      display={"flex"}
      flexDirection={is375 ? "row" : "column"}
      alignItems={"center"}
      gap={0.5}
    >
      <IconButton
        sx={{
          border: "1px solid grey",
          ":hover": {
            border: "1px solid aqua",
            svg: {
              color: "aqua",
            },
          },
        }}
      >
        {children}
      </IconButton>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

function VideoPaper({
  video,
  views,
  likes,
  comments,
  shares,
  rankRate,
  name,
  tags,
  ranks,
  user,
}) {
  const { is750, is450, is350, is320 } = useScreenWidth();
  return (
    <Paper
      sx={{
        pb: 2,
        border: "1px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        p={is350 ? 1 : 0.4}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <PoligonAvatar
            size={is350 ? "50px" : "40px"}
            avatar={user.avatar}
            rank={user.rank}
          />

          <Typography
            variant="h6"
            fontWeight={600}
            fontSize={is350 ? "20px" : "15px"}
          >
            {user.name}
          </Typography>
          <Button variant="outlined" sx={{ fontSize: "10px" }}>
            Follow
          </Button>
        </Box>
        <IconButton
          sx={{
            justifySelf: "flex-end",
          }}
        >
          <MoreVertTwoToneIcon fontSize={is350 ? "meduim" : "small"} />
        </IconButton>
      </Grid>
      <VideoPlayer video={video} />
      <Grid mt={1} container pl={1} pr={1}>
        <Grid
          item
          container
          xs={12}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography flexGrow={"1"} variant="body1" pl={1}>
            {views ? views : "0"} views
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              alignItems: "center",
              flexGrow: "1",
              justifyContent: "space-between",
            }}
          >
            <MyIconButton value={likes ? likes : "0"}>
              <FavoriteBorderIcon fontSize="small" />
            </MyIconButton>
            <MyIconButton value={comments ? comments : "0"}>
              <InsertCommentIcon fontSize="small" />
            </MyIconButton>
            <MyIconButton value={shares ? shares : "0"}>
              <ShareIcon fontSize="small" />
            </MyIconButton>
            <MyIconButton value={"Copy link"}>
              <ContentCopyIcon fontSize="small" />
            </MyIconButton>
          </Box>
        </Grid>

        <Divider sx={{ width: "100%", mt: 2, mb: 1 }} />
        <Grid item container alignItems={"center"} xs={12}>
          <Typography
            padding={1}
            pl={1}
            variant="h6"
            fontSize={is450 ? "20px" : "15px"}
          >
            {name ? name : "error loading name"}
          </Typography>
        </Grid>
        <Grid item container xs={12} gap={1}>
          {tags?.map((tag, i) => {
            return <Chip key={i + tag} variant="outlined" label={tag} />;
          })}
        </Grid>
        <Divider sx={{ width: "100%", mt: 2, mb: 1 }} />
        <Grid item container xs={12}>
          <Grid item container xs={12} md={4} alignItems={"center"}>
            <Box
              component={"img"}
              src={`ranks/rank${2}badge.png`}
              width={is320 ? "50px" : "40px"}
            />
            <Typography flexGrow={"1"} variant="body1" pl={1}>
              {rankRate ? rankRate : "1"} / {ranks ? ranks : "0"}
            </Typography>
          </Grid>
          <Grid item container xs={12} md={8}>
            <Grid
              mt={1}
              item
              container
              xs={12}
              justifyContent={"space-between"}
            >
              <RankIconButton rank={5} />
              <RankIconButton rank={4} />
              <RankIconButton rank={3} />
              <RankIconButton rank={2} />
              <RankIconButton rank={1} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
function RankIconButton({ rank }) {
  const { is320 } = useScreenWidth();
  return (
    <Box
      sx={{
        cursor: "pointer",
        filter: "grayscale(100%)",
        transition: "all 0.2s ease",
        ":hover": {
          filter: "grayscale(0)",
          scale: "1.1",
        },
      }}
      component={"img"}
      src={`ranks/rank${rank}badge.png`}
      width={is320 ? "50px" : "40px"}
    />
  );
}
