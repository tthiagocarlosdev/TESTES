import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Registration = () => {
  let navigate = useNavigate()  

  const [inputName, setInputName] = useState("")
  const [inputStandard, setInputStandard] = useState("")
  const [inputKettlebellWeight, setInputKettlebellWeight] = useState()

  function handleInputName(e){
    setInputName(e.target.value)
  }

  function handleInputStandard(e){
    setInputStandard(e.target.value)
  }

  function handleInputKettlebellWeight(e){
    setInputKettlebellWeight(e.target.value)
  }

  console.log(inputName, inputStandard, inputKettlebellWeight)

  return (
    <div className="container-registration">
      <Header/>
        <div className="athlete-form">

          <h1 className="title-athlete-form"> Registro do atleta: </h1>
          <p className="text-athlete-form"> Digite as informações  abaixo: </p>

          <div className="standard-form">
            <label className="input" > Nome do Atleta: </label>
            <input 
              type="text"
              onChange={handleInputName}
              value={inputName}
              className="input-athlete-name"
              placeholder="Digite o nome..."
            />  
          </div>

          <div className="standard-form">
            <label className="input" > Prova: </label>
            <input 
              type="text"
              onChange={handleInputStandard}
              value={inputStandard}
              className="input-athlete-test"
              placeholder="Digite a prova..."
            />  
          </div>

          <div className="standard-form">
            <label className="input" > Peso Kettlebell: </label>
            <input 
              type="number"
              onChange={handleInputKettlebellWeight}
              value={inputKettlebellWeight}
              className="input-kettlebell-weight"
              placeholder="Digite o peso em kg..."
            />  
          </div>

          <Button 
            onClick={() => navigate('/timer')} 
            className="load-test-page"
          > Começar </Button>
          
        </div>
        
      <Footer/>
    </div>
    );
}
 
export default Registration;