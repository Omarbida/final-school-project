import { useState } from "react";

import "./App.css";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import Login from "./views/Login";
import Signup from "./views/Signup";
import VideoView from "./views/VideoView";
import HomeView from "./views/HomeView";
import { Route, Routes } from "react-router-dom";
import { ROUTS } from "./consts";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff80",
    },
    secondary: {
      main: "#5e7d7d80",
    },
    text: {
      primary: "#ffffffb5",
      secondary: "#00ffff80",
    },
  },
  typography: {},
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "32px",
          },
        },
      ],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path={ROUTS.LOGIN} element={<Login />} />
        <Route path={ROUTS.SIGNUP} element={<Signup />} />
        <Route path={ROUTS.VIDEO_VIEW} element={<VideoView />} />
        <Route path={ROUTS.HOME} element={<HomeView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
