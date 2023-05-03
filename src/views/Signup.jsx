import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";
import { useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import { useEffect, useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (password === confPassword) {
      setError(false);
    } else {
      setError(true);
    }
  }, [password, confPassword, setError]);
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            fullWidth
            label={"Last Name"}
            variant="filled"
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
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
        <TextField
          fullWidth
          label={"Confirm password"}
          variant="filled"
          error={error}
          required
          type="password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />

        <Button
          sx={{
            borderRadius: "5px",
          }}
          variant="contained"
          type="submit"
        >
          Sign Up
        </Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Already have an account ?{" "}
        <Button onClick={() => navigate(ROUTS.LOGIN)} variant="text">
          Login
        </Button>
      </Typography>
    </Container>
  );
}
export default Signup;
