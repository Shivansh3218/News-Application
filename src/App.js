import React from 'react'
import MainNews from './components/MainNews'
import { Routes, Route } from 'react-router-dom'
import AdvancedSearch from './components/AdvancedSearch'
import LoginForm from './components/LoginForm'
import SignUp from './components/SignUp'

export default function App() {
  return (
  <>
     <Routes>
        <Route path="/MainNews" element={  <MainNews/>}/>
        <Route path="/" element={  <LoginForm/>}/>
        <Route path='/AdvancedSearch' element={  <AdvancedSearch/>}/>
        <Route path='/SignUp' element={  <SignUp/>}/>
        </Routes>
    </>
  )
}
