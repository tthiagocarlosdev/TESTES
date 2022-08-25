import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Button from '../components/Button'
import Footer from '../components/Footer'

import './pages.css'

const Home = () => {
  let navigate = useNavigate()
  
  // const [athlete, setAthlete] = useState({
  //   name:"",
  //   standard: "",
  //   kettlebellWeight: 0,
  //   examTime: 0,
  // })

  // function athleteRegistration(athlete){
  //   setAthlete({
  //     name: athlete.inputName,
  //     standard: athlete.inputStandard,
  //     kettlebellWeight: athlete.inputKettlebellWeight,
  //     examTime: athlete.inputExamTime,
  //   })
  // }
  
  return ( 
    <div className="container-home">
      <Header/>
        <div className="box-registration">
          <p className="welcome" > Bem-vindo ao Campeonato de Kettlebell 2022 </p>
          <p className="welcome"> Clique no botão abaixo para registrar o Atleta.</p>
          <Button className="registration-button" onClick={() => navigate('/registration')} > Registrar Atleta </Button>
        </div>
      <Footer/>
    </div>
   );
}
 
export default Home;