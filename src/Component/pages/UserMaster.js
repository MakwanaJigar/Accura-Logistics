import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";


const UserMaster = () => {
  const navigate = useNavigate()
  const handleGoToAddUserPage = () => {
    navigate('/user-add')
  }

  /* ---------- UI ---------- */
  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master
          <i className="fa-solid fa-angles-right" /> User
        </p>

        <div className="challan-add-main-right-container">
          {/* Search + buttons */}
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>User</h3>
            </div>
            <div className="make-list-btns">
              <div className="make-list-search">
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="search"
                  placeholder="Search ..."
                 
                />
              </div>
              {/* <button className="import-btn">
                <i className="fa-solid fa-upload" /> Import
              </button>
              <button className="export-btn">
                <i className="fa-solid fa-download" /> Export
              </button> */}
              <button className="add-btn" onClick={handleGoToAddUserPage}>
                <i className="fa-solid fa-plus" /> Add
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-3">
                <table className="table align-middle table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr>
                          <td>Mukesh Thakkar</td>
                          <td>Mukesh@thakkar.com</td>
                          <td>+91 7595856545</td>
                          <td className="text-success ">Active</td>
                          <td className="action-btn-container">
                            <i className="fas fa-pen"></i>
                            <i className="fas fa-trash"></i>
                          </td>
                        </tr>
                   
                  </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMaster;
