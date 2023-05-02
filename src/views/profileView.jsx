import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import Header from "../Components/Header";
import ProfileJumbotron from "../Components/ProfileComponents/ProfileJumbotron";

function ProfilView() {
  return (
    <>
      <Header />
      <Container maxWidth={"md"}>
        <ProfileJumbotron />
      </Container>
    </>
  );
}
export default ProfilView;
