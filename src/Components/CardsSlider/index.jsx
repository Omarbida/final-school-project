import { useEffect, useRef, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Chip,
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
import EndShadow from "./EndShadow";

const cardVideos = [
  {
    thumnail: "bg10.jpg",
    likesCount: 451561,
    title: "video 1 title",
  },
  {
    thumnail: "bg2.jpg",
    likesCount: 46845,
    title: "video 2 title",
  },
  {
    thumnail: "bg3.jpg",
    likesCount: 10566,
    title: "video 3 title",
  },
  {
    thumnail: "bg4.jpg",
    likesCount: 156643,
    title: "video 4 title",
  },
  {
    thumnail: "bg5.jpg",
    likesCount: 14631,
    title: "video 5 title",
  },
  {
    thumnail: "bg6.jpg",
    likesCount: 75416,
    title: "video 6 title",
  },
  {
    thumnail: "bg13.png",
    likesCount: 951344,
    title: "video 7 title",
  },
];

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
        p: "0!important",
      }}
    >
      <Typography
        sx={{
          ml: "10px",
          mb: "10px",
        }}
        variant="body1"
        fontSize={"2vw"}
        color={"primary"}
      >
        Latest outplays
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          borderRadius: "5px",
          pt: "3px",
          pb: "3px",
        }}
        component={Paper}
        elevation={1}
      >
        {/*shadowleft*/}
        <EndShadow angle={"270deg"} side={"left"} />
        {/*shadow right*/}
        <EndShadow angle={"90deg"} side={"right"} />
        {/*button left */}
        <IconButton
          sx={{
            position: "absolute",
            zIndex: "100",
            top: "75px",
            left: "0px",
            bgcolor: "#000000b5",
            scale: "1",
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
            top: "75px",
            scale: "1",
            right: "0px",
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
            overflow: "hidden",
            pt: "3px",
            pb: "3px",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
          style={{ scrollLeft: scrollcard }}
          ref={containerRef}
        >
          {cardVideos.map((item, index, arr) => {
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
      sx={{
        display: "inline-block",
        cursor: "pointer",
        width: "200px",
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
            height: "120px",
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
            backgroundImage: `url(${item.thumnail})`,
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
                justifyContent={"flex-end"}
                alignItems={"end"}
                paddingRight={1}
              >
                <Typography variant="body1" color={"primary"}>
                  {show
                    ? item.likesCount
                    : item.likesCount > 10000
                    ? `${Math.floor(item.likesCount / 1000)}k`
                    : item.likesCount}
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
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"center"}
            xs={3}
          >
            <PoligonAvatar size={"45px"} />
          </Grid>
          <Grid item container xs={8} alignItems={"center"} paddingRight={1}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                whiteSpace: show ? "normal" : "nowrap",
                textOverflow: show ? "clip" : "ellipsis",
                overflow: show ? "visible" : "hidden",
              }}
              variant={"body1"}
            >
              {item.title}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function CostomChip({ lable }) {
  return (
    <Chip
      label={lable ? lable : ""}
      sx={{
        color: "rgba(0, 255, 255, 1)",
        border: "1px solid grey",

        fontWeight: "600",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}
