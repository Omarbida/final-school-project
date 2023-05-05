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
  FormControl,
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
      position="sticky"
      sx={{
        pl: 1,
        pr: 1,
      }}
    >
      <Container
        maxWidth={maxWidth ? maxWidth : "md"}
        sx={{
          pt: 1,
          pb: 1,
          pl: "0!important",
          pr: "0!important",
        }}
      >
        <Grid container alignItems="center">
          <Grid item xs={3} sm={2} md={3}>
            <img
              width={"55px"}
              src="LOGO.png"
              onClick={() => navigate(ROUTS.HOME)}
              style={{
                cursor: "pointer",
                mr: 2,
              }}
            />
          </Grid>

          <Grid
            item
            md={9}
            sm={10}
            xs={9}
            container
            flexWrap={"nowrap"}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid flexGrow={1}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  borderRadius: "32px",
                  border: "1px solid grey",
                }}
              >
                <InputBase
                  fullWidth
                  placeholder="Search"
                  sx={{
                    p: "4px 16px",
                  }}
                />
                <IconButton>
                  <Search />
                </IconButton>
              </Box>
            </Grid>
            {collapse ? (
              <Grid minWidth={"370px"}>
                <MyButton>Games</MyButton>
                <MyButton>Top-Clips</MyButton>
                <MyButton onClick={() => navigate(ROUTS.LOGIN)}>Login</MyButton>
                <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>
                  Signup
                </MyButton>
                <MyButton variant={"contained"}>Premium</MyButton>
              </Grid>
            ) : (
              <>
                <Button
                  sx={{
                    p: 0,
                    minWidth: 0,
                  }}
                  onClick={() => {
                    toggleDrawer(true);
                  }}
                >
                  <MenuTwoToneIcon fontSize="large" />
                </Button>
                <Drawer
                  anchor={"right"}
                  open={show}
                  onClose={() => toggleDrawer(false)}
                >
                  <Box display={"flex"} flexDirection={"column"} pl={1} pr={1}>
                    <MyButton>Games</MyButton>
                    <MyButton>Top-Clips</MyButton>
                    <MyButton onClick={() => navigate(ROUTS.LOGIN)}>
                      Login
                    </MyButton>
                    <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>
                      Signup
                    </MyButton>
                    <MyButton variant={"contained"}>Premium</MyButton>
                  </Box>
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
