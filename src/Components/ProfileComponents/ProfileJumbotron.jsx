import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
const dropShadow = {
  filter: "drop-shadow(0 0 15px black)",
};

function ProfileJumbotron() {
  return (
    <Grid
      container
      pt={2}
      pb={4}
      sx={{
        background: "url(bg3.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "30vw",
        minHeight: "150px",
      }}
    >
      <Container maxWidth="md">
        <Grid item container xs={12} sx={{ ...dropShadow }}>
          <Grid
            item
            container
            xs={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              fontWeight={700}
              fontSize={"4vw"}
              sx={{ ...dropShadow }}
              color={"primary"}
              variant="h4"
            >
              Challanger
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              fontWeight={700}
              fontSize={"4vw"}
              sx={{ ...dropShadow }}
              color={"primary"}
              variant="h4"
            >
              Lord Bida
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box component={"img"} src="ranks/rank1.png" width={"25vw"} />
          </Grid>
          <Grid
            item
            container
            xs={6}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Avatar
              sx={{
                height: "15vw",
                width: "15vw",
              }}
            >
              <Box component={"img"} src="bg1.jpg" height={"100%"} />
            </Avatar>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ProfileJumbotron;
