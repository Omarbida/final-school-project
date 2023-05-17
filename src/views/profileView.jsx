import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
} from "@mui/material";
import Header from "../Components/Header";
import ProfileJumbotron from "../Components/ProfileComponents/ProfileJumbotron";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useEffect, useState } from "react";
import useScreenWidth from "../kooks/useScreenwith";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
function ProfilView() {
  const { is320 } = useScreenWidth();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState();
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/auth/user/${id}`;
    axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        setUserProfile(res?.data?.data?.user);
      })
      .catch((e) => console.log(e));
  }, [id, setUserProfile]);
  return (
    <>
      <Header />

      <ProfileJumbotron user={userProfile} />
      <Container maxWidth={"md"}>
        <Grid container spacing={3} mt={0}>
          <Grid item container xs={12}>
            <Grid
              item
              container
              xs={is320 ? 8 : 12}
              alignItems={"center"}
              order={is320 ? 0 : 2}
            >
              <Typography variant="h7"></Typography>
            </Grid>

            <Grid
              item
              container
              xs={is320 ? 4 : 12}
              justifyContent={"end"}
              mb={1}
            >
              <TextField
                fullWidth
                placeholder="Search for colection or clip"
                variant="standard"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12} spacing={3}></Grid>
        </Grid>
      </Container>
    </>
  );
}
export default ProfilView;

function ColectionItem({ image }) {
  return (
    <Grid
      item
      xs={6}
      sx={{
        background: image ? image : "greay",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: "inset 0px 0px 10px black",
      }}
    ></Grid>
  );
}
function OverLay({ show }) {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 8,
          p: 1,
          boxShadow: "inset 0 0 30px black",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "18px",
            fontWeight: "700",
            fontSize: "18px",
            whiteSpace: show ? "normal" : "nowrap",
            textOverflow: show ? "clip" : "ellipsis",
            overflow: show ? "visible" : "hidden",
            textShadow: "1px 1px 10px black",
            transition:
              "white-space 0.5s ease-out, text-overflow 0.5s ease-out",
          }}
          variant={"body1"}
          color={"primary"}
        >
          Collection name the name is long test name
        </Typography>
      </Box>
      <Box
        width={show ? "40%" : "70%"}
        height={show ? "40%" : "70%"}
        position={"absolute"}
        bottom={0}
        right={0}
        display={"flex"}
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
        bgcolor={"rgba(0, 0, 0, 0.7)"}
        pr={3}
        pb={4}
        zIndex={9}
        sx={{
          transition: "all 0.5s ease",
          clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
        }}
      ></Box>
      <Box
        width={"50%"}
        height={"50%"}
        position={"absolute"}
        bottom={0}
        right={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backdropFilter: "blur(3px)",
        }}
      ></Box>
      <Box
        width={"50%"}
        height={"50%"}
        position={"absolute"}
        bottom={0}
        right={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        zIndex={10}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h7" color={show ? "primary" : "white"}>
            +15
          </Typography>
          <MenuOpenIcon fontSize="large" color={show ? "primary" : "white"} />
        </Box>
      </Box>
    </>
  );
}
function Card() {
  const [hovered, setHovered] = useState(false);
  return (
    <Grid
      item
      container
      xs={6}
      sm={4}
      md={3}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        container
        width={"100%"}
        maxWidth={"140px"}
        height={"200px"}
        component={Paper}
        elevation={3}
        borderRadius={"10px"}
        overflow={"hidden"}
        sx={{
          position: "relative",
          cursor: "pointer",

          transition: "all 0.2s ease",
          ":hover": {
            boxShadow: "0 0 10px white",
          },
        }}
      >
        <OverLay show={hovered} />
        <ColectionItem image={"url(bg1.jpg)"} />
        <ColectionItem image={"url(bg2.jpg)"} />
        <ColectionItem image={"url(bg4.jpg)"} />
        <ColectionItem image={"url(bg5.jpg)"} />
      </Grid>
    </Grid>
  );
}
