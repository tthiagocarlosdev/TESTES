import React from 'react';

import './Header.css'
import bandeiraPCPE from '../../assets/img/bandeiraPCPE.png';
import bandeiraDePernambuco from '../../assets/img/bandeiraPernambuco.png';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
  return ( 
    <header id='sectionHeader' className='sectionHeader displayFlexCenterCenter'>
        <NavigationBar />
        <div className='containerHeader displayFlexCenterCenter pageWidth'>
          <div className='containerTitleText displayFlexCenterCenter'>
            <h1 className='title'> LINKS PCPE </h1>
          </div>
          <div className='containerHeaderImages displayFlexCenterCenter'>
            {<img className='headerImages' src={bandeiraPCPE} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
            {<img className='headerImages' src={bandeiraDePernambuco} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
          </div>
        </div>    
    </header>
   );
}
 
export default Header;