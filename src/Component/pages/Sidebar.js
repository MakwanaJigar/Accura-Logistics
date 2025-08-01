import React, { useState } from 'react';
import { useSidebar } from '../../Context/SidebarContext';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { isSidebarOpen } = useSidebar();

  // State to manage dropdowns
  const [masterOpen, setMasterOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  const isActive = (targetPath) => location.pathname === targetPath;

  return (
    <div className={`col-12 col-md-3 col-lg-2 sidebar ${isSidebarOpen ? 'd-block' : 'd-none'}`}>
      <nav className="nav flex-column">
        {/* Dashboard */}
        <Link
          className={`nav-link sidebar-links d-flex align-items-center gap-2 ${isActive('/') ? 'active' : ''}`}
          to="/"
        >
          <i className="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </Link>

        {/* Delivery Challan */}
        <Link
          className={`nav-link sidebar-links d-flex align-items-center gap-2 ${isActive('/lr-generation') ? 'active' : ''}`}
          to="/lr-generation"
        >
          <i className="fa-solid fa-file-invoice-dollar"></i>
          <span>LR Generation</span>
        </Link>

        {/* Master Menu */}
        <button
          className="nav-link sidebar-links btn btn-link text-start w-100 d-flex align-items-center justify-content-between"
          onClick={() => setMasterOpen(!masterOpen)}
        >
          <span className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-database"></i>
            Master
          </span>
          <i className={`fa-solid fa-angle-${masterOpen ? 'up' : 'down'}`}></i>
        </button>

        {masterOpen && (
          <div className="ps-4">
            <ul className="list-unstyled">
              <li>
                <Link className={`nav-link sidebar-links ${isActive('/client') ? 'active' : ''}`} to="/client">Client</Link>
              </li>
              <li>
                <Link className={`nav-link sidebar-links ${isActive('/driver') ? 'active' : ''}`} to="/driver">Driver</Link>
              </li>
              <li>
                <Link className={`nav-link sidebar-links ${isActive('/vendor') ? 'active' : ''}`} to="/vendor">Vendor</Link>
              </li>
              <li>
                <Link className={`nav-link sidebar-links ${isActive('/user') ? 'active' : ''}`} to="/user">User</Link>
              </li>
              <li>
                <Link className={`nav-link sidebar-links ${isActive('/fleet') ? 'active' : ''}`} to="/fleet">Fleet</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Report Menu */}
        <button
          className="nav-link sidebar-links btn btn-link text-start w-100 d-flex align-items-center justify-content-between"
          onClick={() => setReportOpen(!reportOpen)}
        >
          <span className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-file"></i>
            Report
          </span>
          <i className={`fa-solid fa-angle-${reportOpen ? 'up' : 'down'}`}></i>
        </button>

        {reportOpen && (
          <div className="ps-4">
            <ul className="list-unstyled">
              <li><Link className={`nav-link sidebar-links ${isActive('/logistics') ? 'active' : ''}`} to="/logistics">Logistics</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/pending-logistics') ? 'active' : ''}`} to="/pending-logistics">Pending Logistics</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/courier') ? 'active' : ''}`} to="/courier">Courier</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/tc-section') ? 'active' : ''}`} to="/tc-section">TC Section</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/w-kanbha') ? 'active' : ''}`} to="/w-kanbha">W.Kanbha</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/w-kuha') ? 'active' : ''}`} to="/w-kuha">W.Kuha</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/w-kubadthal') ? 'active' : ''}`} to="/w-kubadthal">W.Kubadthal</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/direct-party') ? 'active' : ''}`} to="/direct-party">Direct Party</Link></li>
              <li><Link className={`nav-link sidebar-links ${isActive('/summary') ? 'active' : ''}`} to="/summary">Summary</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
