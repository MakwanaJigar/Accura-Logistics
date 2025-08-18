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

          <form className="challan-add-main-right-container pb-3">
            <div className="border p-4 rounded client-add-box">
              <h4 className="fw-bold mb-4 pb-2 border-bottom">Add Driver</h4>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Driver Name*</label>
                  <input
                    name="driver_name"
                    className="form-control"
                    placeholder="Enter Driver Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone No.*</label>
                  <input
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone No."
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile No. (Optional)</label>
                  <input
                    name="phone"
                    className="form-control"
                    placeholder="Enter Phone No."
                  />
                </div>
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
                  <label className="form-label">DL Expiry Date*</label>
                  <input type="date" name="dl_expiry" className="form-control" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Aadhar No.*</label>
                  <input
                    type="number"
                    name="aadhar_no"
                    placeholder="Enter Aadhar No."
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
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
                <div className="col-md-6 mb-3">
                  <label className="form-label">Salary Per Month*</label>
                  <input
                    type="number"
                    name="salary"
                    placeholder="Enter Salary Per Month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Bank Name*</label>
                  <input
                    type="text"
                    name="salary"
                    placeholder="Enter Salary Per Month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Account Number*</label>
                  <input
                    type="number"
                    name="salary"
                    placeholder="Enter Salary Per Month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">IFSC Code*</label>
                  <input
                    type="text"
                    name="salary"
                    placeholder="Enter Salary Per Month"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Driver Type</label>
                  <div className="d-flex gap-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ifscCode"
                        id="ifscYes"
                        value="Yes"
                      />
                      <label className="form-check-label" htmlFor="ifscYes">
                        Hired
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="ifscCode"
                        id="ifscNo"
                        value="No"
                      />
                      <label className="form-check-label" htmlFor="ifscNo">
                        Line
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Driver Reference Name*</label>
                  <input
                    type="text"
                    name="salary"
                    placeholder="Enter Salary Per Month"
                    className="form-control"
                  />
                </div>  
                <div className="col-md-6 mb-3">
                  <label className="form-label">Driver's Referance Person Mobile No.*</label>
                  <input
                    type="text"
                    name="salary"
                    placeholder="Driver's Referance Person Mobile No."
                    className="form-control"
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
  );
};

export default DriverMasterAdd;
