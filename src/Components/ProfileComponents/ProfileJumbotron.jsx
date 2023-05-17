import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import PoligonAvatar from "../PoligonAvatar";
const dropShadow = {
  filter: "drop-shadow(0 0 15px black)",
};

function ProfileJumbotron({ user }) {
  return (
    <Grid
      container
      pt={2}
      pb={4}
      sx={{
        background: `url(${user?.coverImg})`,
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
          <Grid
            item
            container
            xs={12}
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
              {user?.name} {user?.lastName}
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <PoligonAvatar
              size={"12vw"}
              avatar={user?.avatarImg}
              border={"2px solid grey"}
            />
          </Grid>
          <Grid
            item
            container
            xs={12}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <Typography variant="body1" fontSize={"2vw"} color={"primary"}>
              {user?.follows ? user?.follows : "0"}
            </Typography>
            <Typography variant="body1" fontSize={"2vw"}>
              Followers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default ProfileJumbotron;
