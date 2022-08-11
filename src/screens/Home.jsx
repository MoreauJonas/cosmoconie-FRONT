import CountDown from "../components/CountDown";
import PresentationHp from "../components/PresentationHp";
import Slider from "../components/Slider";


function Home() {
  return (
    <div>
        <div className="countDown">
            <CountDown />
        </div>
      <PresentationHp />
      <div className="slider">
      <Slider />
    </div>
    </div>
  );
}
export default Home;
