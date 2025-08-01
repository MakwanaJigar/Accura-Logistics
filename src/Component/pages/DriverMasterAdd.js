import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverMasterAdd = () => {
  const [dlFile, setDlFile] = useState(null);
  const [aadharFile, setAadharFile] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      setter(file);
    }
  };

  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master{" "}
          <i className="fa-solid fa-angles-right" /> Driver Add
        </p>

        <div className="challan-add-main-right-container">
          <div className="make-search-and-btn-container">
            <div className="make-title">
              <h3>Driver Add</h3>
            </div>
            <div className="make-list-btns">
              <button className="export-btn" onClick={() => navigate("/driver")}>
                Go Back
              </button>
            </div>
          </div>

          <form className="challan-add-main-right-container py-5">
            <div className="border p-4 rounded client-add-box">
              <h4 className="fw-bold mb-4 pb-2 border-bottom">Add Driver</h4>

              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Driver Name*</label>
                    <input
                      name="driver_name"
                      className="form-control"
                      placeholder="Enter Driver Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone No.*</label>
                    <input
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone No."
                    />
                  </div>
                   <div className="mb-3">
                    <label className="form-label">Mobile No. (Optional)</label>
                    <input
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone No."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">DL Expiry Date*</label>
                    <input type="date" name="dl_expiry" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload Driving Licence</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => handleFileChange(e, setDlFile)}
                    />
                    {dlFile && (
                      <div className="mt-2">
                        {dlFile.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(dlFile)}
                            alt="DL Preview"
                            height="100"
                            style={{ display: "block" }}
                          />
                        ) : (
                          <a
                            href={URL.createObjectURL(dlFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {dlFile.name}
                          </a>
                        )}
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => setDlFile(null)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Minimum Trip Per/Month</label>
                    <input
                      type="number"
                      name="min_trip"
                      className="form-control"
                      placeholder="Enter Minimum Trip Per/Month"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Aadhar No.*</label>
                    <input
                      type="number"
                      name="aadhar_no"
                      placeholder="Enter Aadhar No."
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Upload Aadhar Card</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => handleFileChange(e, setAadharFile)}
                    />
                    {aadharFile && (
                      <div className="mt-2">
                        {aadharFile.type.startsWith("image/") ? (
                          <img
                            src={URL.createObjectURL(aadharFile)}
                            alt="Aadhar Preview"
                            height="100"
                            style={{ display: "block" }}
                          />
                        ) : (
                          <a
                            href={URL.createObjectURL(aadharFile)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {aadharFile.name}
                          </a>
                        )}
                        <button
                          type="button"
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => setAadharFile(null)}
                        >
                          <i className="fas fa-close"></i>
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Driver Incentive*</label>
                    <input
                      type="number"
                      name="incentive"
                      placeholder="Enter Driver Incentive"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Salary Per Month*</label>
                    <input
                      type="number"
                      name="salary"
                      placeholder="Enter Salary Per Month"
                      className="form-control"
                    />
                  </div>
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
  );
};

export default DriverMasterAdd;
