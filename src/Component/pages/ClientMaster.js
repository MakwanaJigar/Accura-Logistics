import { Button } from "bootstrap";
import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

const ClientMaster = () => {
  const Navigate = useNavigate()

  const handleGoToClinetAddPage = () => {
    Navigate("/client-add")
  }

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master{" "}
          <i className="fa-solid fa-angles-right" /> Client Master
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Client Master</h3>
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
                <i className="fa-solid fa-download" /> Import
              </button>

              <button
                className="export-btn"
              >
                <i className="fa-solid fa-upload" /> Export
              </button> */}

              <button className="add-btn" onClick={handleGoToClinetAddPage}>
                <i className="fa-solid fa-plus" /> Add
              </button>
            </div>
          </div>

          <div className="mt-3">
            <table className="table align-middle table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Company Name</th>
                  <th>Contact Person Name</th>
                  <th>Phone No.</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DHL</td>
                  <td>Manish Thakor</td>
                  <td>+91 8511759685</td>
                  <td>Mumbai</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm me-1"

                    >
                      <i className="fas fa-pen" />
                    </button>
                    <button className="btn btn-sm" >
                      <i className="fas fa-trash" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>DTDC</td>
                  <td>Prakash Gohel</td>
                  <td>+91 9711759685</td>
                  <td>Ahmedabad</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm me-1"

                    >
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

export default ClientMaster;
