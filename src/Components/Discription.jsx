import { Container, Typography } from "@mui/material";
import useScreenWidth from "../kooks/useScreenwith";

function Discription() {
  const { is450 } = useScreenWidth();
  return (
    <Container
      sx={{
        mb: "20px",
      }}
      maxWidth={"md"}
    >
      <Typography variant={is450 ? "h3" : "h5"}>Welcom to PlaySpot</Typography>
      <Typography variant="p" fontSize={is450 ? "16px" : "12px"}>
        The go-to hub for gamers to share epic clutches and outplays! Join our
        community, post your best clips. Casual or pro, PlaySpot is your stage.
        Sign up and start showcasing your skills today!
      </Typography>
    </Container>
  );
}
export default Discription;
