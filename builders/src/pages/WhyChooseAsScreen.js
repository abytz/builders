import React from "react";
import safemoney from "../images/safemoney.jpg";
import Tranferency from "../images/Tranferency.png";
import ZeroDelay from "../images/ZeroDelay.jpg";
import Quality from "../images/Quality.jpg";
import ConstructionService from "../component/ConstructionService";

function WhyChooseAsScreen() {
  return (
    <div >
      <div className="container">
      <div className="mt-2">
            <h1 className="d-flex justify-content-center ">
              Why Choose this Construction
            </h1>
            <p className="d-flex justify-content-center ">
              We ensure peace of mind, trust, and transparent construction.
            </p>
          </div>
        <div className="row">
    <div className="col-lg-1 col-md-2 col-xs-4"></div>

          <div className="col-lg-4 col-md-4 col-xs-4">
          <h5 className="justify-content-center mt-2 ">
             <b> Safe Money Transaction</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={safemoney} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 "><i className="fa fa-check mr-2"></i>No Advance.Contractor is paid only once the work is Completed</p>
            <p><i className="fa fa-check mr-2"></i>Money transactions work on an Escrow Model. No advance payment is done to the contractor for any stage.</p>
            <p><i className="fa fa-check mr-2"></i>A project is typically divided into multiple stages. For every stage, customer transfers only the stage amount to Escrow</p>
            <p><i className="fa fa-check mr-2"></i>Only once the project is approved by our project managementthe amount is transferred to the contractor</p>
            <p><i className="fa fa-check mr-2"></i>This completely safeguards our customers. Ensures sound sleep every day</p>
    </div>
        </div>
        <div className="row mt-4">
    <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-6 col-xs-4">
          <h5 className="justify-content-center mt-2">
              <b>Absolute Transferency</b>
            </h5>
            <img className="mt-4 ml-5 image-size" src={Tranferency} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 "><i className="fa fa-check mr-2"></i>Clear and Detailed Quotation. Online tracking of Project</p>
            <p><i className="fa fa-check mr-2"></i>Our detailed specifications and contracts list every that goes into your construction.</p>
            <p><i className="fa fa-check mr-2"></i>Everything is managed through a centralized platform where customers, contractors and project management teams interact in real-time.</p>
          </div>
        </div>
        <div className="row mt-4">
    <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-6 col-xs-6">
          <h5 className="justify-content-center mt-2">
              <b>Assured Quality </b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={Quality} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-6 shadow">
            <p className="mt-4"><i className="fa fa-check mr-2"></i>500+ Quality checks performed by team of experts</p>
            <p><i className="fa fa-check mr-2"></i>We assess all projects on the same quality standards called QASCON-BNB (Quality Assessment System for Construction - Brick&Bolt).</p>
            <p><i className="fa fa-check mr-2"></i>This has 310 quality checks per floor of construction. Our project management team assess the quality on these parameters.</p>
            <p><i className="fa fa-check mr-2"></i>Quality and the progress of the project is monitored through multiple technology platforms which ensures no quality check is missed during construction process.</p>
          </div>
        </div>
        <div className="row mt-4">
    <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-6 col-xs-6 ">
            <h5 className=" mt-2"><b>Zero Delays</b></h5>
            <img className="ml-5 mt-4 mb-2 image-size" src={ZeroDelay} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-6 shadow">
            <p className="mt-5"><i className="fa fa-check mr-2"></i>Zero tolerence for delays</p>
            <p><i className="fa fa-check mr-2"></i>In case of avoidable delays in the project, we have strict penalty clauses where the customer is monetarily compensated.</p>
            <p><i className="fa fa-check mr-2"></i>Our construction project management software helps to manage the construction activity to give us live updates and helps us to avoid any delays in construction projects.</p>
          </div>
        </div>
      </div>
      <ConstructionService />
    </div>
  );
}

export default WhyChooseAsScreen;
