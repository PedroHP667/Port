import "../css/Home.css";
import Snorlax from '../images/snorlax.png'

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="intro">
          <h1>Olá, eu sou<br/> Pedro Henrique</h1>
          <p>Desenvolvedor Front-end especializado em criar<br/>experiências web modernas e responsivas</p>
          <div className="buttons">
            <button className="contact-btn">Entre em contato</button>
            <button className="projects-btn">Ver projetos</button>
          </div>
        </div>
        <div className="profile-picture">
          <img src={Snorlax} alt="Perfil" />
        </div>
      </header>
    </div>
  );
}
