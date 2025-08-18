import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FleetMasterAdd = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master
          <i className="fa-solid fa-angles-right" /> Fleet Add
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Fleet Add</h3>
            </div>
            <div className="make-list-btns">
              <button className="export-btn" onClick={() => navigate("/fleet")}>
                Go Back
              </button>
            </div>
          </div>

          <div className="">
            <form className="challan-add-main-right-container pb-3">
              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">Add Fleet</h4>
                <div className="row">
                  {/* Left Column */}
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Fleet No. / Vehicle No.*</label>
                    <input
                      name="driver_name"
                      className="form-control"
                      placeholder="Enter Fleet No. / Vehicle No."
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Brand Name*</label>
                    <input
                      name="driver_name"
                      className="form-control"
                      placeholder="Enter Brand Name"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Fleet Size (Mt.)*</label>
                    <input
                      name="number"
                      className="form-control"
                      placeholder="Enter Fleet Size"
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Fleet Capacity (Ton)*</label>
                    <input
                      name="phone"
                      className="form-control"
                      placeholder="Enter Fleet Capacity"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Type Of Fleet*</label>
                    <input type="text" name="dl_expiry" className="form-control" placeholder='Enter Fleet Type' />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Types Of Carring Material*</label>
                    <input type="text" name="dl_expiry" className="form-control" placeholder='Enter Material Type' />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">RTO Permit</label>
                    <select className="form-select">
                      <option value="">-- RTO Permit --</option>
                      <option value="">Local Permit (Gujarat Only)</option>
                      <option value="">National Permit</option>
                    </select>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Upload RTO Permit</label>
                    <input
                      type="file"
                      className="form-control"
                      name="rtoPermit"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>

                </div>
              </div>

              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">RTO</h4>
                <div className="row">

                  <div className="mb-3 col-md-6">
                    <label className="form-label">RTO Permit</label>
                    <select className="form-select">
                      <option value="">-- RTO Permit --</option>
                      <option value="">Local Permit (Gujarat Only)</option>
                      <option value="">National Permit</option>
                    </select>
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Upload RTO Permit</label>
                    <input
                      type="file"
                      className="form-control"
                      name="rtoPermit"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>

                </div>
              </div>

              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">PUC</h4>
                <div className="row">

                  <div className="mb-3 col-md-6">
                    <label className="form-label">PUC No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="PUC Number"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">PUC Expire Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="PUC Number"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Upload PUC</label>
                    <input
                      type="file"
                      className="form-control"
                      name="rtoPermit"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>

                </div>
              </div>

              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">Insurence</h4>
                <div className="row">

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Insurence Expire Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="PUC Number"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Upload Insurence</label>
                    <input
                      type="file"
                      className="form-control"
                      name="rtoPermit"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>

                </div>
              </div>

              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">Fitness</h4>
                <div className="row">

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Fitness Expire Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="PUC Number"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label className="form-label">Upload Fitness Certificate</label>
                    <input
                      type="file"
                      className="form-control"
                      name="rtoPermit"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                  </div>

                </div>
              </div>

              <div className="d-flex gap-3 mt-4">
                <button type="submit" className="btn btn-submit px-4">
                  Submit
                </button>
                <button type="reset" className="btn btn-clear px-4">
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetMasterAdd;
