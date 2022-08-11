import { Facebook, Linkedin, Twitter, Youtube } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://fr-fr.facebook.com/WildCodeSchool/" target="blank">
          <Facebook color="#ffcb77" size={35} />
        </a>
        <a
          href="https://www.linkedin.com/school/wild-code-school/"
          target="blank"
        >
          <Linkedin color="#ffcb77" size={35} />
        </a>

        <a href="https://mobile.twitter.com/wcs_hf" target="blank">
          <Twitter color="#ffcb77" size={35} />
        </a>
        <a href="https://www.youtube.com/watch?v=I_yBPFsJNyk" target="blank">
          <Youtube color="#ffcb77" size={35} />
        </a>
      </div>
      <p className="footerC">&copy;Cosmoconie</p>
    </div>
  );
};

export default Footer;
