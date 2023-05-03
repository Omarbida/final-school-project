import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PoligonAvatar from "../PoligonAvatar";
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
        <Grid
          item
          container
          xs={12}
          sx={{ ...dropShadow }}
          alignItems={"space-between"}
          height={"100%"}
        >
          <Grid item xs={12} container>
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
          </Grid>
          <Grid item xs={12} container>
            <Grid
              item
              container
              xs={6}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                component={"img"}
                src="ranks/rank1badge.png"
                width={"17vw"}
              />
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <PoligonAvatar size={"12vw"} rank={5} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ProfileJumbotron;
