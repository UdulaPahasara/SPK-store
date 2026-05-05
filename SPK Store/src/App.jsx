import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

// Component Imports
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Components/Home/Home'
import Drone from './Components/Drone/drone.jsx'
import Gimbal from './Components/Gimbal/Gimbal'
import MobileLence from './Components/MobileLence/MobileLence'
import Others from './Components/Others/Others'
import ItemDetail from './Components/ItemDetail/ItemDetail'
import GotoCart from './Components/GotoCart/GotoCart'
import Checkout from './Components/Checkout/Checkout'
import Confirmation from './Components/Confirmation/Confirmation'
import ProfileMenu from './Components/MyProfile/Menu/ProfileMenu'
import GeneralOverview from './Components/MyProfile/GeneralOverview'

import './App.css'

const GOOGLE_CLIENT_ID = "868079069835-t3o8eupkk1cvv66nve7aoisddu6mfp2g.apps.googleusercontent.com";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
        <Route path="/cart" element={<GotoCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileMenu />} />
        <Route path="/overview" element={<GeneralOverview />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App
