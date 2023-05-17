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
  Menu,
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogOut } from "../redux/slices/authSlice";
const Header = ({ maxWidth }) => {
  const navigate = useNavigate();
  const collapse = useMediaQuery("(min-width:750px)");
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();
  const toggleDrawer = (show) => {
    setshow(show);
  };
  const { isAuth, user } = useSelector((state) => state.auth);
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <img
          width={"55px"}
          src="/LOGO.png"
          onClick={() => navigate(ROUTS.HOME)}
          style={{
            cursor: "pointer",
            mr: 2,
          }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "nowrap",
            borderRadius: "32px",
            border: "1px solid grey",
            maxWidth: "400px",
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

        {collapse ? (
          <Box
            minWidth="fit-content"
            display={"flex"}
            alignItems={"center"}
            gap={1}
          >
            <MyButton>Games</MyButton>
            <MyButton>Top-Clips</MyButton>
            {isAuth && (
              <MyButton
                onClick={() => {
                  dispatch(authLogOut());
                }}
              >
                Log-out
              </MyButton>
            )}
            {isAuth === false && (
              <>
                <MyButton onClick={() => navigate(ROUTS.LOGIN)}>Login</MyButton>
                <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>
                  Signup
                </MyButton>
              </>
            )}
            <MyButton variant={"contained"}>Premium</MyButton>
            {isAuth && (
              <Box
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => navigate(ROUTS.PROFILE_VIEW + "/" + user.id)}
              >
                <PoligonAvatar size={"60px"} avatar={user.avatarImg} />
              </Box>
            )}
          </Box>
        ) : (
          <>
            <Button
              sx={{
                p: 0,
                minWidth: 0,
                order: 5,
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
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                pl={1.5}
                pr={1.5}
                pt={1.5}
              >
                {isAuth && (
                  <Box
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(ROUTS.PROFILE_VIEW + "/" + user.id)}
                  >
                    <PoligonAvatar size={"60px"} avatar={user.avatarImg} />
                  </Box>
                )}
                <MyButton>Games</MyButton>
                <MyButton>Top-Clips</MyButton>
                {isAuth && <MyButton>Log-out</MyButton>}
                {isAuth === false && (
                  <>
                    <MyButton onClick={() => navigate(ROUTS.LOGIN)}>
                      Login
                    </MyButton>
                    <MyButton onClick={() => navigate(ROUTS.SIGNUP)}>
                      Signup
                    </MyButton>
                  </>
                )}
                <MyButton variant={"contained"}>Premium</MyButton>
              </Box>
            </Drawer>
          </>
        )}
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
