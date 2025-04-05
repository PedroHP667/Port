import "../css/Home.css";
import Snorlax from '../images/snorlax.png'
import Pikachu from '../images/pikachu.gif'

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
      <section id="sobre" className="section">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor front-end apaixonado por criar interfaces de usuário elegantes e<br /> funcionais. Com experiência em React, python, JavaScript e dentre outros. me dedico a construir aplicações web<br /> modernas que oferecem excelente experiência ao usuário. Minha abordagem combina design<br /> criativo com código limpo e eficiente.<br/> <br/> Além do desenvolvimento, tenho interesse em UX/UI design e estou sempre aprendendo novas<br /> tecnologias para expandir minhas habilidades. Acredito que a melhor tecnologia é aquela que<br /> resolve problemas reais de forma simples e eficaz.</p>
        <hr className="linha"></hr>
      </section>
      <section id="projetos" className="section2">
        <h2>Meus Projetos</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src={Pikachu} alt="pikachu"/>
            <div className="project-buttons">
              <button className="code-btn">Código</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>

          <div className="project-card">
            <img src={Pikachu} alt="pikachu"/>
            <div className="project-buttons">
              <button className="code-btn">Código</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>

          <div className="project-card">
            <img src={Pikachu} alt="pikachu"/>
            <div className="project-buttons">
              <button className="code-btn">Código</button>
              <button className="demo-btn">Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
