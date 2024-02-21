import Fb from '../assets/img/fb.png';
import Tw from '../assets/img/tw.png';
import In from '../assets/img/in.png';
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer--social">
        <a href="https://www.facebook.com/thePITZapp/" target="_blank" className="footer--social-fb"><img src={Fb} alt="Logo Facebook" /></a>
        <a href="https://twitter.com/thepitzapp?lang=es" target="_blank" className="footer--social-tw"><img src={Tw} alt="Logo Twitter" /></a>
        <a href="https://www.instagram.com/thepitzapp/" target="_blank" className="footer--social-in"><img src={In} alt="Logo Instagram" /></a>
      </div>

      <div className="footer--texto">
        <p>Prueba técnica Pitz Group Mario Sandoval Velázquez</p>
      </div>
    </section>
  );
};

export default Footer;
