import React from 'react'
import Quqlity from "../images/Quality.jpg";
import Safemoney from "../images/safemoney.jpg";
import Transferency from "../images/Tranferency.png";
import ZeroDelay from "../images/ZeroDelay.jpg"

function OurFeatures() {
    return (
        <div className=" mt-2 p-4">
            <div>
                <h1>Our Features</h1>
                <p>We can become your construction partner and scale your business through our scalable and elastic model</p>
            </div>
            <div className="row ">
            <div className="mt-2 col-lg-3 col-md-3 col-xs-12">
              <div className="card">
                <img className="img" src={Safemoney} alt="logo" />
                <h6 className="justify-content-center mt-2">
                  Safe Money Transaction
                </h6>
                <p className="justify-content-center text-muted">
                  No Advance.Contractor is paid only once the work is Completed
                </p>
              </div>
            </div>
            <div className="mt-2 col-lg-3 col-md-3 col-xs-12">
              <div className="card">
                <img className="img" src={Transferency} alt="logo" />
                <h6 className="justify-content-center mt-2">
                  Absolute Transferency
                </h6>
                <p className="justify-content-center text-muted">
                  Clear and Detailed Quotation. Online tracking of Project
                </p>
              </div>
            </div>
            <div className="mt-2 col-lg-3 col-md-3 col-xs-12">
              <div className="card">
                <img className="img" src={Quqlity} alt="logo" />
                <h6 className="justify-content-center mt-2">
                  Assured Quality Control
                </h6>
                <p className="justify-content-center text-muted">
                  500+ Quality checks performed by team of experts
                </p>
              </div>
            </div>
            <div className="mt-2 col-lg-3 col-md-3 col-xs-12">
              <div className="card">
                <img className="img" src={ZeroDelay} alt="logo" />
                <h6 className="justify-content-center mt-2">Zero Delays</h6>
                <p className="justify-content-center text-muted">
                  Zero <br />
                  tolerence for delays
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default OurFeatures
