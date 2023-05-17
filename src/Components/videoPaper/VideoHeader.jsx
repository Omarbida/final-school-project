import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import PoligonAvatar from "../PoligonAvatar";
import { useState } from "react";
import useScreenWidth from "../../kooks/useScreenwith";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
const VideoHeader = ({ userInfo }) => {
  const { is350 } = useScreenWidth();
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
    setOpen(true);
  };
  return (
    <Grid
      container
      p={is350 ? 1 : 0.4}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <PoligonAvatar
          size={is350 ? "50px" : "40px"}
          avatar={userInfo?.avatarImg}
        />

        <Typography
          variant="h6"
          fontWeight={600}
          fontSize={is350 ? "20px" : "15px"}
        >
          {userInfo?.name}
        </Typography>
        <Button variant="outlined" sx={{ fontSize: "10px" }}>
          Follow
        </Button>
      </Box>
      <IconButton
        sx={{
          justifySelf: "flex-end",
        }}
        onClick={handleOpen}
      >
        <MoreVertTwoToneIcon fontSize={is350 ? "meduim" : "small"} />
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchor}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </Grid>
  );
};
export default VideoHeader;
