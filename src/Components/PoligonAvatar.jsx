import { Avatar, Box } from "@mui/material";

const PoligonAvatar = ({ size, rank }) => {
  return (
    <Box
      sx={{
        height: size ? size : "100px",
        width: size ? size : "100px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "40%",
          transform: "rotate(0deg)",
          display: "flex",
          alignItems: "center",
          zIndex: "0",
          justifyContent: "center",
          filter: "drop-shadow(0px 0px 5px #ffffff80)",
          position: "absolute",
          top: "0",
          left: "-20%",
          right: "-20%",
        }}
      >
        <img width={"100%"} src={`ranks/rank${rank ? rank : "1"}avatar.png`} />
      </Box>
      <Avatar
        sx={{
          height: "80%",
          width: "80%",
        }}
      >
        <Box component={"img"} src="bg1.jpg" height={"100%"} />
      </Avatar>
    </Box>
  );
};
export default PoligonAvatar;
