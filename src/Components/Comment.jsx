import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
const Comment = ({ comment, userName, rank }) => {
  return (
    <Grid
      container
      sx={{
        border: "1px solid grey",
        p: 1,
      }}
      component={Paper}
      spacing={1}
    >
      <Grid item container xs={12}>
        <Grid item container xs={1} minWidth={"55px"}>
          <PoligonAvatar size={"45px"} rank={rank} />
        </Grid>
        <Grid item container alignItems={"center"} xs={10}>
          <Typography variant="h5" fontWeight={"800"}>
            {userName}
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
      <Grid item container xs={12}>
        <Typography
          elevation={2}
          component={Paper}
          padding={1}
          sx={{
            width: "100%",
          }}
        >
          {comment}
        </Typography>
      </Grid>

      <Grid item container xs={12} alignItems={"center"} justifyContent={"end"}>
        <IconButton color="primary">
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
        <IconButton color="primary">
          <ReplyRoundedIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default Comment;
