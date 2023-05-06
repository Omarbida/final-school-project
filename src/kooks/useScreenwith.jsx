import { useMediaQuery } from "@mui/material";

const useScreenWidth = () => {
  const is750 = useMediaQuery("(min-width:750px)");
  const is450 = useMediaQuery("(min-width:450px)");
  const is425 = useMediaQuery("(min-width:425px)");
  const is375 = useMediaQuery("(min-width:375px)");
  const is350 = useMediaQuery("(min-width:350px)");
  const is700 = useMediaQuery("(min-width:700px)");
  const is650 = useMediaQuery("(min-width:650px)");
  const is320 = useMediaQuery("(min-width:320px)");
  return {
    is750,
    is450,
    is375,
    is700,
    is650,
    is350,
    is320,
    is425,
  };
};
export default useScreenWidth;
