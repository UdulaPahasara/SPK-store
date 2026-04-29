import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Components/Home/Home'
import Drone from './Components/Drone/drone.jsx'
import Gimbal from './Components/Gimbal/Gimbal'
import MobileLence from './Components/MobileLence/MobileLence'
import Others from './Components/Others/Others'
import ItemDetail from './Components/ItemDetail/ItemDetail'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './App.css'

const GOOGLE_CLIENT_ID = "868079069835-t3o8eupkk1cvv66nve7aoisddu6mfp2g.apps.googleusercontent.com";

function App() {
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Routes key={location.key}>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/drones" element={<Drone />} />
        <Route path="/gimbals" element={<Gimbal />} />
        <Route path="/mobile-lens" element={<MobileLence />} />
        <Route path="/other" element={<Others />} />
        <Route path="/item-detail" element={<ItemDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
