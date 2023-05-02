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
const Header = () => {
  return (
    <AppBar position="static">
      <Container
        maxWidth={"md"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          m: "auto",
        }}
      >
        <Box>
          <img width={"55px"} src="LOGO.png" />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
          <Button variant="text">Home</Button>
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

          <PoligonAvatar size={"60px"} rank={3} />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
