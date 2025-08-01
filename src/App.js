// src/App.js
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './Assets/css/mobile.css'
import './Assets/css/style.css'

// Components
import Navbar from './Component/pages/Navbar';
import Home from './Component/pages/Home';
import { SidebarProvider } from './Context/SidebarContext';
import Sidebar from './Component/pages/Sidebar';
import ClientMaster from './Component/pages/ClientMaster';
import ClientMasterAdd from './Component/pages/ClientMasterAdd';
import UserMaster from './Component/pages/UserMaster';
import UserMasterAdd from './Component/pages/UserMasterAdd';
import Driver from './Component/pages/Driver';
import DriverMasterAdd from './Component/pages/DriverMasterAdd';
import VendorMaster from './Component/pages/VendorMaster';
import VendorMasterAdd from './Component/pages/VendorMasterAdd';
import FleetMaster from './Component/pages/FleetMaster';
import FleetMasterAdd from './Component/pages/FleetMasterAdd';


const App = () => {
  const location = useLocation();

//  const auth = useSelector((state) => state.auth);
//   const token = auth?.token;
  const hideUIRoutes = ['/login', '/forgot-password', '/confirm-password'];
  const hideUI = hideUIRoutes.includes(location.pathname);

  return (
    <SidebarProvider>
      {!hideUI && <Navbar />}
      <div className="d-flex">
        {!hideUI && <Sidebar />}
        <div className="flex-grow-1">
          <Routes>
            {/* <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            {/* <Route path="/confirm-password" element={<ConfirmPassword />} /> */}
            {/* <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} /> */}
            <Route path="/" element={<Home /> } />
            <Route path="/client" element={<ClientMaster /> } />
            <Route path="/client-add" element={<ClientMasterAdd /> } />
            <Route path="/user" element={<UserMaster /> } />
            <Route path="/user-add" element={<UserMasterAdd /> } />
            <Route path="/driver" element={<Driver /> } />
            <Route path="/driver-add" element={<DriverMasterAdd /> } />
            <Route path="/vendor" element={<VendorMaster /> } />
            <Route path="/vendor-add" element={<VendorMasterAdd /> } />
            <Route path="/fleet" element={<FleetMaster /> } />
            <Route path="/fleet-add" element={<FleetMasterAdd /> } />
          </Routes>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default App;
