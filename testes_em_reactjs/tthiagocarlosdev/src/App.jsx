import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutMeSection from './components/AboutMeSection/AboutMeSection';
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'
import ProjectSession from './components/ProjectSession/ProjectSession';

import './App.css';

function App() {

  return (
    <>
      <Header/>
      <AboutMeSection />
      <TechnologiesSection />
      <ProjectSession />
      <Footer/>
    </>
  )
}

export default App
