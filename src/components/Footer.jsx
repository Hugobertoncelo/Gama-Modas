import "./Footer.css";

import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

import logo from "/media/logo1.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="Logo Gama Modas" />
      <hr className="footer-hr" />
      <div className="footer-info">
        <div className="footer-1">
          <h2>Sobre</h2>
          <span>
            👗 Gama Modas — Moda para toda a família!
            <br />
            <br />
            Na Gama Modas, você encontra estilo, conforto e qualidade em um só
            lugar. Trabalhamos com moda feminina, masculina e infantil,
            oferecendo peças modernas, versáteis e acessíveis para todas as
            idades.
            <br />
            <br />
            👚 Looks femininos que valorizam sua identidade.
            <br />
            👕 Roupas masculinas com estilo e praticidade.
            <br />
            🧒 Moda infantil divertida, confortável e cheia de personalidade.
            <br />
            <br />
            Além disso, garantimos um atendimento de excelência e condições
            especiais.
            <br />
            <br />
            Aqui na Gama Modas, vestir bem é para todos. Vista seu estilo. Vista
            Gama Modas.
          </span>
        </div>
        <div className="footer-2">
          <h2>Contato</h2>
          <div>
            <a
              href="https://www.instagram.com/loja.gamamodas/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://wa.me/5528999697930"
              target="_blank"
              rel="noreferrer"
            >
              <BsWhatsapp size={30} />
            </a>
            <a
              href="mailto:gamamodas@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMailOutline size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* devAutor com ícones */}
      <div className="devAutor">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/hugobertoncelo"
            target="_blank"
            rel="noreferrer"
          >
            Hugo Bertoncelo
          </a>
        </p>
        <div className="dev-icons">
          <a
            href="https://github.com/Hugobertoncelo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://wa.me/5528999453033"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/hugobertoncelo"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://hugobertoncelo.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGlobe size={22} />
          </a>
          <a
            href="mailto:hugobertoncelo@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMailOutline size={27} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
