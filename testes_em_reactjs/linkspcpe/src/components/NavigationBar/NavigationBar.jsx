import React, { useEffect, useState } from "react";

import './NavigationBar.css'

const NavigationBar = () => {
    const generalSection = '#general-section';
    const queriesSection = '#queries-section';
    const otherSection = '#other-section';
    const dtiSection = '#dti-section';
    const downloadsSection = '#downloads-section';

    // Função para formatar a primeira letra em maiúsculo
    const firstLetterCapitalized = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    // Função para formatar a data e hora
    const dateAndTime = () => {
        const formatter = new Intl.DateTimeFormat("pt-br", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        });

        const dataDoComputador = new Date();
        return firstLetterCapitalized(formatter.format(dataDoComputador));
    }

    // State para armazenar a data e hora formatada
    const [currentDateAndTime, setCurrentDateAndTime] = useState('');

    useEffect(() => {
        // Atualiza a data e hora atual assim que o componente é montado
        setCurrentDateAndTime(dateAndTime());

        // Atualiza a data e hora a cada segundo
        const intervalId = setInterval(() => {
            setCurrentDateAndTime(dateAndTime());
        }, 1000); // 1000 milissegundos = 1 segundo

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <section className="section-navigator-bar display-flex-center-center">
            <div className="container-navigator-bar page-width display-flex-center-center">
                <div className="date-and-time-box display-flex-center-center">
                    <p className="paragraph-date-and-time">{currentDateAndTime}</p>
                </div>
                <nav className="navigation-box display-flex-center-center">
                    <a className='navigation-buttons' href={generalSection}  rel="noopener noreferrer">Geral</a>
                    <a className='navigation-buttons' href={queriesSection}  rel="noopener noreferrer">Consultas</a>
                    <a className='navigation-buttons' href={otherSection}  rel="noopener noreferrer">Outros</a>
                    <a className='navigation-buttons' href={dtiSection}  rel="noopener noreferrer">DTI</a>
                    <a className='navigation-buttons' href={downloadsSection}  rel="noopener noreferrer">Downloads</a>
                </nav>
            </div>
        </section>
     );
}
 
export default NavigationBar;