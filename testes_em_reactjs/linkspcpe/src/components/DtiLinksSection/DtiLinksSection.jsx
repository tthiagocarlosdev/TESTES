import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndDtiSystems from '../ListOfImagesAndSystems/ListOfImagesAndDtiSystems.jsx';
import Card from '../Card/Card.jsx';

const DtiLinksSection = () => {
    return ( 
        <section id="dti-section" className="links-sections dtiLinksSection page-width display-flex-center-center">
            <SectionSubtitle sectionSubtitle='Sistemas DTI' />

            <div className="project-card-container display-flex-center-center">
                {ListOfImagesAndDtiSystems.length > 0 ? (
                    ListOfImagesAndDtiSystems.map((projeto, index) => (
                        <Card
                            key={index}
                            image={projeto.image}
                            imageTitle={projeto.imageTitle}
                            systemName={projeto.systemName}
                            systemAddress={projeto.systemAddress}
                        />
                    ))
                ) : (
                    <p className="no-card-available display-flex-center-center">Nenhum card disponível no momento.</p>
                )}
            </div>

        </section>
     );
}
 
export default DtiLinksSection;