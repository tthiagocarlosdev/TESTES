import '../../App.css';
import '../Footer/Footer.css'


function Footer(){
    return(
        <>
            <footer className="footer display-flex-center-center">
                <div className="container-footer-width display-flex-center-center page-width">
                    <p className="footer-text display-flex-center-center">Desenvolvido por <a href="https://tthiagocarlosdev.com.br/"> tthiagocarlosdev</a> </p>
                    <a className="footer-arrow display-flex-center-center" href="#header"> <i className="fa-solid fa-circle-arrow-up"></i></a>
                </div>
            </footer>
        </>
    );
};

export default Footer;