import { Box, Divider, Paper, Typography } from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";

const Comment = ({ comment, userName, rank }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        mb: 2,
      }}
    >
      <PoligonAvatar size={"45px"} rank={rank} />
      <Box
        sx={{
          maxWidth: "80%",
        }}
      >
        <Typography fontSize={"large"} fontWeight={"800"}>
          {userName}
        </Typography>
        <Typography>{comment}</Typography>
      </Box>
    </Box>
  );
};
export default Comment;
