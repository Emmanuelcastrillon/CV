import './App.css';
import Navbar from "./Component/Navbar";
import { Routes, Route } from 'react-router-dom';
import Profile from './Routes/Profile';
import Experience from './Routes/Experience';
import Studies from "./Routes/Studies";
import Main from "./Routes/Main";
import { useContextGlobal } from './Component/Utils/Global.context';
import Footer from './Component/Footer';


function App() {

  const {state}=useContextGlobal();
 

  return (
    <div className={state.theme}>
       <Navbar/>
       <Routes>
          <Route path='/' element ={<Main/>}/>
          <Route path='/profile' element ={<Profile/>}/>
          <Route path='/experience' element ={<Experience/>}/>
          <Route path='/studies' element ={<Studies/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
