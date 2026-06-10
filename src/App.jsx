import React from 'react'
import { Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<HomePage/>}  />
       <Route path="/loginPage" element={<LoginPage/>} />
    </Routes>
    
  )
}

export default App
