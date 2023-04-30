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
import { useState } from "react";
function Profile() {
  return (
    <>
      {" "}
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
        <VideoSection />

        <VideoInfoSection />
        <Container maxWidth={"md"}>
          <CreateComment />
          <Typography
            sx={{
              mb: 2,
            }}
            variant="h5"
          >
            Comments:
          </Typography>
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
              "awdkjakj awjdlkakj wndkjaw dawdaw; ;  e lselklk fnsekf elnl"
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
export default Profile;
