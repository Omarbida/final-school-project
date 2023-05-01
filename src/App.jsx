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
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/video" element={<VideoView />} />
        <Route path="/home" element={<HomeView />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
