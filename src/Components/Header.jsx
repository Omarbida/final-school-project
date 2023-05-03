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
} from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import { Search } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
const Header = ({ maxWidth }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container
        maxWidth={maxWidth ? maxWidth : "md"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          m: "auto",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={() => navigate(ROUTS.HOME)}
        >
          <img width={"55px"} src="LOGO.png" />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Search"
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
          <Box
            sx={{
              cursor: "pointer",
            }}
            onClick={() => navigate(ROUTS.PROFILE_VIEW)}
          >
            <PoligonAvatar size={"60px"} rank={3} />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
