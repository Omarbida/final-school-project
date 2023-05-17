import axios from "axios";
import { useEffect, useState } from "react";

const useLike = ({ video, sessionToken }) => {
  const [refresh, setRefresh] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${video.id}/like`;
    axios({
      method: "get",
      url: URL,
      headers: {
        "x-session-token": sessionToken?.token,
      },
    })
      .then((res) => {
        setIsLiked(res.data?.isLiked);
        setLikes(res.data?.likes);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [refresh]);
  const like = () => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${video.id}/like`;
    axios({
      method: "post",
      url: URL,
      headers: {
        "x-session-token": sessionToken?.token,
      },
    })
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const unLike = () => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${video.id}/like`;
    axios({
      method: "delete",
      url: URL,
      headers: {
        "x-session-token": sessionToken?.token,
      },
    })
      .then((res) => {
        setRefresh(!refresh);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return {
    isLiked,
    likes,
    like,
    unLike,
  };
};
export default useLike;
