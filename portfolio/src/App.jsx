
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Education from './Components/Education'
import Skills from './Components/Skills'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<NavBar/>} path='/'/>
        <Route element={<Education/>} path='/education'/>
        <Route element={<Skills/>} path='/skills'/>
      </Routes>
      
    </>
  )
}

export default App
