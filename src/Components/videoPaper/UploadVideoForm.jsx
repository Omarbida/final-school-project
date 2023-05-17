import {
  Box,
  Button,
  Grid,
  InputBase,
  Paper,
  Typography,
  Chip,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoPlayer from "../VideoPlayer";
import UploadFileIcon from "@mui/icons-material/UploadFile";
function UploadVideoForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [videoSelected, setVideoSelected] = useState("");
  const [videoSelectedURL, setVideoSelectedURL] = useState("");
  const [title, setTitle] = useState("");
  const [writingTagValue, setWritingTagValue] = useState("");
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState([false, false, false]);
  const { isAuth, sessionToken } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (videoSelected) setVideoSelectedURL(URL.createObjectURL(videoSelected));
  }, [videoSelected, setVideoSelectedURL]);
  const handlePost = async () => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + "/video";
    const formdata = new FormData();
    formdata.append("video", videoSelected);
    formdata.append("title", title);
    formdata.append("tags", tags);

    axios({
      method: "post",
      url: URL,
      headers: {
        "x-session-token": sessionToken.token,
      },
      data: formdata,
    })
      .then((res) => {
        setTags([]);
        setTitle("");
        setErrors([false, false, false]);
        setVideoSelected("");
        setVideoSelectedURL("");
        setWritingTagValue("");
        setIsFormOpen(false);
        console.log(res.data);
        enqueueSnackbar(res.data.message, {
          variant: "success",
          preventDuplicate: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Paper
      sx={{
        p: 1,
        border: "1px solid rgba(128, 128, 128, 0.5)",
        borderRadius: "8px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography variant="body1">Post your out Play</Typography>
        <Button
          variant="outlined"
          onClick={() => {
            if (!isFormOpen && !isAuth) {
              enqueueSnackbar("Login to Post videos", {
                variant: "error",
                preventDuplicate: true,
              });
              return;
            }
            if (isFormOpen) {
              setErrors([false, false, false]);
              setTags([]);
              setTitle("");
              setVideoSelected("");
              setVideoSelectedURL("");
              setWritingTagValue("");
              setIsFormOpen(false);
            } else {
              setIsFormOpen(true);
            }
          }}
        >
          {isFormOpen ? "Cancel" : "Start"}
        </Button>
      </Box>

      {isFormOpen && (
        <Paper
          sx={{
            width: "100%",
            mt: 1,
            p: 1,
          }}
          elevation={3}
          component={"form"}
        >
          {videoSelectedURL && <VideoPlayer video={videoSelectedURL} />}
          <InputBase
            fullWidth
            placeholder="Outplay title"
            required
            value={title}
            sx={{
              mt: 1,
              mb: 1,
              p: "4px 16px",
              borderRadius: "32px",
              border: errors[0] ? "1px solid red" : "1px solid grey",
            }}
            onChange={(e) => {
              setTitle(e.target.value);
              const tempErrors = [...errors];
              tempErrors[0] = false;
              setErrors(tempErrors);
            }}
          />
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Grid item xs={5} md={3}>
              <Button fullWidth variant="outlined" component="label">
                <UploadFileIcon />
                <input
                  hidden
                  accept="video/*"
                  multiple
                  type="file"
                  onChange={(e) => {
                    setVideoSelected(e.target.files[0]);
                    const tempErrors = [...errors];
                    tempErrors[1] = false;
                    setErrors(tempErrors);
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={7} md={9}>
              <InputBase
                fullWidth
                required
                value={
                  videoSelected ? videoSelected.name : "no video selected..."
                }
                sx={{
                  mt: 1,
                  mb: 1,
                  p: "4px 16px",
                  borderRadius: "32px",
                  border: errors[1] ? "1px solid red" : "1px solid grey",
                }}
              />
            </Grid>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Grid item xs={5} md={3}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  if (writingTagValue) {
                    if (writingTagValue[0] === "#") {
                      setTags([...tags, writingTagValue.trim()]);
                      setWritingTagValue("");
                    } else {
                      setTags([...tags, `#${writingTagValue.trim()}`]);
                      setWritingTagValue("");
                    }
                  }
                }}
              >
                Add tag
              </Button>
            </Grid>
            <Grid item xs={7} md={9}>
              <InputBase
                fullWidth
                placeholder={
                  errors[2] ? "At least on tag required" : "Enter a tag..."
                }
                required
                value={writingTagValue}
                sx={{
                  mt: 1,
                  mb: 1,
                  p: "4px 16px",
                  borderRadius: "32px",
                  border: errors[2] ? "1px solid red" : "1px solid grey",
                }}
                onChange={(e) => {
                  setWritingTagValue(e.target.value);
                  const tempErrors = [...errors];
                  tempErrors[2] = false;
                  setErrors(tempErrors);
                }}
              />
            </Grid>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"}>
            {tags.map((tag, i) => {
              return <Chip key={i + tag} variant="outlined" label={tag} />;
            })}
          </Box>
          <Button
            sx={{
              mt: 1,
            }}
            variant="contained"
            fullWidth
            onClick={() => {
              const tempErrors = [...errors];
              if (!title) {
                tempErrors[0] = true;
              }
              if (!videoSelected) {
                tempErrors[1] = true;
              }
              if (tags.length === 0) {
                tempErrors[2] = true;
              }
              setErrors(tempErrors);
              if (!tempErrors[0] && !tempErrors[1] && !tempErrors[2]) {
                handlePost();
              }
            }}
          >
            Post
          </Button>
        </Paper>
      )}
    </Paper>
  );
}
export default UploadVideoForm;
