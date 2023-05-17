import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTS } from "../consts";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../redux/slices/authSlice";
import { useSnackbar } from "notistack";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmite = () => {
    dispatch(authLogin({ email, password, enqueueSnackbar }));
  };
  const { isAuthLoading, isAuth, isSet } = useSelector((state) => state.auth);

  if (isAuth && !isSet) {
    return <Navigate to={ROUTS.SIGNUP} />;
  }

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
          handleSubmite();
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
          type="submit"
        >
          {isAuthLoading ? <CircularProgress /> : "Login"}
        </Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Don't have an account ?{" "}
        <Button variant="text" onClick={() => navigate(ROUTS.SIGNUP)}>
          Signup
        </Button>
      </Typography>
    </Container>
  );
}
export default Login;
