import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import '../components/Components.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Registration = () => {
  let navigate = useNavigate()

  const [inputName, setInputName] = useState("")
  const [inputStandard, setInputStandard] = useState("")
  const [inputKettlebellWeight, setInputKettlebellWeight] = useState()
  const [inputExamTime, setInputExamTime] = useState()

  const [athlete, setAthlete] = useState({
    name: "",
    standard: "",
    kettlebellWeight: 0,
    examTime: 0,
  })

  const handleAthlete = () => {
    const newAthlete = {
      name: inputName,
      standard: inputStandard,
      kettlebellWeight: inputKettlebellWeight,
      examTime: inputExamTime,
    }

    setAthlete([newAthlete])

    console.log(newAthlete)
  }

  return (
    <div className="container-registration">
      <Header/>
        <div className="athlete-form">

          <h1 className="title-athlete-form"> Registro do atleta: </h1>
          <p className="text-athlete-form"> Digite as informações  abaixo: </p>
          
            <div className="inputs-athlete">
              <div className="standard-form">
                <label className="input" > Nome do Atleta: </label>
                <input 
                  type="text"
                  onChange={e => setInputName(e.target.value.toUpperCase())}
                  value={inputName}
                  className="input-athlete-name"
                  placeholder="Digite o nome..."
                />  
              </div>

              <div className="standard-form">
                <label className="input" > Prova do atleta: </label>
                <input 
                  type="text"
                  onChange={e => setInputStandard(e.target.value.toUpperCase())}
                  value={inputStandard}
                  className="input-athlete-test"
                  placeholder="Digite a prova..."
                />  
              </div>

              <div className="standard-form">
                <label className="input" > Peso Kettlebell: </label>
                <input 
                  type="number"
                  onChange={e  => setInputKettlebellWeight(Number(e.target.value))}
                  value={inputKettlebellWeight}
                  className="input-kettlebell-weight"
                  placeholder="Digite o peso em kg..."
                />  
              </div>

              <div className="standard-form">
                <label className="input" > Tempo da prova: </label>
                <input 
                  type="number"
                  onChange={e => setInputExamTime(Number(e.target.value))}
                  value={inputExamTime}
                  className="input-exam-time"
                  placeholder="Digite o tempo em min..."
                />  
              </div>
            </div>   

          {/* <Button
            type="submit"
            onClick={()=> navigate('/timer')} 
            // handleAthlete={handleAthlete}
            className="load-test-page"
          > Começar </Button> */}

          <Button
            onClick={handleAthlete} 
            className="load-test-page"
          > Carregar </Button>
          
        </div>
        
      <Footer/>
    </div>
    );
}
 
export default Registration;