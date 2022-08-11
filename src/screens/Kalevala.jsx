import { useState } from "react";
import KalevalaForm from "../components/KalevalaForm";
import KalevalaPrediction from "../components/KalevalaPrediction";
import KalevalaWaiting from "../components/KalevalaWaiting";
import kalevala from "../assets/data/kalevala.json";

const Kalevala = () => {
  const [predictions, setPredictions] = useState(kalevala);
  const [launched, setLaunched] = useState(false);
  console.log("launched de screen ?", launched);
  return (
    <div>
      <h1 className="predicH1">Kalevala</h1>
      <KalevalaForm launched={launched} setLaunched={setLaunched} />
      {launched ? (
        <KalevalaPrediction predictions={predictions} />
      ) : (
        <KalevalaWaiting />
      )}
    </div>
  );
};

export default Kalevala;
