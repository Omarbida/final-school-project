import axios from "axios";
import { useEffect, useState } from "react";

const useCommentLike = ({ comment, sessionToken }) => {
  const [likes, setLikes] = useState(comment.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/comment/${comment.id}/like`;
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

      .catch((e) => console.log(e));
  }, [refresh]);
  //like
  const like = () => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/comment/${comment.id}/like`;
    axios({
      method: "post",
      url: URL,
      headers: {
        "x-session-token": sessionToken?.token,
      },
    })
      .then((res) => setRefresh(!refresh))
      .catch((e) => console.log(e));
  };
  // unlike
  const unLike = () => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/comment/${comment.id}/like`;
    axios({
      method: "delete",
      url: URL,
      headers: {
        "x-session-token": sessionToken?.token,
      },
    })
      .then((res) => setRefresh(!refresh))
      .catch((e) => console.log(e));
  };
  return {
    isLiked,
    likes,
    like,
    unLike,
  };
};
export default useCommentLike;
