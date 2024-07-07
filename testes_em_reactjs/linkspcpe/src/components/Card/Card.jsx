import React from 'react';

import "./Card.css"

const Card = ({ image, systemName, systemAddress, imageTitle }) => {
  const imageSrc = image ? new URL(`../../assets/img/${image}`, import.meta.url).href : '';
  console.log(imageSrc)
  console.log(`Imagem: ${image} - System Name: ${systemName} - System Adrees: ${systemAddress}, Image Title: ${imageTitle}`)

  return (
    <div className="card display-flex-center-center">
        {imageSrc && <img className='card-image' src={imageSrc} alt="Imagem do site" title={imageTitle}/>}
        <a className='button-go-to-website display-flex-center-center' href={systemAddress} target="_blank" rel="noopener noreferrer">{systemName}</a>
    </div>
  );
};

export default Card;