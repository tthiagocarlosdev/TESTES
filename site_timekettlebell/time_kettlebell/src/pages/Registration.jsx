import { useState, useEffect } from 'react';
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

  const [ loaded, setLoaded ] = useState(false)

  const handleAthlete = () => {
    const newAthlete = {
      athleteName: inputName,
      standard: inputStandard,
      kettlebellWeight: inputKettlebellWeight,
      examTime: inputExamTime,
    }

    setAthlete([newAthlete])

    if(newAthlete.athleteName == "" || newAthlete.standard == "" || newAthlete.kettlebellWeight == 0 || newAthlete.examTime == 0) {
      alert("Nenhum campo pode ficar em branco!")
    } else {
      setLoaded(true)  
    }
    

    console.log(newAthlete)
    console.log(loaded)
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
                  onChange={e => setInputName(e.target.value)}
                  value={inputName}
                  className="input-athlete-name"
                  placeholder="Digite o nome..."
                />  
              </div>

              <div className="standard-form">
                <label className="input" > Prova do atleta: </label>
                <input 
                  type="text"
                  onChange={e => setInputStandard(e.target.value)}
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

          { loaded ? (
             <Button
              type="submit"
              onClick={()=> navigate('/timer',{inputName})} 
              className="start-test-button"
            > Começar </Button> 
          ) : (
            <Button
              onClick={handleAthlete} 
              className="load-test-button"
            > Carregar </Button>
          ) }

        </div>
        
      <Footer/>
    </div>
    );
}
 
export default Registration;