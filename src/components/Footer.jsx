import Lk from '../assets/img/lk.png';
import Web from '../assets/img/web.png';
import Gh from '../assets/img/circle_github.png';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer--social">
        <a href="https://www.linkedin.com/in/mariosandoval-fullstack/" target="_blank" className="footer--social-lk"><img loading='lazy' src={Lk} alt="Logo Linkedin" /></a>
        <a href="https://github.com/greenfreaks" target="_blank"><img loading='lazy' src={Gh} alt="Logo Github" /></a>
        <a href="https://greenfreaks.github.io/portafolio-mariosandovalvelazquez/" target="_blank"><img loading='lazy' src={Web} alt="Logo Sitio web" /></a>
      </div>

      <div className="footer--texto">
        <p>Prueba técnica Pitz Group Mario Sandoval Velázquez</p>
      </div>
    </section>
  );
};

export default Footer;
