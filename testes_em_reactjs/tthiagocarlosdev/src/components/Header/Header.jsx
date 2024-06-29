import "../Header/Header.css"
import "../../App.css";

function Header () {
    return (
        <header id="header" className="display-flex-center-center">
            <nav className="container-nav page-width ">
                <a className="header-links" href="#about-me-section">Sobre mim</a>
                <a className="header-links" href="#sectionTecnologias">Tecnologias</a>
                <a className="header-links" href="#sectionProjetos">Projetos</a>
                <a className="header-links" href="#sectionContatos">Contatos</a>
            </nav>
            <div className="container-title-text page-width display-flex-center-center">
                <h1>Olá! Meu nome é Thiago Carlos e</h1>
                <h2>Eu sou desenvolvedor front-end</h2>
            </div>
            
        </header>
    );
};

export default Header;