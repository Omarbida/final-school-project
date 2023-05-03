import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <TextField
          fullWidth
          label={"Email"}
          variant="filled"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label={"Password"}
          variant="filled"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          sx={{
            borderRadius: "5px",
          }}
          variant="contained"
          onClick={(e) => navigate(ROUTS.HOME)}
        >
          Login
        </Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Don't have an account ?{" "}
        <Button onClick={() => navigate(ROUTS.SIGNUP)} variant="text">
          Signup
        </Button>
      </Typography>
    </Container>
  );
}
export default Login;
