import {
  Box,
  Button,
  Divider,
  Grid,
  Grow,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import GifTwoToneIcon from "@mui/icons-material/GifTwoTone";
import { useState } from "react";
import useComment from "../kooks/useComment";
function CreateComment({ handlePostComment }) {
  const [comment, setComment] = useState("");

  return (
    <>
      <Grid
        container
        sx={{
          border: "1px solid grey",
          p: 1,
        }}
        component={Paper}
      >
        <Grid item container xs={12}>
          <TextField
            label={"Add comment"}
            elevation={2}
            component={Paper}
            multiline={true}
            padding={1}
            fullWidth
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </Grid>

        <Grid item container xs={12} justifyContent={"end"}>
          {/* <IconButton color="primary">
            <GifTwoToneIcon sx={{ scale: "1.5" }} fontSize={"small"} />
          </IconButton>
          <IconButton color="primary">
            <SentimentSatisfiedAltRoundedIcon fontSize={"small"} />
          </IconButton> */}
          <IconButton
            onClick={() => {
              handlePostComment(comment);
              setComment("");
            }}
            color="primary"
          >
            <SendRoundedIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}
export default CreateComment;
