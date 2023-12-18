import React from 'react'
import { useContextGlobal } from '../Component/Utils/Global.context'

const Studies = () => {

  const{state}=useContextGlobal()


  return (
    <div className="main">
      {state.language==='es'?      
      <div className="studies">
        <h3 className='titleStudies'>Estudios</h3>
        <div className="digitalHouse">
          <h3 className="developer">Desarrollador de tecnologia certificado</h3>
          <p className='dateDeveloper'><span className='timeDigital'>⏺️ Duracion: </span> Julio 2022-Actualmente</p>
           <p className='University'><span className='digitalInstitucion'>⏺️ Institucion: </span> Digital House</p>
           <p className='ProfileDeveloper'><span className='profileDigital'>⏺️ Perfil: </span> Desarrollador de 
           aplicaciones web, Frontend, Backend, Bases de datos e Infraestructura con habilidades como Trabajo en equipo, 
           Capacidad de análisis, solución de problemas, maquetado HTML, Hoja de estilo en cascada CSS, 
           Bases de datos relacionales MYSQL, JavaScript, React, Java, Infraestructura 
           (máquinas virtuales, contenedores Docker, computación en la nube AWS Amazon, load balancer).</p>

        </div>
        <div className="engineering">
           <h3 className="technologist">Tecnologo en ingenieria industrial</h3>
           <p className='dateEngineering'><span className='timeCidca'>⏺️ Duracion: </span> Febrero 2013-Julio 2016</p>
           <p className='University'><span className='cidca'>⏺️ Institucion: </span> (CIDCA Bogota-Colombia)</p>
           <p className='Profile'><span className='profileCidca'>⏺️ Perfil: </span> Tecnologo en ingenieria industrial con capacidad y 
           conocimiento para implementar, ejecutar y controlar procesos productivos, con capacidad de analisis, 
           adaptacion, creatividad y liderazgo.</p>
        </div>
        <div className="language">
           <h3 className="titleLanguage">Idiomas</h3>
           <p className='ProfileLanguage'><span className='levelEnglish'>⏺️ Nivel: </span> B1-Intermedio</p>
        </div>
      </div>:
      <div className="studies">
            <h3 className='titleStudies'>Studies</h3>
            <div className="digitalHouse">
              <h3 className="developer">Certified technology developer</h3>
              <p className='dateDeveloper'><span className='timeDigital'>⏺️ Duration: </span> July 2022-At the moment</p>
               <p className='University'><span className='digitalInstitucion'>⏺️ Institution: </span> Digital House</p>
               <p className='ProfileDeveloper'><span className='profileDigital'>⏺️ Profile: </span> Developer
                web applications, Frontend, Backend, Databases and Infrastructure with skills such as Teamwork,
                Analysis skills, troubleshooting, HTML layout, CSS Cascading Style Sheet,
                MYSQL relational databases, JavaScript, React, Java, Infrastructure
                (virtual machines, Docker containers, AWS Amazon cloud computing, load balancer).</p>
    
            </div>
            <div className="engineering">
               <h3 className="technologist">Technologist in industrial engineering</h3>
               <p className='dateEngineering'><span className='timeCidca'>⏺️ Duration: </span> February 2013-July 2016</p>
               <p className='University'><span className='cidca'>⏺️ Institution: </span> (CIDCA Bogota-Colombia)</p>
               <p className='Profile'><span className='profileCidca'>⏺️ Profile: </span> Technologist in industrial engineering with capacity and
                knowledge to implement, execute and control productive processes, with analysis capacity,
                adaptation, creativity and leadership.</p>
            </div>
            <div className="language">
               <h3 className="titleLanguage">Languages</h3>
               <p className='ProfileLanguage'><span className='levelEnglish'>⏺️ Level: </span> B1-Intermediate</p>
            </div>
        </div>
        }
    </div>
  )
}

export default Studies