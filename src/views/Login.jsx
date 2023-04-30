import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Discription from "../Components/Discription";

function Login() {
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

        <Button variant="contained">Login</Button>
      </Box>
      <Typography mt={2} textAlign={"center"} fontSize={13}>
        Don't have an account ? <Button variant="text">Signup</Button>
      </Typography>
    </Container>
  );
}
export default Login;
