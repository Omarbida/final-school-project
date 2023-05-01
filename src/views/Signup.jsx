import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        pt: 5,
      }}
      maxWidth="sm"
    >
      <Discription />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            fullWidth
            label={"Name"}
            variant="filled"
            required
            type="text"
          />
          <TextField
            fullWidth
            label={"Last Name"}
            variant="filled"
            required
            type="text"
          />
        </Box>
        <TextField
          fullWidth
          label={"Email"}
          variant="filled"
          required
          type="email"
        />
        <TextField
          fullWidth
          label={"Password"}
          variant="filled"
          required
          type="password"
        />
        <TextField
          fullWidth
          label={"Confirm password"}
          variant="filled"
          required
          type="password"
        />

        <Button
          sx={{
            borderRadius: "5px",
          }}
          variant="contained"
        >
          Sign Up
        </Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Already have an account ?{" "}
        <Button onClick={() => navigate("/")} variant="text">
          Login
        </Button>
      </Typography>
    </Container>
  );
}
export default Signup;
