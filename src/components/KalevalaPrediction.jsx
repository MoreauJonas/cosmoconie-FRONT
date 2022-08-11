import tarot from "../assets/images/tarot.jpg";

const KalevalaPrediction = (props) => {
  const { predictions } = props;
  const r = Math.floor(Math.random() * (predictions.length - 1));
  // const r = 12;

  return (
    <>
      {predictions && (
        <div className="kalevalaCtn">
          <h2 className="kalevalaTitle">
            Voici ce que vous réserve votre avenir
          </h2>
          <div className="cardsCtn">
            {predictions
              .filter((prediction) => prediction === predictions[r])
              .map((prediction) => (
                <div className="event-flip-box">
                  <div className="event-flip-box-front text-center">
                    <img src={tarot} alt="tarot" className="event-flip-image" />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">Prédiction</p>
                    </div>
                  </div>
                  <div className="event-flip-box-back text-center">
                    <img
                      src={require(`../assets/images/kalevala/${prediction.image}`)}
                      className="event-flip-image"
                      alt={prediction.id}
                    />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">{prediction.prédiction}</p>
                    </div>
                  </div>
                </div>
              ))}
            {predictions
              .filter((prediction) => prediction === predictions[r])
              .map((prediction) => (
                <div className="event-flip-box">
                  <div className="event-flip-box-front text-center">
                    <img src={tarot} alt="tarot" className="event-flip-image" />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">Comment vous allez mourir</p>
                    </div>
                  </div>
                  <div className="event-flip-box-back text-center">
                    <img
                      src={require(`../assets/images/kalevala/${prediction.image}`)}
                      className="event-flip-image"
                      alt={prediction.id}
                    />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">{prediction.moment}</p>
                    </div>
                  </div>
                </div>
              ))}

            {predictions
              .filter((prediction) => prediction === predictions[r])
              .map((prediction) => (
                <div className="event-flip-box">
                  <div className="event-flip-box-front text-center">
                    <img src={tarot} alt="tarot" className="event-flip-image" />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">Votre ré-incarnation</p>
                    </div>
                  </div>
                  <div className="event-flip-box-back text-center">
                    <img
                      src={require(`../assets/images/kalevala/${prediction.reincarImg}`)}
                      className="event-flip-image"
                      alt={prediction.id}
                    />
                    <div className="inner event-color-white">
                      <p className="kalevalaP">{prediction.reincarnation}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="kalevalaDiv">
            <p className="kalevalaFuture">
              Si vous voulez vous préparer correctement pour le jour J et vous
              assurer un avenir "ailleurs", rendez-vous sur notre boutique
              <a href="/shop">"Le marché sur des oeufs"</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default KalevalaPrediction;
