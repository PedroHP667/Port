import { Link } from "react-router-dom"
import '../css/Nav.css'
import Github from "../images/github.png" 
import Linkedin from "../images/linlogo.png" 

export default function Navbar(){
    return(
        <div className="TUDOO">
            <main className="main-nav">
                <nav className="nav">
                    <div className="nav-links">
                        <Link href="/" className="link-ph">
                            Pedro Henrique
                        </Link>
                        <Link href="#sobre" className="link">
                            Sobre
                        </Link>
                        <Link href="#projetos" className="link">
                            Projetos
                        </Link>
                        <Link href="#habilidades" className="link">
                            Habilidades
                        </Link>
                        <Link href="#contato" className="link">
                            Contato
                        </Link>
                        <Link to="https://github.com/PedroHP667" className="link-logo">
                         <img src={Github} alt="GitHub" className="logo-g" />
                        </Link>
                        <Link href="#linkedin" className="link-logo">
                          <img src={Linkedin} alt="Linkedin" className="logo-l"/>
                        </Link>
                    </div>
                </nav>
            </main>
        </div>
    )
}