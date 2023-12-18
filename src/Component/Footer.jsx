import React from 'react';
import { useContextGlobal } from './Utils/Global.context';




const Footer = () => {

  const {state}=useContextGlobal()


  return (
    <div className='footer'>
        <div className='footerLine'></div>

        {state.language==='es'? <h2 className='footerTitle'>Desarrollador web</h2>: <h2 className='footerTitle'>Web developer</h2>}
       
        <nav className='footerNavigation'>
           <a className='linksFooter'  href="https://www.linkedin.com/in/emmanuel-castrillon-rivas-829396282/"  target='https://www.linkedin.com/in/emmanuel-castrillon-rivas-829396282/'><i className='bx bxl-linkedin bx-sm bx-border-circle iconLinkedin'></i></a>
           <a className='linksFooter' href='https://www.instagram.com/manuelrivas2884/' target='https://www.instagram.com/manuelrivas2884/' ><i className='bx bxl-instagram-alt bx-sm bx-border-circle iconInstagram ' ></i></a>
        </nav> 
       
    </div>
  )
}

export default Footer