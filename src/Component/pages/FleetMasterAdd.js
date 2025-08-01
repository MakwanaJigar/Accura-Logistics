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
            <form className="challan-add-main-right-container py-5">
              <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">Add Fleet</h4>
                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Fleet No. / Vehicle No.*</label>
                      <input
                        name="driver_name"
                        className="form-control"
                        placeholder="Enter Fleet No. / Vehicle No."
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Brand Name*</label>
                      <input
                        name="driver_name"
                        className="form-control"
                        placeholder="Enter Brand Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Fleet Size (Mt.)*</label>
                      <input
                        name="number"
                        className="form-control"
                        placeholder="Enter Fleet Size"
                      />
                    </div>
                     <div className="mb-3">
                      <label className="form-label">Fleet Capacity (Ton)*</label>
                      <input
                        name="phone"
                        className="form-control"
                        placeholder="Enter Fleet Capacity"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-md-6">
                   
                    <div className="mb-3">
                      <label className="form-label">Type Of Fleet*</label>
                      <input type="text" name="dl_expiry" className="form-control" placeholder='Enter Fleet Type' />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">RTO Permit</label>
                      <select className="form-select">
                        <option value="">-- RTO Permit --</option>
                        <option value="">PAN India Parsing</option>
                        <option value="">Perticular State Parsing</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Types Of Carring Material*</label>
                      <input type="text" name="dl_expiry" className="form-control" placeholder='Enter Material Type' />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="border p-4 rounded client-add-box">
                <h4 className="fw-bold mb-4 pb-2 border-bottom">Payment Terms</h4>
                <div>
                  <div className=" mb-4 border-bottom border-1 pb-3" >
                    <div className="card-body">
                      <div className="row">

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Payment Terms</label>
                            <select className="form-select">
                              <option value="">Payment Terms</option>
                              <option value="">Due On Receipt</option>
                              <option value="">Advance</option>
                              <option value="">15 Days Credit</option>
                              <option value="">30 Days Credit</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">GST No.*</label>
                            <input name="gst_no" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div> */}

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
