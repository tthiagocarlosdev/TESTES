import React, { useEffect, useState } from "react";

import './NavigationBar.css'

const NavigationBar = () => {
    const generalSection = '#generalSection';
    const queriesSection = '#queriesSection';
    const otherSection = '#otherSection';
    const dtiSection = '#dtiSection';
    const downloadsSection = '#downloadsSection';

    // Função para formatar a primeira letra em maiúsculo
    const firstLetterCapitalized = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    // Função para formatar a data e hora
    const dataHora = () => {
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
    const [dataHoraAtual, setDataHoraAtual] = useState('');

    useEffect(() => {
        // Atualiza a data e hora atual assim que o componente é montado
        setDataHoraAtual(dataHora());

        // Atualiza a data e hora a cada segundo
        const intervalId = setInterval(() => {
            setDataHoraAtual(dataHora());
        }, 1000); // 1000 milissegundos = 1 segundo

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return ( 
        <section className="sectionNavigatorBar displayFlexCenterCenter">
            <div className="containerNavigatorBar pageWidth displayFlexCenterCenter">
                <div className="dateAndTimeBox displayFlexCenterCenter">
                    <p className="paragraphDateAndTime">{dataHoraAtual}</p>
                </div>
                <nav className="navigationBox displayFlexCenterCenter">
                    <a className='navigationButtons' href={generalSection}  rel="noopener noreferrer">Geral</a>
                    <a className='navigationButtons' href={queriesSection}  rel="noopener noreferrer">Consultas</a>
                    <a className='navigationButtons' href={otherSection}  rel="noopener noreferrer">Outros</a>
                    <a className='navigationButtons' href={dtiSection}  rel="noopener noreferrer">DTI</a>
                    <a className='navigationButtons' href={downloadsSection}  rel="noopener noreferrer">Downloads</a>
                </nav>
            </div>
        </section>
     );
}
 
export default NavigationBar;
