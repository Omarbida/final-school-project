import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useCommentLike from "../kooks/useCommentLike";
import { useSnackbar } from "notistack";
const Comment = ({ comment }) => {
  const [userInfo, setUserInfo] = useState(null);
  const { isAuth, sessionToken } = useSelector((state) => state.auth);
  const { isLiked, likes, like, unLike } = useCommentLike({
    comment,
    sessionToken,
  });
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/auth/user/" + comment.user;
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
      enqueueSnackbar("Login to like comments", {
        variant: "error",
        preventDuplicate: true,
      });
      return;
    }
    if (isLiked) {
      unLike();
    } else {
      like();
    }
  };
  return (
    <Grid
      container
      sx={{
        p: 0.5,
      }}
      component={Paper}
      elevation={2}
    >
      <Grid item container xs={12} flexWrap={"nowrap"}>
        <Grid item container xs={1} minWidth={"40px"}>
          <PoligonAvatar size={"35px"} avatar={userInfo?.avatarImg || ""} />
        </Grid>
        <Grid item container alignItems={"center"} flexGrow={1}>
          <Typography fontWeight={"600"}>
            {userInfo?.name || ""} {userInfo?.lastName || ""}
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"end"}
          xs={1}
        >
          <IconButton>
            <MoreVertRoundedIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container xs={12} mt={0.3}>
        <Typography
          padding={1}
          component={Paper}
          sx={{
            width: "100%",
          }}
        >
          {comment.comment}
        </Typography>
      </Grid>

      <Grid item container xs={12} alignItems={"center"} justifyContent={"end"}>
        <Typography>{likes || "0"}</Typography>
        <IconButton onClick={handleLike}>
          {!isLiked ? (
            <FavoriteBorderIcon fontSize="small" />
          ) : (
            <FavoriteIcon fontSize="small" color="primary" />
          )}
        </IconButton>
        {/* <IconButton color="primary">
          <ReplyRoundedIcon fontSize="small" />
        </IconButton> */}
      </Grid>
    </Grid>
  );
};
export default Comment;
