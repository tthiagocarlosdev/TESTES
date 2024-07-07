import './App.css'

import Header from './components/Header/Header';
import SectionSubtitle from './components/SectionSubtitle/SectionSubtitle';
import ListOfImagesAndSystems from '../src/components/ListOfImagesAndSystems/ListOfImagesAndGeneralSystems';
import Card from './components/Card/Card';

function App() {

  return (
    <>
      <Header />
      
      <SectionSubtitle sectionSubtitle='Teste' />
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
              <p className="noCardAvailable displayFlexCenterCenter">Nenhum card disponível no momento.</p>
      )}
    </>
  )
}

export default App
