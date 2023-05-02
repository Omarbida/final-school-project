import { useEffect, useRef, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PoligonAvatar from "../PoligonAvatar";
import { ROUTS } from "../../consts";
import { useNavigate } from "react-router-dom";
const Card_Slider = () => {
  let [scrollcard, setscrollcard] = useState(0);
  const containerRef = useRef();

  const handlescrollLeft = () => {
    containerRef.current.scrollLeft -= 330;
  };

  const handlescrollRight = () => {
    containerRef.current.scrollLeft += 330;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: "30px",
      }}
    >
      <Typography
        sx={{
          ml: "10px",
          mb: "10px",
        }}
        variant="body1"
        fontSize={"30px"}
        color={"primary"}
      >
        Latest outplays
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          overflow: "hidden",
          pt: "3px",
          pb: "3px",
        }}
        component={Paper}
        elevation={1}
      >
        {/*shadowleft*/}
        <Box
          sx={{
            position: "absolute",
            width: "10px",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 99,
            background: "linear-gradient(270deg,transparent , #121212)",
          }}
        ></Box>
        {/*shadow right*/}
        <Box
          sx={{
            position: "absolute",
            width: "10px",
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 99,
            background: "linear-gradient(90deg,transparent , #121212)",
          }}
        ></Box>
        {/*button left */}
        <IconButton
          sx={{
            position: "absolute",
            zIndex: "100",
            top: "120px",
            left: "5px",
            bgcolor: "#000000b5",
            scale: "1.1",
          }}
          onClick={(e) => handlescrollLeft(e)}
        >
          {" "}
          <ChevronLeftIcon
            sx={{
              scale: "1.5",
            }}
            color="primary"
            fontSize="larg"
          />
        </IconButton>
        {/*button right */}
        <IconButton
          sx={{
            position: "absolute",
            zIndex: "100",
            top: "120px",
            scale: "1.1",
            right: "5px",
            bgcolor: "#000000b5",
          }}
          color="primary"
          onClick={(e) => handlescrollRight(e)}
        >
          <ChevronRightIcon
            sx={{
              scale: "1.5",
            }}
            color="primary"
            fontSize="larg"
          />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            whiteSpace: "nowrap",
            overflowX: "scroll",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            overflowY: "hidden",
            pt: "3px",
            pb: "3px",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          style={{ scrollLeft: scrollcard }}
          ref={containerRef}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index, arr) => {
            return (
              <Card
                key={index + item}
                item={item}
                index={index}
                arr={arr.length}
              />
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};
export default Card_Slider;

function Card({ item, index, arr }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <Box
      key={index + item}
      sx={{
        display: "inline-block",
        cursor: "pointer",
        width: "320px",
        height: "100%",
        borderRadius: "10px",
        ml: index == 0 ? 0 : "5px",
        mr: arr == index ? 0 : "5px",
        boxShadow: "5px 5px 1.25rem 0px rgb(0 0 0 / 12%)",
        position: "relative",
        transition: "all 0.2s ease",
        pt: 1,
        pb: 1,

        ":hover": {
          boxShadow: "0 0 5px white",
        },
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => navigate(ROUTS.VIDEO_VIEW)}
      component={Paper}
      elevation={24}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "210px",
            background: "grey",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
          style={{
            backgroundImage: `url(bg${index + 1}.jpg)`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              zIndex: 98,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container height={"100%"}>
              <Grid
                item
                container
                xs={12}
                gap={1}
                paddingLeft={2}
                paddingTop={1}
              >
                <Typography color={"primary"} variant="body1">
                  #tag1
                </Typography>
                <Typography color={"primary"} variant="body1">
                  #tag2
                </Typography>
                <Typography color={"primary"} variant="body1">
                  #tag3
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <PlayCircleIcon
                  fontSize="large"
                  color="primary"
                  sx={{
                    scale: "1.5",
                    visibility: show ? "visible" : "hidden",
                  }}
                />
              </Grid>
              <Grid
                item
                container
                xs={12}
                justifyContent={"flex-end"}
                alignItems={"end"}
                paddingRight={1}
              >
                <Typography variant="body1" color={"primary"}>
                  {show ? "155 022" : "155k"}
                </Typography>
                <FavoriteIcon color="primary" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            flexGrow: "1",
          }}
        >
          <Grid
            item
            container
            alignItems={"center"}
            xs={2}
            sx={{
              alignItems: "center",
            }}
          >
            <PoligonAvatar size={"50px"} />
          </Grid>
          <Grid item container xs={10} alignItems={"center"} paddingRight={1}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                fontWeight: "700",
                fontSize: "18px",
                whiteSpace: show ? "normal" : "nowrap",
                textOverflow: show ? "clip" : "ellipsis",
                overflow: show ? "visible" : "hidden",
              }}
              variant={"body1"}
            >
              Video name the name is long so long
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
