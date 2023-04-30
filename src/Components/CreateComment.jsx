import { Box, Button, TextField } from "@mui/material";
import PoligonAvatar from "./PoligonAvatar";
import AddCommentIcon from "@mui/icons-material/AddComment";
function CreateComment() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",

        gap: 2,
        mb: 2,
      }}
      component={"form"}
    >
      <Box
        sx={{
          pt: 2,
        }}
      >
        <PoligonAvatar size={"45px"} rank={3} />
      </Box>

      <TextField
        fullWidth
        label="Add a comment"
        type="text"
        multiline
        variant="standard"
        minRows={2}
        sx={{
          maxWidth: "80%",
        }}
      />
      <Button>
        <AddCommentIcon />
      </Button>
    </Box>
  );
}
export default CreateComment;
