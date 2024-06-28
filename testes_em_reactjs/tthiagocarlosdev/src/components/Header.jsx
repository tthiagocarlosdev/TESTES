import "./Header.css"
import "../App.css";

function Header () {
    return (
        <header id="cabecalho" className="displayFlexCenterCenter">
            <nav className="containerNav larguraDaPagina ">
                <a className="linksCabecalho" href="#sectionSobreMim">Sobre mim</a>
                <a className="linksCabecalho" href="#sectionTecnologias">Tecnologias</a>
                <a className="linksCabecalho" href="#sectionProjetos">Projetos</a>
                <a className="linksCabecalho" href="#sectionContatos">Contatos</a>
            </nav>
            <div className="textoDoTitulo larguraDaPagina displayFlexCenterCenter">
                <h1>Olá! Meu nome é Thiago Carlos e</h1>
                <h2>Eu sou desenvolvedor front-end</h2>
            </div>
            
        </header>
    );
};

export default Header;