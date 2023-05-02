import Header from "../Components/Header";
import Card_Slider from "../Components/CardsSlider";
function HomeView() {
  return (
    <>
      <Header maxWidth={"lg"} />
      <Card_Slider />
      <Card_Slider />
    </>
  );
}

export default HomeView;
