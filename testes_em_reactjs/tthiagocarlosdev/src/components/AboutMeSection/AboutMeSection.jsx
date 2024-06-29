import './AboutMeSection.css';

import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import LineWithArrow from '../LineWithArrow/LineWithArrow';

function AboutMeSection () {
    
    const profilePicture = "https://avatars.githubusercontent.com/u/76978748?v=4";

    return(
        <section id="about-me-section" className="display-flex-center-center">
            <div className="about-me-section page-width display-flex-center-center">
                <SectionSubtitle subtitle="Sobre Mim" />
                <LineWithArrow/>
                <div className="container-photo-and-text-about-me display-flex-center-center">
                    <figure className="display-flex-center-center">
                        <img id="photo" src={profilePicture} alt="Foto do Github" title="Foto do perfil do Github"/>
                    </figure>
                    <div className="container-text-about-me display-flex-center-center">
                        <p>Meu nome é Thiago Carlos, desenvolvedor Front-end com dois anos de experiência.</p>
                        <p>Minhas habilidades envolvem a criação da parte visual de um site, com botões, textos, imagens e vídeos na tela, além de navegação do site.</p>
                        <p>Sites responsivos que possibilitam ao usuário um uso confortável em Desktops e dispositivos menores, como  laptops, tablets e smartphones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMeSection;