import '../../App.css';
import '../Footer/Footer.css'


function Footer(){
    return(
        <>
            <footer className="rodape displayFlexCenterCenter">
                <div className="containerLarguraDoRodape displayFlexCenterCenter larguraDaPagina">
                    <p className="textoRodape displayFlexCenterCenter">Desenvolvido por <a href="https://tthiagocarlosdev.com.br/"> tthiagocarlosdev</a> </p>
                    <a className="setaRodape displayFlexCenterCenter" href="#cabecalho"> <i className="fa-solid fa-circle-arrow-up"></i></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;