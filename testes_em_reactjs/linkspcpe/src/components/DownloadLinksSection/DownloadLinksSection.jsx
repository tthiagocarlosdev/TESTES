
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndDownloadsSystems from '../ListOfImagesAndSystems/ListOfImagesAndDownloadsSystems.jsx';
import Card from '../Card/Card.jsx';

const DownloadLinksSection = () => {
    return ( 
        <section id="downloads-section" className="links-sections downloadLinksSection page-width display-flex-center-center">
            <SectionSubtitle sectionSubtitle='Sistemas para Download' />

            <div className="project-card-container display-flex-center-center">
                {ListOfImagesAndDownloadsSystems.length > 0 ? (
                    ListOfImagesAndDownloadsSystems.map((projeto, index) => (
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
 
export default DownloadLinksSection;
