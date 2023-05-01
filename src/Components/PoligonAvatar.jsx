import { Avatar, Box } from "@mui/material";

const PoligonAvatar = ({ size, rank }) => {
  return (
    <Box
      sx={{
        height: size ? size : "100px",
        width: size ? size : "100px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "60%",
          height: "20%",
          transform: "rotate(0deg)",
          display: "flex",
          alignItems: "center",
          zIndex: "100",
          justifyContent: "center",
          filter: "drop-shadow(0px 0px 5px #ffffff80)",
        }}
      >
        <img width={"100%"} src={`ranks/rank${rank ? rank : "1"}.png`} />
      </Box>
      <Avatar
        sx={{
          height: "80%",
          width: "80%",
        }}
      ></Avatar>
    </Box>
  );
};
export default PoligonAvatar;
