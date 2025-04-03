export default function Projeto(){
    return(
        <div className="projetos-container">
        <h1>Meus Projetos</h1>
        <section id="projetos" className="section">
          <div className="project-list">
            <div className="project">
              <h3>Projeto 1</h3>
              <p>Descrição breve do projeto, como o que foi feito e qual a sua importância.</p>
              <a href="" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </div>
            <div className="project">
              <h3>Projeto 2</h3>
              <p>Descrição breve do projeto, como o que foi feito e qual a sua importância.</p>
              <a href="" target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </div>
            {}
          </div>
        </section>
      </div>
  
    )
}