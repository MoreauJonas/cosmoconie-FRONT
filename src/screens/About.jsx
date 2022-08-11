import about from "../assets/data/about.json";
import { useState } from "react";

const About = () => {
  const [persons, setPersons] = useState(about);
  return (
    <div className="about">
      <h1 className="aboutTitle">Une rencontre que vous n'oublierez pas!</h1>
      <p className="aboutResum">
        Vous avez des doutes sur la théorie loufoque prétendant que la Terre est
        ronde, vous trouvez que le ciel est un peu trop “lisse” pour être autre
        chose qu’une coquille ? <br></br>Vous n’êtes pas seuls ! Venez rejoindre
        notre communauté avant qu’il ne soit trop tard, et préparez votre
        prochaine vie… dès aujourd’hui et devenez comme, nous, un véritable
        Cosmocon.
        <br></br>
        <br></br>
        <span className="aboutGroup">
          Voici les quelques membres les plus fervents de notre culte, que vous
          aurez LA CHANCE de côtoyer en adhérant à la Cosmoconie.
        </span>
      </p>
      {persons && (
        <div className="aboutScr">
          {persons.map((person) => (
            <div className="aboutContainer">
              <img
                src={require(`../assets/images/about/${person.photo}`)}
                className="aboutImage"
                alt={person.id}
              />
              <div className="aboutDescr">
                <p id="aboutName">
                  <span className="aboutFront">Ton prénom c'est quoi?</span>{" "}
                </p>
                <p>{person.prénom}</p>

                <p id="aboutName">
                  <span className="aboutFront">Et ton nom?!</span>{" "}
                </p>
                <p>{person.nom}</p>
                <p>
                  <span className="aboutFront">
                    Parait que tu as une particularité bien à toi??
                  </span>{" "}
                </p>
                <p>{person.particularité}</p>

                <p>
                  <span className="aboutFront">
                    Mais tu as vraiment un rôle dans ce culte?
                  </span>{" "}
                </p>
                <p>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
