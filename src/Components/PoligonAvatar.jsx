import { Avatar, Box } from "@mui/material";

const PoligonAvatar = ({ size, rank, avatar }) => {
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
          width: "60%",
          height: "60%",
          transform: "rotate(0deg)",
          display: "flex",
          alignItems: "center",
          zIndex: "0",
          justifyContent: "center",
          position: "absolute",
          zIndex: "100",
          transform: "translateY(4%)",
          scale: "1",
          bottom: "-20%",
          right: "-20%",
        }}
      >
        <img
          style={{
            zIndex: "100",
          }}
          width={"100%"}
          src={`ranks/rank${rank}badge.png`}
        />
      </Box>
      <Avatar
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        {avatar && <Box component={"img"} src={avatar} height={"100%"} />}
      </Avatar>
    </Box>
  );
};
export default PoligonAvatar;
