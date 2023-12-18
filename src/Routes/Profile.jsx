import React from 'react'
import { useContextGlobal } from '../Component/Utils/Global.context'

const Profile = () => {

const{state}=useContextGlobal()

  return (
    <div className="main">
      {state.language==='es'?<div className="profile">
          <h3 className='titleProfile'>Mi perfil</h3>
          <p className='myProfile'>Tecnólogo en ingeniería industrial
          y actualmente estudiante de desarrollo web hace 18 meses, 
          donde he adquirido diferentes conocimientos para la construccion de aplicaciones, paginas web, experiencia de usuario (XU) para diseño de interfaz (IU), maquetado HTML, Hoja de estilo en cascada CSS, 
          Bases de datos relacionales MYSQL, JavaScript, React, Java, 
          Infraestructura (máquinas virtuales, contenedores Docker, computación en la nube AWS Amazon, load balancer), 
          manejo del idioma inglés a nivel intermedio en proceso de aprendizaje,
           fortalecimiento y evolución por cuenta propia.</p>
      </div>:
      <div className="profile">
         <h3 className='titleProfile'>My profile</h3>
         <p className='myProfile'>Technologist in industrial engineering (CIDCA Bogotá Colombia)
          and currently a web development student for 18 months at Digital House,
          where I have acquired different knowledge for the construction of applications, web pages, user experience (XU) for interface design (UI), HTML layout, CSS cascading style sheet,
          Relational databases MYSQL, JavaScript, React, Java,
          Infrastructure (virtual machines, Docker containers, AWS Amazon cloud computing, load balancer),
          English language skills at an intermediate level in the learning process,
           strengthening and evolving on one's own.</p>
      </div>}
      
    </div>
  )
}

export default Profile