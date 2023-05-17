import { useEffect, useState } from "react";

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
import ProfilView from "./views/profileView";
import AuthGuard from "./Gaurds/authGuard";
import { useDispatch } from "react-redux";
import { initAuth } from "./redux/slices/authSlice";
import PendingAccGuard from "./Gaurds/pendingAccGuard";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ffff",
    },
    secondary: {
      main: "#5e7d7d80",
    },
    text: {
      primary: "#ffffffb5",
      secondary: "#00ffff80",
    },
  },
  typography: {
    fontFamily: "'Changa', sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: "32px",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: "32px",
          },
        },
      ],
    },
  },
});
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initAuth());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path={ROUTS.LOGIN}
          element={
            <AuthGuard>
              <Login />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTS.SIGNUP}
          element={
            <AuthGuard>
              <Signup />
            </AuthGuard>
          }
        />
        <Route
          path={ROUTS.VIDEO_VIEW + "/:id"}
          element={
            <PendingAccGuard>
              <VideoView />
            </PendingAccGuard>
          }
        />
        <Route
          path={ROUTS.HOME}
          element={
            <PendingAccGuard>
              <HomeView />
            </PendingAccGuard>
          }
        />
        <Route
          path={ROUTS.PROFILE_VIEW + "/:id"}
          element={
            <PendingAccGuard>
              <ProfilView />
            </PendingAccGuard>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
