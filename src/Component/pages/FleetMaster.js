// src/pages/Item.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const FleetMaster = () => {
  const navigate = useNavigate();
  const handleGoToFleetAdd = () => {
    navigate('/fleet-add')
  }

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master
          <i className="fa-solid fa-angles-right" /> Fleet
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Fleet</h3>
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

              <button className="add-btn" onClick={handleGoToFleetAdd}>
                <i className="fa-solid fa-plus" /> Add
              </button>
            </div>
          </div>
          <div className="mt-3">
                <table className="table align-middle table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Fleet No. / Vehicle No. </th>
                      <th>Brand</th>
                      <th>Fleet Size (Mt.)</th>
                      <th>Fleet Capacity (Ton)</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr >
                          <td>GJ 02 AB 1000</td>
                          <td>TATA</td>
                          <td> 40x10x12</td>
                          <td>300</td>
                          <td>3</td>
                          <td className="text-center action-btns">
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

export default FleetMaster;
