import React from "react";
import { Button } from "react-bootstrap";
import ConstructionService from "../../component/ConstructionService";
import FrequentlyAskQue from "./CostEstimate/FrequentlyAskQue";

function MaterialEstimator() {
  return (
    <div>
      <div className="container">
        <div className="mt-4">
          <h1>Building Material Calculator</h1>
          <p>
            Fill in the details to find the materials required to build a space.
          </p>
        </div>
        <div className="">
        <div className="row">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Name</b>
            </label>
            <input
              onChange={(e) => {
               // setBuildUpArea(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted" >Mobile Number</b>
            </label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                // setCarParking(e.target.value);
              }}
              placeholder="Mobile Number"
            />
          </div>
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Plot Length in ft</b>
            </label>
            <input
              onChange={(e) => {
                // setBuildUpArea(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Plot Length in ft"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Plot Breadth in ft</b>
            </label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                // setCarParking(e.target.value);
              }}
              placeholder="Plot Breadth in ft"
            />
          </div>
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Number Of Floors</b>
            </label>
            <input
              onChange={(e) => {
                // setBuildUpArea(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Number Of Floors"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Total BuildUp Area</b>
            </label>
            <input
              className="form-control"
              type="text"
              onChange={(e) => {
                // setCarParking(e.target.value);
              }}
              placeholder="Total BuildUp Area"
            />
          </div>
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
         <div className="row mt-2">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Sump Capacity</b>
            </label>
            <input
              onChange={(e) => {
                // setBuildUpArea(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Sump Capacity"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b className="text-muted">Sump Type</b>
            </label>
            <select className="form-control">
                <option>RCC</option>
                <option>Block Work</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
        <div className="d-flex justify-content-center">
            <Button className="btn">Estimate Material</Button>
        </div>
        </div>
        <FrequentlyAskQue />
        <ConstructionService />
      </div>
    </div>
  );
}

export default MaterialEstimator;
