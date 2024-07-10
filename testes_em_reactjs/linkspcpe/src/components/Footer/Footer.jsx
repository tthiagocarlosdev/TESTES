import './Footer.css'

const Footer = () => {
  const portfolioAddress = 'https://tthiagocarlosdev.com.br';
  const sectionHeader = '#section-header';

  return (
    <footer className="footer display-flex-center-center">
      <div className="container-footer-width display-flex-center-center page-width">
        <p className="footer-text display-flex-center-center">Desenvolvido por <a href={portfolioAddress} target='_blanck'> tthiagocarlosdev</a> </p>
        <a className="footer-arrow display-flex-center-center" href={sectionHeader}> <i className="fa-solid fa-circle-arrow-up"></i></a>
      </div>
    </footer>
  );
}
 
export default Footer;
