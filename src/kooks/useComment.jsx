import axios from "axios";
import { useEffect, useState } from "react";

const useComment = ({ video, sessionToken }) => {
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [commentsCount, setCommentsCount] = useState(video.comments);
  // get comments
  const getComments = () => {
    setIsLoading(true);
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${video.id}/comment`;
    axios({
      method: "get",
      url: URL,
    })
      .then((res) => {
        console.log(res.data);
        setComments(res.data.comments);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  };
  const postComment = (comment) => {
    const basURL = import.meta.env.VITE_APP_HOST;
    const URL = basURL + `/video/${video.id}/comment`;
    axios({
      method: "post",
      url: URL,
      headers: {
        "Content-Type": "application/json",
        "x-session-token": sessionToken?.token,
      },
      data: {
        comment,
      },
    })
      .then((res) => {
        setComments([res.data?.data?.savedComment, ...comments]);
        console.log(res.data?.data?.comments);
        setCommentsCount(res.data?.data?.comments);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return {
    comments,
    isLoading,
    getComments,
    postComment,
    commentsCount,
  };
};
export default useComment;
