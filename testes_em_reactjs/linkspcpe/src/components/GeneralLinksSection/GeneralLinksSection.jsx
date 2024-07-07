import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import ListOfImagesAndSystems from '../ListOfImagesAndSystems/ListOfImagesAndGeneralSystems';
import Card from '../Card/Card';

 const GeneralLinksSection = () => {

  return ( 
    <section id="general-section" className="links-sections generalLinksSection page-width display-flex-center-center">
      <SectionSubtitle sectionSubtitle='Sistemas Gerais' />

      <div className="project-card-container display-flex-center-center">
          {ListOfImagesAndSystems.length > 0 ? (
              ListOfImagesAndSystems.map((projeto, index) => (
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
  
 export default GeneralLinksSection;