import { useState } from "react";

const KalevalaForm = (props) => {
  const { launched, setLaunched } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [genre, setGenre] = useState("");
  const [size, setSize] = useState("");
  const [recipe, setRecipe] = useState("");

  return (
    <div className="predicFormContainer">
      <form className="predicForm">
        <p className="predicTitle">
          Merci de remplir ce formulaire, il vous donnera accès à une prédiction
          personnalisée
        </p>
        <p className="predicP">
          Soyez honnête dans vos réponses, celle-ci n'en sera que plus
          précise...
        </p>
        <div className="predicChamp">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="entrez votre prénom"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="predicChamp">
          <label htmlFor="lastname">Nom de famille</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="entrez votre nom de famille"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="predicChamp">
          <label htmlFor="birthday">Date de naissance</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            placeholder="entrez votre date de naissance"
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </div>
        <div className="predicChamp">
          <label htmlFor="genre">Genre choisi</label>
          <select
            className="predicSelect"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option className="predicOption" value="...">
              ...
            </option>
            <option className="predicOption" value="Féminin">
              Féminin
            </option>
            <option className="predicOption" value="Masculin">
              Masculin
            </option>
            <option className="predicOption" value="Non Binaire">
              Non binaire
            </option>
          </select>
        </div>
        <div className="predicChamp">
          <label htmlFor="size">Pointure</label>
          <input
            type="text"
            id="size"
            name="size"
            placeholder="entrez votre pointure"
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div className="predicChamp">
          <label htmlFor="recipe">Recette à base d'oeuf préférée</label>
          <select
            className="predicSelect"
            onChange={(e) => setRecipe(e.target.value)}
          >
            <option className="predicOption" value="...">
              ...
            </option>
            <option className="predicOption" value="Oeufs brouillés">
              Oeufs brouillés
            </option>
            <option className="predicOption" value="Oeufs au plat">
              Oeufs au plat
            </option>
            <option className="predicOption" value="Omelette">
              Omelette
            </option>
            <option className="predicOption" value="Oeufs parfaits">
              Oeufs parfaits
            </option>
            <option className="predicOption" value="Oeufs à la coque">
              Oeufs à la coque
            </option>
          </select>
        </div>

        <button
          className="predicFormButton"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setLaunched(true);
          }}
        >
          Recevoir sa prédiction
        </button>
      </form>
    </div>
  );
};

export default KalevalaForm;
