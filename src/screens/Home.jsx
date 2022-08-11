import PresentationHp from "../components/PresentationHp";
import Slider from "../components/Slider";
import { ArrowUpCircle } from "react-feather";

function Home() {
  return (
    <div className="home">
      <PresentationHp />
      <div className="slider">
        <Slider />
      </div>
      <a href="/#anchor-name" id="scroll-to-top">
        <ArrowUpCircle className="arrow" size={35} />
      </a>
    </div>
  );
}
export default Home;
