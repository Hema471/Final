import React from "react";
import "./about.css";
import Instgramlogo from "../assets/instgramlogo";

import FacebookLogo from "../assets/facebooklogo";
import Pinterestlogo from "../assets/pinterestlogo";

export default function footer() {
  return (
    <>
      <div className="col_footer">
        <div className="mangerfooter">
          <div className="mainfooter">
            <h4>GET IN TOUCH!</h4>
            <h5>kariiimssamirr@gmail.com</h5>
            <h5>01129833816</h5>
          </div>
          <button id="conbtn" className="btn btn-dark">
            CONTACT US
          </button>
          <div className="mainfooter">
            <FacebookLogo />
            <Pinterestlogo />
            <Instgramlogo />
            <h5>Copyright: &copy; {new Date().getFullYear()}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
