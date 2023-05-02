import { Avatar, Box, Grid, Typography } from "@mui/material";
const dropShadow = {
  filter: "drop-shadow(0 0 15px black)",
};
const min = 15;
const max = 45;
const resfontsize = {
  fontSize: `clamp(${min}px, calc(${min}px + ${
    max - min
  } * ((100vh - 320px) / ${1440 - 320})), ${max}px)`,
};
function ProfileJumbotron() {
  return (
    <Grid
      container
      padding={2}
      sx={{
        background: "url(bg3.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Grid item container xs={12} sx={{ ...dropShadow, ...resfontsize }}>
        <Grid
          item
          container
          xs={6}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            fontWeight={700}
            sx={{ ...dropShadow, ...resfontsize }}
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
            sx={{ ...dropShadow, ...resfontsize }}
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
          <Box component={"img"} src="ranks/rank1.png" width={"100%"} />
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
              height: "30vmin",
              width: "30vmin",
            }}
          >
            <Box component={"img"} src="bg1.jpg" height={"100%"} />
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProfileJumbotron;
