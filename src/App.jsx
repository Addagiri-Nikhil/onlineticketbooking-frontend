import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TheatreList from './components/TheatreList';
import SeatSelection from './components/Seatselection';
import Addon from './components/Addon';
import Task1 from './components/Task1';
import Final from './components/Final';
import Ticket from './components/Ticket';
import VerifyOtp from './components/VerifyOtp';
import HostLogin from './components/HostLogin';
import HostSignup from './components/HostSignup';
import HostVerifyOTP from './components/HostVerifyOTP';
import HostDashboard from './components/HostDashboard';
import Stream from './components/Stream';
import Events from './components/Events';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/theatrelist' element={<TheatreList />} />
        <Route path='/seat' element={<SeatSelection />} />
        <Route path='/addon' element={<Addon />} />
        <Route path='/final' element={<Final />} />
        <Route path='/ticket' element={<Ticket />} /> 
        <Route path='/verify-otp' element={<VerifyOtp />} />
        <Route path='/host/login' element={<HostLogin />} />
        <Route path='/host/signup' element={<HostSignup />} />
        <Route path='/host/verify-otp' element={<HostVerifyOTP />} />
        <Route path='/host/dashboard' element={<HostDashboard />} />
        <Route path='/stream' element={<Stream />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
