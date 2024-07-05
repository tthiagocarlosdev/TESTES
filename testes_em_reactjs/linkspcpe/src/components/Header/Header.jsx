import React from 'react';

import './Header.css'
import bandeiraPCPE from '../../assets/img/bandeiraPCPE.png';
import bandeiraDePernambuco from '../../assets/img/bandeiraPernambuco.png';
import NavigationBar from '../NavigationBar/NavigationBar';

const Header = () => {
  return ( 
    <header id='section-header' className='section-header display-flex-center-center'>
        <NavigationBar />
        <div className='container-header display-flex-center-center page-width'>
          <div className='container-title-text display-flex-center-center'>
            <h1 className='title'> LINKS PCPE </h1>
          </div>
          <div className='container-header-images display-flex-center-center'>
            {<img className='header-images' src={bandeiraPCPE} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
            {<img className='header-images' src={bandeiraDePernambuco} alt="Bandeira da Polícia Civil de Pernambuco" title="Bandeira da Polícia Civil de Pernambuco"/>}
          </div>
        </div>    
    </header>
   );
}
 
export default Header;