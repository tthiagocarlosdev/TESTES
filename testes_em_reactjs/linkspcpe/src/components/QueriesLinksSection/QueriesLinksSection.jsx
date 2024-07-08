
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndQuerySystems from '../ListOfImagesAndSystems/ListOfImagesAndQuerySystems';
import Card from '../Card/Card';


const QueriesLinksSection = () => {
  return ( 
    <section id="queries-section" className="links-sections queriesLinksSection page-width display-flex-center-center">
      <SectionSubtitle sectionSubtitle='Sistemas de Consultas' />

      <div className="project-card-container display-flex-center-center">
          {ListOfImagesAndQuerySystems.length > 0 ? (
              ListOfImagesAndQuerySystems.map((projeto, index) => (
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
 
export default QueriesLinksSection;