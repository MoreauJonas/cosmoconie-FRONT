const KalevalaPrediction = (props) => {
  const { predictions } = props;
  const r = Math.floor(Math.random() * (predictions.length - 1));

  return (
    <>
      {predictions && (
        <div className="kalevalaCtn">
          <h2 className="kalevalaTitle">
            Voici ce que vous réserve votre avenir
          </h2>
          {predictions
            .filter((prediction) => prediction === predictions[r])
            .map((prediction) => (
              <div className="kalevalaResponse">
                <p className="kalevalaP">{prediction.prédiction}</p>
                <img
                  src={require(`../assets/images/kalevala/${prediction.image}`)}
                  className="kalevalaImg"
                  alt={prediction.id}
                />
                <p className="kalevalaP">{prediction.moment}</p>
                <p className="kalevalaP">{prediction.reincarnation}</p>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default KalevalaPrediction;
