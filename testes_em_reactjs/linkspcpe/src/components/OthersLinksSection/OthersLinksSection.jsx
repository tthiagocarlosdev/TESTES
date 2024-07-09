
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndOthersSystems from '../ListOfImagesAndSystems/ListOfImagesAndOthersSystems.jsx';
import Card from '../Card/Card.jsx';

const OthersLinksSection = () => {
    return ( 
        <section id="other-section" className="links-sections othersLinksSection page-width display-flex-center-center">
        <SectionSubtitle sectionSubtitle='Outros Sistemas' />

        <div className="project-card-container display-flex-center-center">
            {ListOfImagesAndOthersSystems.length > 0 ? (
                ListOfImagesAndOthersSystems.map((projeto, index) => (
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
 
export default OthersLinksSection;