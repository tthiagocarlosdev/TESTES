import './ContactSection.css'
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import LineWithArrow from '../LineWithArrow/LineWithArrow';

function ContactSection () {
    const emailAddress = 'tthiagocarlos.dev@gmail.com';
    const numberWhatsapp = '353831578001';
    const addressYoutube = 'https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw';
    const githubAddress = 'https://github.com/tthiagocarlosdev';
    const addressLinkedin = 'https://www.linkedin.com/in/thiago-carlos-80a480244/';
    const addressInstagram = 'https://www.instagram.com/tthiagocarlos.dev/';

    function copyEmail () {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                console.log('Email copiado para a área de transferência:', emailAddress);
                alert('Email copiado para a área de transferência: ' + emailAddress);
            })
            .catch(error => {
                console.error('Erro ao copiar email para a área de transferência:', error);
                alert('Erro ao copiar email para a área de transferência. Por favor, tente novamente.');
            });
    };

    return (
        <section id="contact-section" className="display-flex-center-center">
            <div className="contact-section page-width display-flex-center-center">
                <SectionSubtitle subtitle="Contatos" />
                <LineWithArrow />
                <div className="contact-link-container display-flex-center-center">
                    <a className="contact-links display-flex-center-center" target="_blank" href={`https://api.whatsapp.com/send?phone=${numberWhatsapp}`}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <p>WhatsApp</p>
                    </a>
                    <a className="contact-links display-flex-center-center" onClick={copyEmail} href="#!">
                        <i className="fa-regular fa-envelope"></i>
                        <p>E-mail</p>
                    </a>
                    <a className="contact-links display-flex-center-center" target="_blank" href={addressYoutube}>
                        <i className="fa-brands fa-youtube"></i>
                        <p>YouTube</p>
                    </a>
                    <a className="contact-links display-flex-center-center" target="_blank" href={githubAddress}>
                        <i className="fa-brands fa-github"></i>
                        <p>GitHub</p>
                    </a>
                    <a className="contact-links display-flex-center-center" target="_blank" href={addressLinkedin}>
                        <i className="fa-brands fa-linkedin"></i>
                        <p>Linkedin</p>
                    </a>
                    <a className="contact-links display-flex-center-center" target="_blank" href={addressInstagram}>
                        <i className="fa-brands fa-instagram"></i>
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;