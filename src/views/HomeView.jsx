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
  InputBase,
} from "@mui/material";
import VideoPlayer from "../Components/VideoPlayer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useScreenWidth from "../kooks/useScreenwith";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import axios from "axios";
import useLike from "../kooks/useLike";
import useComment from "../kooks/useComment";
import Comment from "../Components/Comment";
import CreateComment from "../Components/CreateComment";
import VideoHeader from "../Components/videoPaper/videoHeader";
import UploadVideoForm from "../Components/videoPaper/UploadVideoForm";

function HomeView() {
  const { is750 } = useScreenWidth();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/video";
    axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        setVideos(res?.data?.data?.videos);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <Header maxWidth={"xl"} />
      <Container
        sx={{
          p: "0!important",
        }}
        maxWidth={"xl"}
      >
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
              <UploadVideoForm />
              {videos?.map((video, i) => {
                return <VideoPaper key={video.id} video={video} />;
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
      </Container>
    </>
  );
}

export default HomeView;

function MyIconButton({ children, value, onClick }) {
  const { is375 } = useScreenWidth();
  return (
    <Box
      display={"flex"}
      flexDirection={is375 ? "row" : "column"}
      alignItems={"center"}
      gap={0.5}
    >
      <IconButton
        onClick={onClick}
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

function VideoPaper({ video }) {
  const { is450 } = useScreenWidth();
  const [userInfo, setUserInfo] = useState();
  const { isAuth, sessionToken } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  const [showComments, setShowComments] = useState(false);
  const { comments, isLoading, getComments, postComment, commentsCount } =
    useComment({
      video,
      sessionToken,
    });
  const { isLiked, like, unLike, likes } = useLike({
    video,
    sessionToken,
  });
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/user/" + video.user;
    axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        setUserInfo(res?.data?.data?.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleLike = () => {
    if (!isAuth) {
      enqueueSnackbar("Login to like videos", {
        variant: "error",
        preventDuplicate: true,
      });
    }
    if (isLiked) {
      unLike();
    } else {
      like();
    }
  };
  const handleShowComments = () => {
    if (!showComments) {
      getComments();
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  };
  const handlePostComment = (comment) => {
    if (!comment) {
      enqueueSnackbar("you can't post an empty comment", {
        variant: "error",
        preventDuplicate: true,
      });
    } else {
      postComment(comment);
    }
  };
  return (
    <Paper
      sx={{
        pb: 2,
        border: "1px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "8px",
      }}
    >
      <VideoHeader userInfo={userInfo} />
      <VideoPlayer video={video.videoURL} />
      <Grid mt={1} container pl={1} pr={1}>
        <Grid
          item
          container
          xs={12}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography flexGrow={"1"} variant="body1" pl={1}>
            {video.views ? video.views : "0"} views
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
            <MyIconButton value={likes || "0"} onClick={handleLike}>
              {!isLiked ? (
                <FavoriteBorderIcon fontSize="small" />
              ) : (
                <FavoriteIcon fontSize="small" color="primary" />
              )}
            </MyIconButton>
            <MyIconButton
              value={commentsCount || "0"}
              onClick={handleShowComments}
            >
              <InsertCommentIcon fontSize="small" />
            </MyIconButton>
            <MyIconButton value={video.shares ? video.shares : "0"}>
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
            {video?.title ? video?.title : "error loading name"}
          </Typography>
        </Grid>
        <Grid item container xs={12} gap={1}>
          {video?.tags?.map((tag, i) => {
            return <Chip key={i + tag} variant="outlined" label={tag} />;
          })}
        </Grid>
        <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />

        <Container
          maxWidth={"md"}
          sx={{
            p: "0!important",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <CreateComment handlePostComment={handlePostComment} />
          {showComments &&
            !isLoading &&
            comments.map((comment, i) => {
              return <Comment key={comment.id} comment={comment} />;
            })}

          <Button
            variant="text"
            onClick={() => {
              handleShowComments();
            }}
          >
            {showComments ? "show less" : "show more"}
          </Button>
          {showComments && comments.length == 0 && (
            <Typography>No comments </Typography>
          )}
        </Container>
      </Grid>
    </Paper>
  );
}
