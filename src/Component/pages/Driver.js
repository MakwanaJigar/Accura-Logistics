import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Driver = () => {
  const navigate = useNavigate()
  
  const handleGoToDriverAdd = () => {
    navigate("/driver-add")
  }

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master
          <i className="fa-solid fa-angles-right" /> Driver
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Driver</h3>
            </div>
            <div className="make-list-btns">
              <div className="make-list-search">
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="search"
                  placeholder="Search ..."
                />
              </div>
          <button
                className="import-btn"
              >
                <i className="fa-solid fa-download" /> Import
              </button>
              <button
                className="export-btn"
              >
                <i className="fa-solid fa-upload" /> Export
              </button>
              <button
                className="add-btn" 
                onClick={handleGoToDriverAdd}
              >
                <i className="fa-solid fa-plus" /> Add
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-3">
                <table className="table align-middle table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>DL Expiry Date</th>
                      <th>Aadhar No.</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                   
                        <tr >
                          <td>Maulik</td>
                          <td>+91 9585756545</td>
                          <td>maulik@gmail.com</td>
                          <td>05-Apr-2037</td>
                          <td>4445 5987 3463</td>
                          <td className="text-center">
                            <button
                              className="btn btn-sm me-1"
                            >
                              <i className="fas fa-pen" />
                            </button>

                            <button
                              className="btn btn-sm"
                            >
                              <i className="fas fa-trash" />
                            </button>
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

export default Driver;
