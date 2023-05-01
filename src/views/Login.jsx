import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";
import { useNavigate } from "react-router-dom";

function Login() {
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

        <Button
          sx={{
            borderRadius: "5px",
          }}
          variant="contained"
        >
          Login
        </Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Don't have an account ?{" "}
        <Button onClick={() => navigate("/signup")} variant="text">
          Signup
        </Button>
      </Typography>
    </Container>
  );
}
export default Login;
