import {
  AppBar,
  Avatar,
  Box,
  Button,
  TextField,
  Toolbar,
  Container,
  InputAdornment,
  InputBase,
  IconButton,
  Grid,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useState } from "react";
const Header = ({ maxWidth }) => {
  const navigate = useNavigate();
  const collapse = useMediaQuery("(min-width:750px)");
  const [show, setshow] = useState(false);
  const toggleDrawer = (show) => {
    setshow(show);
  };
  return (
    <AppBar
      position="static"
      sx={{
        pl: 1,
        pr: 1,
      }}
    >
      <Container
        maxWidth={maxWidth ? maxWidth : "md"}
        sx={{
          display: "flex",
          alignItems: "center",
          pt: 1,
          pb: 1,
          pl: "0!important",
          pr: "0!important",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            mr: 2,
          }}
          onClick={() => navigate(ROUTS.HOME)}
        >
          <img width={"55px"} src="LOGO.png" />
        </Box>

        <Grid
          container
          direction={"row"}
          flexWrap={"nowrap"}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid flexGrow={1}>
            <TextField
              fullWidth
              placeholder="Search"
              variant="outlined"
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
          {collapse ? (
            <Grid minWidth={"370px"}>
              <MyButton>Games</MyButton>
              <MyButton>Top-Clips</MyButton>
              <MyButton onClick={() => navigate(ROUTS.LOGIN)}>Login</MyButton>
              <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>Signup</MyButton>
              <MyButton variant={"contained"}>Premium</MyButton>
            </Grid>
          ) : (
            <>
              <Button
                onClick={() => {
                  toggleDrawer(true);
                }}
              >
                <MenuTwoToneIcon fontSize="large" />
              </Button>
              <Drawer
                anchor={"top"}
                open={show}
                onClose={() => toggleDrawer(false)}
              >
                <MyButton>Games</MyButton>
                <MyButton>Top-Clips</MyButton>
                <MyButton onClick={() => navigate(ROUTS.LOGIN)}>Login</MyButton>
                <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>
                  Signup
                </MyButton>
                <MyButton variant={"contained"}>Premium</MyButton>
              </Drawer>
            </>
          )}
          {false && (
            <Grid>
              <Box
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => navigate(ROUTS.PROFILE_VIEW)}
              >
                <PoligonAvatar size={"60px"} rank={3} />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
function MyButton({ children, onClick, variant }) {
  return (
    <Button
      disableRipple
      onClick={onClick}
      variant={variant ? variant : "text"}
      sx={{
        color: "grey",
        ":hover": {
          background: "none",
          color: "aqua",
        },
      }}
    >
      {children}
    </Button>
  );
}
