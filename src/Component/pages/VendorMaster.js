import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";


const VendorMaster = () => {
  const navigate = useNavigate();

  const handleGoToVendorAdd = () => {
    navigate('/vendor-add');
  }

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master
          <i className="fa-solid fa-angles-right" /> Vendor
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Vendor</h3>
            </div>
            <div className="make-list-btns">
              <div className="make-list-search">
                <i className="fa-solid fa-magnifying-glass" />
                <input
                  type="search"
                  placeholder="Search ..."
                />
              </div>
              <button className="import-btn">
                <i className="fa-solid fa-download" /> Import
              </button>
              <button
                className="export-btn"
              > <i className="fa-solid fa-upload" /> Export
              </button>
              <button className="add-btn" onClick={handleGoToVendorAdd}>
                <i className="fa-solid fa-plus" /> Add
              </button>
            </div>
          </div>

          {/* list */}
          <div className="mt-3">

            <table className="table align-middle table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Company Name</th>
                  <th>Contact Person Address</th>
                  <th>Phone No.</th>
                  <th>City</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>Amazon</td>
                  <td>Jeff Bezos</td>
                  <td>+91 7595856545</td>
                  <td>Mombai</td>
                  <td className="text-center">
                    <button className="btn btn-sm me-1">
                      <i className="fas fa-pen" />
                    </button>
                    <button className="btn btn-sm" >
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

export default VendorMaster;
