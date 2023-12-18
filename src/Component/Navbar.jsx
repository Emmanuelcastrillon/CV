import React from 'react'
import { Link } from 'react-router-dom';
import image from "../Images/Emmanuel..png";
import { useContextGlobal } from './Utils/Global.context';

const Navbar = () => {

const {state,dispatch}=useContextGlobal()

const handleOnclick=()=>{
  const newTheme= state.theme==='dark' ? 'light':'dark';
  dispatch({type:'change_theme',payload:newTheme});
}

const handleLanguage=()=>{
  const newLanguage=state.language==='es'?'en':'es';
  dispatch({type:'change_language',payload:newLanguage})
}


  return (
    <div className='header'>
        <img className='imageProfile' src={image} alt="my image" />
        {state.language==='es'? <div className='navigation'>
           <Link  className='links' to="/">Principal</Link>
           <Link  className='links'to="/profile">Perfil</Link>
           <Link  className='links'to="/experience">Experiencia</Link>
           <Link  className='links'to="/studies">Estudios</Link>
        </div>:
         <div className='navigation'>
         <Link  className='links' to="/">Main</Link>
         <Link  className='links'to="/profile">Profile</Link>
         <Link  className='links'to="/experience">Experience</Link>
         <Link  className='links'to="/studies">Studies</Link>
      </div>}
       
        {state.theme==='dark'?<button className='themeNight' onClick={handleOnclick}>☀️</button>:<button className='themeNight' onClick={handleOnclick}>🌙</button>}

        {/* {state.language==='es'? <button className='languageButton' onClick={handleLanguage}>Ingles</button>: <button className='languageButton' onClick={handleLanguage}>Spanish</button>} */}

        <div className="form-check form-switch">
          <input onChange={handleLanguage} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
          {state.language==='es'?<label className="form-check-label" for="flexSwitchCheckDefault">Ingles</label>:<label className="form-check-label" for="flexSwitchCheckDefault">Spanish</label>}
          
        </div>
        <div className='emptyLine'></div>
    </div>
  )
}

export default Navbar