// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './Assets/css/mobile.css';
import './Assets/css/style.css';

// Components
import Navbar from './Component/pages/Navbar';
import Home from './Component/pages/Home';
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

import { SidebarProvider, useSidebar } from './Context/SidebarContext';
import Sidebar from './Component/pages/Sidebar';

// Layout Wrapper to handle Sidebar shift
const Layout = ({ hideUI, children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="app-layout d-flex">
      {!hideUI && <Sidebar />}
      <div
        className={`main-content-wrapper flex-grow-1 ${isSidebarOpen ? 'shifted' : ''}`}
        style={{
          transition: 'margin-left 0.3s ease-in-out',
          marginLeft: !hideUI && isSidebarOpen ? '240px' : '0',
        }}
      >
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const location = useLocation();

  // No auth pages now — hideUI will always be false
  const hideUI = false;

  return (
    <SidebarProvider>
      {!hideUI && <Navbar />}
      <Layout hideUI={hideUI}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<ClientMaster />} />
          <Route path="/client-add" element={<ClientMasterAdd />} />
          <Route path="/user" element={<UserMaster />} />
          <Route path="/user-add" element={<UserMasterAdd />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/driver-add" element={<DriverMasterAdd />} />
          <Route path="/vendor" element={<VendorMaster />} />
          <Route path="/vendor-add" element={<VendorMasterAdd />} />
          <Route path="/fleet" element={<FleetMaster />} />
          <Route path="/fleet-add" element={<FleetMasterAdd />} />
        </Routes>
      </Layout>
    </SidebarProvider>
  );
};

export default App;
