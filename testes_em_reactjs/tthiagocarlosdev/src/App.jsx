import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SectionSubtitle from './components/SectionSubtitle/SectionSubtitle';
import LineWithArrow from './components/LineWithArrow/LineWithArrow';

import './App.css';

function App() {

  return (
    <>
      <Header/>
      <SectionSubtitle subtitle="Sobre mim" />
      <LineWithArrow />
      <Footer/>
    </>
  )
}

export default App
