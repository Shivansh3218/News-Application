import React from 'react'
import MainNews from './components/MainNews'
import { Routes, Route } from 'react-router-dom'
import AdvancedSearch from './components/AdvancedSearch'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import Entertainment from './components/Entertainment'
import Sports from './components/Sports'

export default function App() {
  return (
  <>
     <Routes>
       <Route path="/MainNews" element={  <MainNews/>}/>
       <Route path="/" element={  <LoginForm/>}/>
        <Route path='/AdvancedSearch' element={  <AdvancedSearch/>}/>
        <Route path='/Entertainment' element={  <Entertainment/>}/>
        <Route path='/Sports' element={  <Sports/>}/>
         <Route path='/SignUp' element={  <SignUp/>}/> 
        <Route path='/' element={  <Navbar/>}/> 
        </Routes>
    </>
  )
}
