import {
  Box,
  Button,
  Container,
  Slide,
  Tooltip,
  Typography,
} from "@mui/material";
import VideoSection from "../Components/sections/VideoSection";
import Header from "../Components/Header";
import VideoInfoSection from "../Components/sections/VideoInfoSection";
import Comment from "../Components/Comment";
import CreateComment from "../Components/CreateComment";
import { useEffect, useState } from "react";
import Card_Slider from "../Components/CardsSlider";
import { useParams } from "react-router-dom";
import axios from "axios";
function VideoView() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState();
  const [video, setVideo] = useState();
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${id}`;

    console.log("fetched");
    axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        console.log(res.data?.data);
        setUserInfo(res.data?.data?.userInfo);
        setVideo(res.data?.data?.video);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  return (
    <>
      <Header />
      <Container
        maxWidth={"xl"}
        sx={{
          pt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <VideoSection video={video} userInfo={userInfo} />

        <VideoInfoSection video={video} userInfo={userInfo} />
        <Container
          maxWidth={"md"}
          sx={{
            p: "0!important",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <CreateComment />

          <Comment
            rank={1}
            comment={
              "abk fbka bfkahw fah hkb kfabkuwk jbkjj afbak wbf bjkwk wk dnla,wn lkdaw ndaw nawn lkawld lklknrkj lwen lklk nlks glsnlkg s/lgl'wse sengkl senlkg selkg sle senlgsnlen slknelk sgelns lengklselk gslkelg sengs nbk"
            }
            userName={"sliman"}
          />
          <Comment
            rank={2}
            comment={
              "awdkjakj awjdlkakj wndkjaw dawdaw; ;  e lselklk fnsekf elnl "
            }
            userName={"souad"}
          />
          <Comment
            rank={3}
            comment={
              "awdkjakj awjdlkakj wndkjaw dawdaw; ;  e lselklk fnsekf elnl"
            }
            userName={"souad"}
          />
          <Comment
            rank={4}
            comment={
              "awdkjakj awjdlkakj wndkjaw dawdaw; ;  e lselklk fnsekf elnl"
            }
            userName={"souad"}
          />
          <Comment
            rank={5}
            comment={
              "awdkjakj awjdlkakj wndkjaw dawdaw; ;  e lselklk fnsekf elnl"
            }
            userName={"souad"}
          />
        </Container>
      </Container>
    </>
  );
}
export default VideoView;
