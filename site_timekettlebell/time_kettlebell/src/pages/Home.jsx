import React from 'react';
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Button from '../components/Button'
import Footer from '../components/Footer'

import './pages.css'

const Home = () => {
  let navigate = useNavigate()
  
  return ( 
    <div className="container-home">
      <Header/>
        <div className="box-registration">
          <p className="welcome" > Bem-vindo ao Campeonato de Kettlebell 2022 </p>
          <p className="welcome"> Clique no botão abaixo para registrar o Atleta.</p>
          <Button className="registration-button"onClick={() => navigate('/registration')} > Registrar Atleta </Button>
        </div>
      <Footer/>
      {/* <div className="container-buttons">
        <div className="button-registration">
          <Button onClick={() => navigate('/registration')} > Registration </Button>
        </div>
        <div className="button-start">
          <Button onClick={() => navigate('/timer')} > Start </Button>
        </div>
      </div> */}
      
    </div>
   );
}
 
export default Home;