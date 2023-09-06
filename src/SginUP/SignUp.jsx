import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./SignUpStyle.css";

function SignUp() {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    Password: "",
    Repassword: "",
    receiveEmails: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can access form data using formData object
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="mySign">
    <div style={{ opacity: 0.7 , margin: "72.5px" }}>
      <form className="form-signup" onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <p>Create your account here</p>
        <div className="form-group">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="Username">Username:</label>
            </div>
            <div className="col-md-7">
              <input
                type="text"
                name="Username"
                className="form-control"
                id="Username"
                placeholder="Username"
                value={formData.Username}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="col-md-7">
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="Password">Password:</label>
            </div>
            <div className="col-md-7">
              <input
                type="password"
                name="Password"
                className="form-control"
                id="Password"
                placeholder="Password"
                value={formData.Password}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-5">
              <label htmlFor="Repassword">Confirm Password:</label>
            </div>
            <div className="col-md-7">
              <input
                type="password"
                name="Repassword"
                className="form-control"
                id="Repassword"
                placeholder="Confirm Password"
                value={formData.Repassword}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/* ... rest of your form */}

        <div className="form-group">
          <p >
            <input className="mx-1"
              type="checkbox"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            I accept the <a href="">Terms of use</a> and
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <div className="row">
          <button className="btn btn-block" type="submit">
            Sign-Up
          </button>
        </div>
        <div className="center">
          Already have an account? <b>Log in</b> <Link to="/Login">Here</Link>
        </div>
      </form>
    </div>
    </div>
  );
}

export default SignUp;
