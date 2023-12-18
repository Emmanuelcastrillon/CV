import React from 'react'
import { useContextGlobal } from '../Component/Utils/Global.context'


const Main = () => {

  const {state}=useContextGlobal()

  return (
    <div>
      {state.language==='es'?    //Condition if ternario 
      <div className='main'>
        <div className='containerAboutMe'>
            <h3 className='titleAboutMe'>Sobre mi</h3>
           <p className='aboutMe'>Tecnólogo en ingeniería industrial y estudiante de desarrollo web, 
             soy una persona responsable, comprometida y apasionada en todo lo que hago, me destaco por rapidez en el aprendizaje, 
             flexibilidad al cambio, capacidad de análisis, solución de problemas, trabajo en equipo, 
             entendiendo que es la mejor manera para alcanzar los objetivos y obtener ventaja competitiva en el mercado 
             y en las compañías.</p>
        </div>
        <div className="containerMyTarget">
           <h3 className='titleMyTarget'>Actualmente</h3>
           <p className='myTarget'>Estoy buscando trabajo activamente para incursionar en el mundo de la IT y poder mostrar todo mi potencial,
              dando asi un valioso aporte al maravilloso mundo de la tecnología, 
              además de mejorar mi calidad de vida y la de mi familia.</p>
        </div>
        <div className="containerContact">
          <h3 className='contactTitle'>Contacto</h3>
          <div className="phone">
              <i className='bx bx-phone bx-border-circle iconsContact'></i>
              <p className='numberPhone'>+573136643945</p>
          </div>
          <div className="email">
              <i className='bx bx-envelope bx-border-circle iconsContact'></i>
              <p className='address'>castrillon.rivas@hotmail.com</p>
          </div>
          <div className="location">
              <i className='bx bx-current-location bx-border-circle iconsContact'></i>
              <p className='country'>Cali-Colombia</p>
          </div>
        </div>
      </div>: // Else if ternario
      <div className='main'>
        <div className='containerAboutMe'>
            <h3 className='titleAboutMe'>About me</h3>
           <p className='aboutMe'>Technologist in industrial engineering and web development student,
            I am a responsible, committed and passionate person in everything I do, I stand out for my speed in learning,
            flexibility to change, capacity for analysis, problem solving, teamwork,
            understanding that it is the best way to achieve objectives and obtain competitive advantage in the market
            and in companies.</p>
        </div>
        <div className="containerMyTarget">
           <h3 className='titleMyTarget'>AT the moment</h3>
           <p className='myTarget'>I am actively looking for work to enter the world of IT and be able to show my full potential,
               thus giving a valuable contribution to the wonderful world of technology,
               in addition to improving my quality of life and that of my family.</p>
        </div>
        <div className="containerContact">
          <h3 className='contactTitle'>Contact</h3>
          <div className="phone">
              <i className='bx bx-phone bx-border-circle iconsContact'></i>
              <p className='numberPhone'>+573136643945</p>
          </div>
          <div className="email">
              <i className='bx bx-envelope bx-border-circle iconsContact'></i>
              <p className='address'>castrillon.rivas@hotmail.com</p>
          </div>
          <div className="location">
              <i className='bx bx-current-location bx-border-circle iconsContact'></i>
              <p className='country'>Cali-Colombia</p>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Main