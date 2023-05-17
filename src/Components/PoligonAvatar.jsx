import { Avatar, Box } from "@mui/material";

const PoligonAvatar = ({ size, avatar, border }) => {
  return (
    <Box
      sx={{
        height: size ? size : "100px",
        width: size ? size : "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar
        sx={{
          height: "100%",
          width: "100%",
          border: border ? border : "none",
        }}
      >
        {avatar && (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              background: `url(${avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </Avatar>
    </Box>
  );
};
export default PoligonAvatar;
