import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';

const ClientMasterAdd = () => {
  const Navigate = useNavigate()
  const handleBackToClinetPage = () => {
    Navigate("/client")
  }


  // ADD MULTIPLE ADDRESS
  const [addresses, setAddresses] = useState([
    { personName: '', emailId: '', phoneNo: '', address: '', city: '', state: '', postal_code: '' }
  ]);

  // Handle input changes
  const handleChange = (index, field, value) => {
    const newAddresses = [...addresses];
    newAddresses[index][field] = value;
    setAddresses(newAddresses);
  };

  // Add new address row
  const handleAddRow = () => {
    setAddresses([
      ...addresses,
      { personName: '', emailId: '', phoneNo: '', address: '', city: '', state: '', postal_code: '' }
    ]);
  };

  // Delete address row
  const handleDeleteRow = (index) => {
    if (addresses.length === 1) return; // Prevent deleting the last row
    const newAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(newAddresses);
  };


  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right"></i> Master
          <i className="fa-solid fa-angles-right"></i> Client Add
        </p>

        <div className="delivery-challan-top-title-container1">
          <div className="export-addnew-btn0-container-back-btn">
            <Link to="/client" className="float-right d-flex">
              Go Back
            </Link>
          </div>
        </div>

        <form className="challan-add-main-right-container pb-3" >
          <div className="border p-4 rounded client-add-box">
            <h4 className="fw-bold mb-4 pb-2 border-bottom">Client Add</h4>

            <div className="row">
              {/* Left Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Company Name*</label>
                  <input name="company_name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone No.*</label>
                  <input name="phone" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">GST No.*</label>
                  <input name="gst_no" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">PAN Card No.*</label>
                  <input name="pan_no" className="form-control" />
                </div>
              </div>

              {/* Right Column */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Contact Person Name*</label>
                  <input name="client_personal_name" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input name="email" type="email" className="form-control" />
                </div>
                {/* <div className="mb-3">
                  <label className="form-label">Payment Terms</label>
                  <select className="form-select">
                    <option value="">Payment Terms</option>
                    <option value="">Due On Receipt</option>
                    <option value="">Advance</option>
                    <option value="">15 Days Credit</option>
                    <option value="">30 Days Credit</option>
                  </select>
                </div> */}
                <div className="mb-3">
                  <label className="form-label">GST Applicable of Not*</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentTerms"
                        id="paymentYes"
                        value="Yes"
                      />
                      <label className="form-check-label" htmlFor="paymentYes">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentTerms"
                        id="paymentNo"
                        value="No"
                      />
                      <label className="form-check-label" htmlFor="paymentNo">
                        No
                      </label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="border p-4 rounded client-add-box">
            <h4 className="fw-bold mb-4 pb-2 border-bottom">Billing Address</h4>

            <div>
              <div className=" mb-4 border-bottom border-1 pb-3" >
                <div className="card-body">
                  <div className="row g-3 align-items-end">
                    <div className="col-md-3">
                      <label className="form-label"> Person Name*</label>
                      <input
                        className="form-control"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Phone No.*</label>
                      <input
                        className="form-control"
                        placeholder="e.g. 9876543210"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="e.g. user@example.com"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">City*</label>
                      <input
                        className="form-control"
                        placeholder="e.g. Mumbai"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Address*</label>
                      <input
                        className="form-control"
                        placeholder="Street, Area, etc."
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">State*</label>
                      <input
                        className="form-control"
                        placeholder="e.g. Maharashtra"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Pin Code*</label>
                      <input
                        className="form-control"
                        placeholder="e.g. 400001"
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Country*</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>
                          Select Country
                        </option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </div>

                     <div className="col-md-3">
                        <label className="form-label">Payment Terms*</label>
                        <select className="form-select" defaultValue="">
                          <option value="" disabled>
                            Select Payment Terms
                          </option>
                          <option value="India">Due on Receipt</option>
                          <option value="United States">Advance</option>
                          <option value="United Kingdom">15 Days Credit</option>
                          <option value="Canada">30 Days Credit</option>
                        </select>
                      </div>  
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="d-flex gap-3 mt-4">
            <button type="submit" className="btn btn-submit px-4" >
              Submit
            </button>
            <button type="reset" className="btn btn-clear px-4">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientMasterAdd;
