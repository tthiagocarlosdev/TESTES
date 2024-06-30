import './Card.css';

function Card ({ projectImage, projectText, projectAddress }) {
    const imageSrc = projectImage ? new URL(`../../assets/projectImages/${projectImage}`, import.meta.url).href : '';

    return (
        <div className="card display-flex-center-center">
            {imageSrc && <img className='card-image' src={imageSrc} alt="Imagem do projeto" />}
            <p className='card-paragraph'>{projectText}</p>
            <a className='card-button display-flex-center-center' href={projectAddress} target="_blank" rel="noopener noreferrer">Ir para o projeto</a>
        </div>
    );
};

export default Card;

