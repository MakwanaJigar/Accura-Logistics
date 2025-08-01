import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VendorMasterAdd = () => {
  const navigate = useNavigate();
  const stateCityData = {
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Rajasthan: ['Jaipur', 'Udaipur', 'Jodhpur'],
  };

  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedOption, setSelectedOption] = useState('no');

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(stateCityData[state] || []);
  };


  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master <i className="fa-solid fa-angles-right" /> Warehouse Add
        </p>

        <div className="delivery-challan-top-title-container">
          <h3 className="main-container-title">Warehouse Add</h3>
          <div className="export-addnew-btn0-container">
            <Link to="/vendor">Go Back</Link>
          </div>
        </div>

        <div className="py-5">
          <h3>Add Vendor</h3>
          <form className="challan-add-main-right-container py-5">
            <div className="border p-4 rounded client-add-box">
              <h4 className="fw-bold mb-4 pb-2 border-bottom">Add Vendor</h4>
              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Company Name*</label>
                    <input
                      name="driver_name"
                      className="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Person Name*</label>
                    <input
                      name="driver_name"
                      className="form-control"
                      placeholder="Enter Contact Person Name"
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
                    <label className="form-label">Email Id</label>
                    <input type="email" name="dl_expiry" className="form-control" placeholder='Enter Email Id' />
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      name="min_trip"
                      className="form-control"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">State*</label>
                    <select
                      className="form-control"
                      value={selectedState}
                      onChange={handleStateChange}
                    >
                      <option value="">-- Select State --</option>
                      {Object.keys(stateCityData).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">City*</label>
                    <select className="form-control">
                      <option value="">-- Select City --</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Pin Code*</label>
                    <input
                      type="number"
                      name="salary"
                      placeholder="Enter Pin Code"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border p-4 rounded client-add-box">
              <h4 className="fw-bold mb-4 pb-2 border-bottom">Payment Terms</h4>
              <div>
                <div className=" mb-4 border-bottom border-1 pb-3" >
                  <div className="card-body">
                    <div className="row">

                      {/* Left Column */}
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

                      {/* Right Column */}
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

            </div>

            <div className="border p-4 rounded client-add-box">
              <h4 className="fw-bold mb-4 pb-2 border-bottom">Fleet</h4>
              <div>
                <div className=" mb-4 border-bottom border-1 pb-3" >
                  <div className="card-body">
                    <div className="row">

                      {/* Left Column */}
                      <div className="col-md-6">

                        <div className="mb-3 d-flex gap-3 ">
                          <label>Do Yo Want To Add Fleet</label>
                          <label className='d-flex align-items-center gap-2'>
                            <input
                              type="radio"
                              name="yesno"
                              value="yes"
                              checked={selectedOption === 'yes'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            Yes
                          </label>
                          <label className='d-flex align-items-center gap-2'>
                            <input
                              type="radio"
                              name="yesno"
                              value="no"
                              checked={selectedOption === 'no'}
                              onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            No
                          </label>
                        </div>
                      </div>

                      <div className="col-md-12">


                        {/* FLEET FIELDS */}
                        {
                          selectedOption === "yes" ? (
                            <div className="row col-md-12 mb-3">
                              <div className="col-md-4">
                                <label className="form-label">Fleet Size (Ft.)*</label>
                                <input name="fleet_size" type="number" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Fleet Capacity (Ton)*</label>
                                <input name="fleet_capacity" type="number" className="form-control" />
                              </div>
                              <div className="col-md-4">
                                <label className="form-label">Quantity*</label>
                                <input name="quantity" type="number" className="form-control" />
                              </div>
                            </div>
                          ) : null
                        }
                      </div>

                    </div>
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

export default VendorMasterAdd;
