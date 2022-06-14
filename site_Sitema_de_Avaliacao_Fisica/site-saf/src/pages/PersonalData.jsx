import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header'
import Button from '../components/Button'

import './Pages.css'

const PersonalData = () => {
    const navigate = useNavigate();

    return ( 
        <>
            <div className="personal-data">
                <div className="header">
                    <Header > Physical Assessment System </Header>
                </div>
                
                <div className="container">
                    
                    <div className="page-title">
                        <h1> Personal Data </h1>
                    </div>
                    
                    <div className="input-name">
                        <h1> Name </h1>
                        <input type="text" className="user-name-input" placeholder={"Full name..."}/>
                    </div>
                    
                </div>

                <div className="button-next">
                    <Button onClick={() => navigate('/finalResult')} > Next </Button>
                </div>
                
            </div>
        </>
     );
}
 
export default PersonalData;