import React from "react";
import logo from "../images/logo.jpg";

function Navbr(props) {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar  navbar-expand-lg bg-ligh">
          <img src={logo} alt="logo" className="logo" />
          <h4 style={{ color:'#ffffff',padding:'6px'}}>
            {/* <a href="/"><b>SHASHI BUILDER`S</b></a> */}
            <b>SHASHI BUILDER`S</b>
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={props.id === 1 ? "active" : "inactive"}>
                <a href="/">About Us</a>
              </li>
              <li
                className={props.id === 2 ? "active" : ""}
              >
                <span>
                  Lets Build
                  <div className="sub-menu">
                    <ul>
                      <li>
                        <a href="/packages">Packages</a>
                      </li>
                      <li>
                        <a href="/contactas">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </span>
              </li>
              <li
                className={
                  props.id === 3 ? "active" : ""
                }
              >
                Estimator
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="/costestimator">Cost Estimator</a>
                    </li>
                    <li>
                      <a href="/materialestimator">Material Estimator</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={
                  props.id === 4 ? "active" : ""
                }>
                <a href="/project">Our Projects</a>
              </li>
              <li className={
                  props.id === 5 ? "active" : ""
                }>
                More
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="/howitwork">How it Works</a>
                    </li>
                    <li>
                      <a href="/renovation">Renovation</a>
                    </li>
                    <li>
                      <a href="/buildingmaterial">Building Material</a>
                    </li>
                    <li>
                      <a href="/FloorPlan">Floor Plan</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
               className={
                props.id === 6 ? "active" : ""
              }
              >
                Contact Us
                <div className="sub-menu">
                  <ul>
                    <li>
                      <a href="/enquirytextbox">Enquiry text Box</a>
                    </li>
                    <li>
                      <a href="/waytocontact">Way to Contact</a>
                    </li>
                    <li>
                      <a href="/officeaddress">Office Address</a>
                    </li>
                    <li>
                      <a href="/getdirection">Get Direction</a>
                    </li>
                  </ul>
                </div>
              </li>
              <span className="mt-2">
                <span >
                  <i className="fa fa-whatsapp fa-lg bg-white p-2"></i>
                  <i className="fa fa-phone fa-lg bg-white p-2" style={{fontsize:'15px', color:'blue'}}></i>
                 <span style={{color:'white'}}> +91 93413 46801</span>
                </span>
              </span>
            </ul>
          </div>
        </nav>
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default Navbr;
