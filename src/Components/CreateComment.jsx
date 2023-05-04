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
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import GifTwoToneIcon from "@mui/icons-material/GifTwoTone";
import { useState } from "react";
function CreateComment() {
  const [writing, setWriting] = useState(false);
  const [comment, setComment] = useState("");
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
      <Grid item container xs={1}>
        <PoligonAvatar size={"30px"} rank={3} />
      </Grid>
      <Grid item container xs={11}>
        <TextField
          label={"Add comment"}
          elevation={2}
          component={Paper}
          padding={1}
          fullWidth
          value={comment}
          onFocus={() => setWriting(true)}
          onBlur={() => setWriting(false)}
          onChange={(e) => {
            setComment();
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary">
                  <GifTwoToneIcon sx={{ scale: "1.5" }} fontSize={"small"} />
                </IconButton>
                <IconButton color="primary">
                  <SentimentSatisfiedAltRoundedIcon fontSize={"small"} />
                </IconButton>
                <IconButton color="primary">
                  <SendRoundedIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}
export default CreateComment;
