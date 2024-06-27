import './App.css';

import manOfficeImage from './img/man-office.jpg';

function App() {

  const redeSocial = "https://www.youtube.com/";

  return (
    <>
      <header className='header'>
        <h1 className='title'> Meu candidato A </h1>
      </header>
      <main className='main'>
        <h2 className='subtitle largura-pagina'>Sobre</h2>
          <div className='section-img-paragraph largura-pagina'>
            <figure>
              <img className='image' src={manOfficeImage} alt="Homem no escritório"/>
            </figure>
            <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, dolor ac luctus finibus, sem ante finibus leo, vel sollicitudin purus neque vitae nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean porta iaculis diam id tempus. Quisque orci dui, gravida a justo ut, aliquam facilisis velit. Phasellus justo quam, accumsan convallis interdum et, gravida nec dui. Maecenas vel vestibulum ex. Praesent ut aliquet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dapibus sem neque, ut euismod massa malesuada ut. Cras convallis nulla nec erat scelerisque, tincidunt porttitor sem sagittis. Etiam rhoncus eros sed tellus accumsan vulputate. Nunc consectetur consectetur bibendum.</p>
          </div>
          <div className='section-button largura-pagina'>
            <a className='button' href={redeSocial} target='_blank'> Rede Social </a>
          </div>
      </main>
      <footer className='footer'>
        <p className='footer-paragraph'>Desenvolvido por tthiagocarlosdev</p> 
      </footer>
    </>
  );
}

export default App;
