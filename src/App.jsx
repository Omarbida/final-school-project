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
import Profile from "./views/ProfilePage";
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
      <Profile />
    </ThemeProvider>
  );
}

export default App;
