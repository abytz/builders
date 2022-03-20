import React from "react";
import ConstructionService from "../../component/ConstructionService";
import RaiseRequest from "../../images/RaiseRequest.jpg";
import Meeting from "../../images/Meeting.jpg";
import BookWithUs from '../../images/BookWithUs.jpg';
import DetailPlan from '../../images/DetailPlan.jpg';
import Tracking from '../../images/Tracking.jpg';

function HowItWorkScreen() {
  return (
    <div>
      <div className="container">
        <h1>How it works</h1>
        <p>
          Our steps are simple and easy to understand:
          <b>Plan - Build - Track - Settle in</b>
        </p>
        <div className="row">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Raise a request</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={RaiseRequest} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 ">
              <i className="fa fa-check mr-2 mt-5"></i>Raise a service request or
              call us at +91 7505 205 205. Our team will get in touch with you
              to understand your requirements in more detail
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>They will arrange the meeting
              with our technical expert.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Meet our Expert</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={Meeting} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 ">
              <i className="fa fa mr-2 mt-5"></i>
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Experts will guide you in selecting the right package and solve any queries that you may have.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Book with Us</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={BookWithUs} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 ">
              <i className="fa fa mr-2 mt-5"></i>
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Good to go ! You pay 5% of the estimated project cost as the booking amount
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Receive Detailed Plans</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={DetailPlan} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className=" ">
              <i className="fa fa-check mr-2 mt-3"></i>Our architects will provide exhaustive drawings and designs till you are completely satisfied.
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Designs include floor plans, 3D elevations, electrical, plumbing and structural designs
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Project manager is allotted and project management team works on your contract.
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>All project details like specifications, work and payment schedules etc are fed into the system
            </p>
          </div>
        </div>
        <div className=" shadow mt-4 p-4 d-flex justify-content-center">
            <h1><i className="fa fa-check fa-lg"></i>Amazing Construction work starts now</h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Track & Transact</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={Tracking} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className=" ">
              <i className="fa fa-check mr-2 mt-3"></i>To ensure absolute trust, provides an escrow model where you transfer the amount for every stage of the project.
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Only on successful completion of a stage,amount is transferred to the contractor.
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>Our project management team tracks and monitors your project through our system and processes - through regular site visits.
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>You get the project updates through our customer application.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-1 col-md-2 col-xs-4"></div>
          <div className="col-lg-4 col-md-4 col-xs-4">
            <h5 className="justify-content-center mt-2 ">
              <b>Settle In</b>
            </h5>
            <img className="ml-5 mt-4 image-size" src={BookWithUs} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-xs-4 shadow">
            <p className="mt-4 ">
              <i className="fa fa mr-2 mt-5"></i>
            </p>
            <p>
              <i className="fa fa-check mr-2"></i>The last and final stage. We make sure you are well settled in your new home. Our journey together doesn't end here. We provide <span className="text-primary"><b>15 years of warranty</b></span>
            </p>
          </div>
        </div>
        <div className=" shadow mt-4 p-4 d-flex justify-content-center">
            <h1><i className="fa fa-check fa-lg"></i>Planned - Built - Tracked - Settled</h1>
        </div>
      </div>
      <ConstructionService />
    </div>
  );
}

export default HowItWorkScreen;
