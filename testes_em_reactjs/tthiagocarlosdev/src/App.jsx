import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'

import Card from './components/Card/Card';
import projects from './components/ProjectPaths/ProjectPaths';

import './App.css';

function App() {

  return (
    <>
      <Header/>
      <AboutMeSection />
      <TechnologiesSection />
      {projects.length > 0 ? (
          projects.map((projeto, index) => (
              <Card
                  key={index}
                  projectImage={projeto.projectImage}
                  projectText={projeto.projectText}
                  projectAddress={projeto.projectAddress}
              />
          ))
      ) : (
          <p className="paragrafoNenhumProjeto displayFlexCenterCenter">Nenhum projeto disponível no momento.</p>
      )}
      <Footer/>
    </>
  )
}

export default App
