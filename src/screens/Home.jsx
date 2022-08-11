import PresentationHp from "../components/PresentationHp";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="Home">
      <PresentationHp />
      <div className="slider">
        <Slider />
      </div>
    </div>
  );
}
export default Home;
