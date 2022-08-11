import tetecalimecon from "../assets/images/tetecalimecon.png";

const KalevalaWainting = () => {
  return (
    <div className="kalevalaWaiting">
      <h1 className="kalevalaWaitingTitle">Votre avenir bientôt disponible</h1>
      <div className="animDiv">
        <img src={tetecalimecon} alt="tarot" className="tetecalimecon" />
      </div>
    </div>
  );
};

export default KalevalaWainting;
