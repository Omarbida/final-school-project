import { Box } from "@mui/material";

function EndShadow({ angle, side }) {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "10px",
        top: 0,
        bottom: 0,
        [side]: 0,
        zIndex: 99,
        background: `linear-gradient(${
          angle ? angle : "0"
        },transparent , #121212)`,
      }}
    ></Box>
  );
}
export default EndShadow;
