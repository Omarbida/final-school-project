import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import Discription from "../Components/Discription";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import { useEffect, useState } from "react";
import useScreenWidth from "../kooks/useScreenwith";
import { useDispatch, useSelector } from "react-redux";
import {
  authSignup,
  updateAvatarImg,
  updateCoverImg,
} from "../redux/slices/authSlice";
import { useSnackbar } from "notistack";
import PoligonAvatar from "../Components/PoligonAvatar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (password === confPassword) {
      setError(false);
    } else {
      setError(true);
    }
  }, [password, confPassword, setError]);
  const navigate = useNavigate();
  const { is450 } = useScreenWidth();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = () => {
    if (!error) {
      dispatch(
        authSignup({ name, lastName, email, password, enqueueSnackbar })
      );
    }
  };
  const { isAuthLoading, isAuth, isSet, user, sessionToken } = useSelector(
    (state) => state.auth
  );
  const steps = ["Select an avatar", "Select a cover image"];
  const [avatarImg, setAvatarImg] = useState();
  const [avtrImgURL, setAvtrImgURL] = useState();
  const [coverImg, setCoverImg] = useState();
  const [coverImgURL, setCoverImgURL] = useState();
  useEffect(() => {
    if (avatarImg) setAvtrImgURL(URL.createObjectURL(avatarImg));
  }, [avatarImg, setAvtrImgURL]);
  useEffect(() => {
    if (coverImg) setCoverImgURL(URL.createObjectURL(coverImg));
  }, [coverImg, setCoverImgURL]);
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Container
      sx={{
        pt: 5,
      }}
      maxWidth="sm"
    >
      <Discription />
      {!(isAuth && !isSet) && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
            component={"form"}
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: is450 ? "nowrap" : "wrap",
              }}
            >
              <TextField
                fullWidth
                label={"Name"}
                variant="filled"
                required
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                fullWidth
                label={"Last Name"}
                variant="filled"
                required
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Box>
            <TextField
              fullWidth
              label={"Email"}
              variant="filled"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label={"Password"}
              variant="filled"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              fullWidth
              label={"Confirm password"}
              variant="filled"
              error={error}
              required
              type="password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />

            <Button
              sx={{
                borderRadius: "5px",
              }}
              variant="contained"
              type="submit"
            >
              {isAuthLoading ? <CircularProgress /> : "Signup"}
            </Button>
          </Box>
          <Typography mt={2} textAlign={"center"} fontSize={13}>
            Already have an account ?{" "}
            <Button onClick={() => navigate(ROUTS.LOGIN)} variant="text">
              Login
            </Button>
          </Typography>
        </>
      )}
      {isAuth && !isSet && (
        <>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => {
              return (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
            mt={2}
            p={2}
            component={Paper}
          >
            {activeStep == 0 && (
              <>
                <PoligonAvatar size={"100px"} avatar={avtrImgURL} />
                <Button fullWidth variant="contained" component="label">
                  <DriveFolderUploadIcon fontSize="medium" />
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => {
                      setAvatarImg(e.target.files[0]);
                    }}
                  />
                </Button>
              </>
            )}
            {activeStep == 1 && (
              <>
                <Box
                  width={"100%"}
                  height={"35vmin"}
                  sx={{
                    background: `url(${coverImgURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Button fullWidth variant="contained" component="label">
                  <DriveFolderUploadIcon fontSize="medium" />
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => {
                      setCoverImg(e.target.files[0]);
                    }}
                  />
                </Button>
              </>
            )}
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Button
                variant="text"
                onClick={() => {
                  if (activeStep == 0) {
                    return;
                  } else {
                    setActiveStep((old) => old - 1);
                  }
                }}
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  if (activeStep === 0 && avatarImg) {
                    dispatch(
                      updateAvatarImg({
                        img: avatarImg,
                        sessionToken: sessionToken.token,
                      })
                    );
                    setActiveStep((old) => old + 1);
                  }
                  if (activeStep === 1 && coverImg) {
                    console.log("dispatched");
                    dispatch(
                      updateCoverImg({
                        img: coverImg,
                        sessionToken: sessionToken.token,
                      })
                    );
                  }
                }}
                variant="text"
              >
                Next
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}
export default Signup;
