import React from "react";
import { Button } from "react-bootstrap";
import ConstructionService from "../../component/ConstructionService";
import FrequentlyAskQue from './CostEstimate/FrequentlyAskQue';

function CostEstimator() {
  const [hide, setHide] = React.useState(false);
  const [carparking, setCarparking] = React.useState("");
  const [siteLength, setSiteLength] = React.useState("");
  const [siteWidth, setSiteWidth] = React.useState("");
  const [nofloors, setNofloors] = React.useState("");
  const [calculatedPriceList,setCalculatedPriceList] = React.useState([]);
  const [calculatedPriceListt,setCalculatedPriceListt] = React.useState([]);
  // const [ builduparea_sqft, setBuilduparea_sqft] = React.useState("");

const Estimte = () => {
    if (carparking !== "" && siteLength !== "" && siteWidth !== "" && nofloors !== "") {
      setHide(true);
      //let plan_package =1650;
      setCalculatedPriceList([]);
      estimteCost(1650);
      estimteCost(1750);
      estimteCost(1850);
      calculatedPriceList.map(link =>
        console.log(link.buildupcost)
      )
      setCalculatedPriceListt(calculatedPriceList);
    } else {
      setHide(false);
    }
  };

  const estimteCost = (plan_package) => {
    let total_sqft = siteLength * siteWidth;
    let compound_sqft = total_sqft - ((siteLength-4) * (siteWidth-4));
    let carparking_sqft = carparking * 135;
    let builduparea_sqft = total_sqft - (compound_sqft+carparking_sqft);
    let floor_sqft = builduparea_sqft+carparking_sqft;
    let total_floor_sqft = nofloors * floor_sqft;
    let build_upcost = builduparea_sqft * plan_package;
    let carparking_cost = carparking_sqft * ((plan_package/100)*70);
    let floor_cost = total_floor_sqft * plan_package;

    let list= {"planpackage":plan_package,"builduparea":builduparea_sqft,"buildupcost":build_upcost,"carparking":carparking_sqft,"carparkingcost":carparking_cost,"nofloors":nofloors,"floorsqft":floor_sqft,"floorcost":floor_cost,"total_floor_sqft":total_floor_sqft};
    
    calculatedPriceList.push(list);
    console.log(calculatedPriceList);
  };

  return (
    <div>     
      <div className="container">
        <div className="mt-4">
          <h1 className="d-flex justify-content-cente ">
            House Construction Cost Calculator
          </h1>
          <p className="d-flex justify-content-cente text-muted">
            Fill in the details below to get the rough cost of the construction.
            Talk to our technical consultant for the exact cost.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b>Build up Area Site Dimention(sq.ft)</b>
            </label>
            <input
              onChange={(e) => {
                setSiteLength(e.target.value);
              }}
              value={siteLength}
              className="form-control"
              type="number"
              placeholder="Site Dimention - Length (sq.ft)"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b>Build up Area Site Dimention(sq.ft)</b>
            </label>
            <input
              className="form-control"
              type="number"
              value={siteWidth}
              onChange={(e) => {
                setSiteWidth(e.target.value);
              }}
              placeholder="Site Dimention - Width (sq.ft)"
            />
          </div>         
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b>No of Car Parking(135 sq.ft/unit)</b>
            </label>
            <select className="form-control" value={carparking} onChange={(e) => {
                setCarparking(e.target.value);
              }}>
              <option value="">No of Car Parking(130 sq.ft/unit)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>           
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b>No. Of Floors</b>
            </label>
            <select className="form-control" value={nofloors} onChange={(e) => {
                setNofloors(e.target.value);
              }}>
            <option value="">No of Floors</option>
              <option value="1">G+1</option>
              <option value="2">G+2</option>
              <option value="3">G+3</option>
              <option value="4">G+4</option>
              <option value="5">G+5</option>
              <option value="6">G+6</option>
            </select>
          </div>
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <label>
              <b>Choose City</b>
            </label>
            <select className="form-control">
              <option>Bangaluru</option>
              <option>Chennai</option>
            </select>           
          </div>         
          <div className="col-lg-2 col-md-0 col-xs-12"></div>
        </div>
        <div className="d-flex justify-content-center">
          <Button className="btn" onClick={Estimte}>
            Cost Estimate
          </Button>
        </div>
        {hide === true ? (
        <div className="row ">
            {calculatedPriceListt.map(product =>             
            <div className="mt-3 col-lg-4 col-md-4 col-xs-12">
              <div className=" shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Gold - {product.planpackage}/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-7 col-xs-7">
                    <b>Build Up Cost</b>
                    <p className="text-muted">{product.builduparea}sq.ft*Rs{product.planpackage}/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-5">
                    <b>Rs {product.buildupcost}</b>
                  </div>

                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-7">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">{product.carparking}sq.ft*Rs{product.planpackage}/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-5">
                    <b>Rs {product.carparkingcost} </b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Nofloors </b>
                    <p className="text-muted">{product.nofloors} * {product.total_floor_sqft} Fl.sq.ft*Rs {product.planpackage}/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs{product.floorcost} </b>
                  </div>
                </div>
                <h5 className="bg-primary d-flex justify-content-center text-white p-2 font-size-bold">
                   <center><b>Total Cost - <i class="fa fa-inr" style={{color:'#fff'}} > 
                   {product.floorcost+product.carparkingcost+product.buildupcost}</i></b></center>
               </h5>
              </div>
            </div>
            )}
            {/* <div className="mt-2 col-lg-4 col-md-4 col-xs-12">
              <div className="shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Platinum - 1750/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Build Up Cost</b>
                    <p className="text-muted">0 sq.ft*Rs1580/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-2">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">0*130sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Balcony & utility Cost</b>
                    <p className="text-muted">12000sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 1,13,76,000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 col-lg-4 col-md-4 col-xs-12">
              <div className="shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Diamond - 1850/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-10">
                    <b>Build Up Cost</b>
                    <p className="text-muted">0 sq.ft*Rs1580/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-10">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">0*130sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-6">
                    <b>Balcony & utility Cost</b>
                    <p className="text-muted">12000sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 1,13,76,000</b>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ) : (
          ""
        )}
        {/* {hide === true ? (
          <div className="row mt-4">
            <div className="mt-2 col-lg-4 col-md-4 col-xs-12">
              <div className="shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Premium Package - 1920/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Build Up Cost</b>
                    <p className="text-muted">0 sq.ft*Rs1580/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">0*130sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-6">
                    <b>Balcony & utility Cost</b>
                    <p className="text-muted">12000sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 1,13,76,000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 col-lg-4 col-md-4 col-xs-12">
              <div className="shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Royale Package - 2030/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Build Up Cost</b>
                    <p className="text-muted">0 sq.ft*Rs1580/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">0*130sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-6">
                    <b>Balcony & utility Cost</b>
                    <p className="text-muted">12000sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 1,13,76,000</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 col-lg-4 col-md-4 col-xs-12">
              <div className="shadow">
                <h6 className="bg-primary d-flex justify-content-center text-white p-2">
                  Imperia Package - 2190/sq.ft
                </h6>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Build Up Cost</b>
                    <p className="text-muted">0 sq.ft*Rs1580/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-12">
                    <b>Car Parking Cost</b>
                    <p className="text-muted">0*130sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 0</b>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-lg-7 col-md-5 col-xs-6">
                    <b>Balcony & utility Cost</b>
                    <p className="text-muted">12000sq.ft*Rs948/sq.ft</p>
                  </div>
                  <div className="col-lg-5 col-md-7 col-xs-12">
                    <b>Rs 1,13,76,000</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )} */}
        <FrequentlyAskQue />
      </div>
      <ConstructionService />
    </div>
  );
}
export default CostEstimator;