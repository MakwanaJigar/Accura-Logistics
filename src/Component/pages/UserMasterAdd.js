import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserMasterAdd = () => {
  return (
    <div className="container-fluid">
      <div className="main-content">
        <p className="main-container-title">
          Dashboard <i className="fa-solid fa-angles-right" /> Master{' '}
          <i className="fa-solid fa-angles-right" /> User Add
        </p>

        <div className="delivery-challan-top-title-container container">
          <h3 className="main-container-title">User</h3>
          <div className="export-addnew-btn0-container">
            <Link to="/user">Go Back</Link>
          </div>
        </div>

        <div className="challan-add-main-right-container pb-3">
          <div className="form-section client-info-container">
            <h3>User</h3>

            <form className="py-3">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone No.*</label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Enter Your Phone No."
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Username*</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter Your Username"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3 position-relative">
                  <label className="form-label">Password*</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    className="form-control"
                    required
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '25px',
                      top: '73%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color: '#888',
                    }}
                  >
                    <i className="fa-solid fa-eye-slash"></i>
                  </span>
                </div>
                <div className="col-md-6 mb-3 position-relative">
                  <label className="form-label">Confirm Password*</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password..."
                    className="form-control"
                    required
                  />
                  <span
                    style={{
                      position: 'absolute',
                      right: '25px',
                      top: '73%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color: '#888',
                    }}
                  >
                    <i className="fa-solid fa-eye-slash"></i>
                  </span>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Department / Role*</label>
                  <select className="form-select">
                    <option value="">Select Department / Role</option>
                    <option value="">User</option>
                    <option value="">Admin</option>
                  </select>
                </div>

              </div>

              <div className="d-flex gap-3 mt-4">
                <button type="submit" className="btn btn-submit px-4" >
                  Submit
                </button>
                <button type="reset" className="btn btn-clear px-4" >
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

export default UserMasterAdd;
