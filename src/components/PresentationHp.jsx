import commencement from "../assets/images/commencement.jpg";
import cali from "../assets/images/cali.jpg";
import crepe from "../assets/images/crepe.jpg";
import paysOiseaux from "../assets/images/paysOiseaux.jpg";

const PresentationHp = () => {
  return (
    <div className="Pres">
      <div className="flexT L"></div>
      <h1 className="Title">Au commencement...</h1>
      <div className="comIntro flex">
        <img src={commencement} alt="Commencement" />
        <div className="text">
          <p className="cIntro">
            Le monde fut créé par l'explosion d'un œuf d'oiseau. Le ciel s’est
            alors constitué par le haut de la coquille de cet œuf et de ce fait
            soutenu par une colonne joignant la terre à l'étoile polaire.
            <br />
            La rotation autour de ladite colonne crée un immense tourbillon au
            niveau du sol, qui donne l'accès au monde des morts, « Tuonela »
            ville sombre et sans vie où dorment les morts sans aucune
            distinction n’est faite entre « bon » ou « mauvais », pour
            l’éternité.
            <br />
            La terre est donc plate et circulaire.
            <br />
            Aux limites de notre terre se trouve « Lintukoto » (« la maison des
            oiseaux »), cette région chaude où les oiseaux vont passer l'hiver.
            <br />
            Ces mêmes oiseaux qui apportent l'âme des humains au moment de la
            naissance et l'emportent au moment de la mort.
          </p>
        </div>
      </div>
      <div className="flexT R">
        <h1 className="Title">Notre Grand Calimecon</h1>
      </div>
      <div className="gourouP noFlex">
        <img className="pImg" src={cali} alt="calimecon" />
        <div className="text">
          <p className="gInfo">
            Pour nous guider dans notre chemin de vie, notre vénéré Calimecon !
            <br />
            Son leadership nous permet de voyager en état de transe par-delà le
            « Tuonela », et communiquer avec nos défunts, cela après qu’ils aient
            traversé une rivière sombre.
            <br />
            Sa sagesse et son empathie apaisent nos esprits et nous lient tous
            au « Lintukoto »
          </p>
        </div>
      </div>
      <div className="flexT L">
        <h1 className="Title">Mes Chers Cosmocons...</h1>
      </div>
      <div className="theEnd flex">
        <img src={crepe} className="crepe" alt="crepe" />
        <div className="text">
          <p className="teInfo">
            La fin est proche…
            <br />
            Celle-ci se déroulera prochainement, très prochainement.
            <br />
            Grâce à notre bien aimé Calimecon, nos âmes pourront être sauvées,
            mais pas nos corps.
            <br />
            La prophétie établit de manière très claire, qu’aussi vrai que la
            Terre est plate, une pluie de farine interstellaire s’abattra sur la
            Terre, battant violemment notre ciel fait d'œuf et que ce phénomène,
            associé au réchauffement climatique, transformera notre magnifique
            planète …. en crêpe…{" "}
          </p>
        </div>
      </div>
      <div className="flexT R">
        <h1 className="Title">
          Mes très chers Cosmocons, ceci n’est pas la fin !
        </h1>
      </div>
      <div className="theSuit noFlex">
        <img src={paysOiseaux} className="paysOiseaux" alt="The Suit" />
        <div className="text">
          <p className="sInfo">
            Grâce aux préparations et diverses incantations de notre Calimecon
            (disponibles dans notre marché), nos âmes pourront trouver la
            rédemption, et vivre une réelle réincarnation !<br />
            Ayez foi en ce renouveau et en Calimecon notre rédempteur !
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresentationHp;
