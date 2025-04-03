function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
        <ul className="footer-links">
          <li><a href="/">Início</a></li>
          <li><a href="/Sobre">Sobre</a></li>
          <li><a href="/Projeto">Projetos</a></li>
          <li><a href="/Habilidades">Habilidades</a></li>
          <li><a href="/Contatos">Contato</a></li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;