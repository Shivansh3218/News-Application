import React from 'react'
import MainNews from './components/MainNews'
import { Routes, Route } from 'react-router-dom'
import AdvancedSearch from './components/AdvancedSearch'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'

export default function App() {
  return (
  <>
     <Routes>
       {/* <Route path="/" element={  <MainNews/>}/> */}
       {/* <Route path="/" element={  <LoginForm/>}/> */}
        <Route path='/' element={  <AdvancedSearch/>}/>
         {/* <Route path='/SignUp' element={  <SignUp/>}/>  */}
        {/* <Route path='/' element={  <Navbar/>}/>  */}
        </Routes>
    </>
  )
}
