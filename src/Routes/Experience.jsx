import React from 'react'
import { useContextGlobal } from '../Component/Utils/Global.context'

const Experience = () => {

  const{state}=useContextGlobal()


  return (
    <div className="main">
      {state.language==='es'?      
      <div className="experience">
        <h3 className="titleExperience">Experiencia</h3>
       
        <div className="formation">
          <h3 className="titleDigital">Digital House</h3>
            <p className='date'><span className='timeWorked'>⏺️Duracion:</span> Julio 2022-Actualmente</p> 
            <p className='post'><span className='postSubtitle'>⏺️Pocision:</span> Estudiante </p>
            <p className='description'><span className='functions'>⏺️ Funciones:</span>  proyecto de una clínica odontológica desde cero desarrollada en java, 
             utilizando el framework springBoot, MVC, JPA, diseño y desarrollo de la interfaz de usuario con HTML 
             y CSS puro utilizando el compilador Sass. Proyecto de una página dinámica desarrollada en
              javaScript utilizando la biblioteca React, consumo de Apis, renderización de componentes, 
              utilización de Hooks useEffect, useState, useReducer y estado global context. </p>
        </div>
        <div className="reckitt">
          <h3 className="titleReckitt">Reckitt Benckiser</h3>
            <p className='date'><span className='timeWorked'>⏺️Duracion:</span> Julio 2019-Actualmente</p> 
            <p className='post'><span className='postSubtitle'>⏺️Pocision:</span> Operario especializado de Bodega </p>
            <p className='description'><span className='functions'>⏺️ Funciones:</span> Flujo de materiales para cumplimiento con la cadena de abastecimiento  de la compañia</p>
        </div>

      </div> :
            <div className="experience">
               <h3 className="titleExperience">Experience</h3>
              
               <div className="formation">
                 <h3 className="titleDigital">Digital House</h3>
                   <p className='date'><span className='timeWorked'>⏺️ Duration:</span> July 2022-At the moment</p> 
                   <p className='post'><span className='postSubtitle'>⏺️ Position:</span> student </p>
                   <p className='description'><span className='functions'>⏺️ Functions:</span> project of a dental clinic from scratch developed in java,
                     using the springBoot framework, MVC, JPA, user interface design and development with HTML
                     and pure CSS using the Sass compiler. Project of a dynamic page developed in
                      javaScript using React library, Apis consumption, component rendering,
                      Using Hooks useEffect, useState, useReducer and global state context. </p>
               </div>
               <div className="reckitt">
                 <h3 className="titleReckitt">Reckitt Benckiser</h3>
                   <p className='date'><span className='timeWorked'>⏺️ Duration:</span> July 2019-At the moment</p> 
                   <p className='post'><span className='postSubtitle'>⏺️ Position:</span> Specialized Warehouse Operator </p>
                   <p className='description'><span className='functions'>⏺️ Functions:</span> Flow of materials for compliance with the company's supply chain</p>
               </div>
            </div>}
    </div>

  )
}

export default Experience