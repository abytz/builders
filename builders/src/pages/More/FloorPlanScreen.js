import React from "react";
import ConstructionService from "../../component/ConstructionService";
import { Flooeplans } from "../../JSON/Services";

function FloorPlanScreen() {
  return (
    <div>
      <div className="container">
        <h1>House Floor Plans and Designs</h1>
        <p>Find the curated floor plans </p>
        <div className="row">
          {Flooeplans.Product.map((D) => {
            return (
                <>
                <div className="col-lg-2 col-md-1 col-1"></div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="border shadow p-2 mt-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                      <b>{D.data}</b>
                      <p>{D.data0}</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <b>{D.data2}</b>
                      <p>{D.data1}</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <img src={D.image} alt="logo" className="h-100 w-100" />
                    </div>
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
      <ConstructionService />
    </div>
  );
}

export default FloorPlanScreen;
