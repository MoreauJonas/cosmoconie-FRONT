import { useState } from "react";
import KalevalaForm from "../components/KalevalaForm";
import KalevalaPrediction from "../components/KalevalaPrediction";
import KalevalaWaiting from "../components/KalevalaWaiting";
import kalevala from "../assets/data/kalevala.json";
import Footer from "../components/Footer";

const Kalevala = () => {
  const [predictions, setPredictions] = useState(kalevala);
  const [launched, setLaunched] = useState(false);
  console.log("launched de screen ?", launched);
  return (
    <div className="kalevala">
      <div>
        <h1 className="predicH1">Kalevala</h1>
        <KalevalaForm launched={launched} setLaunched={setLaunched} />
        {launched ? (
          <KalevalaPrediction predictions={predictions} />
        ) : (
          <KalevalaWaiting />
        )}
      </div>
    </div>
  );
};

export default Kalevala;
