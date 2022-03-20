import React from "react";
import ConstructionService from "../../component/ConstructionService";
import BuildingMaterials from "../../images/Building-Materials.jpg";
import Quality from '../../images/Quality.jpg';
import percentage from '../../images/percentage.jpg';
import map from '../../images/map.jpg';
import steel from '../../images/steel.jpg';
import cpfitting from '../../images/cpfitting.jpg';
import cement from '../../images/cement.jpg';
import sanitaryware from '../../images/sanitaryware.jpg';
import sand from '../../images/sand.jpg';
import aggregate from '../../images/aggregate.jpg';
import Tiles from '../../images/Tiles.jpg';
import paint from '../../images/paint.jpg';
import delivery from '../../images/delivery.png';

function BuildingMaterialScreen() {
  return (
    <div>
      <img src={BuildingMaterials} alt="logo" className="w-100 h-100" />
      <div className="container">
        <h1 className="text-center">Buying building material made easier,<br/> at just a tap of a finger</h1>
        <p>
          {" "}
          material supply chain is now open for businesses. If you are a
          contractor or developer,<br/> looking to purchase construction material, we
          are here to serve you!
        </p>
        <div>
          <h2>Why purchase with us</h2>
          <p>
            We understand the pain and challenges associated with buying
            construction materials. So we simplified it for you!
          </p>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card mt-2 shadow">
                    <img src={percentage} alt="logo" className="img" />
                    <h5 className="text-center">Best Rate</h5>
                    <p className="text-muted">15% lesser than <br/> market rates</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card mt-2 shadow">
                    <img src={delivery} alt="logo" className="img" />
                    <h5 className="text-center">On-Time Delivery</h5>
                    <p className="text-muted">Delivering materials On-time every time</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card mt-2 shadow">
                    <img src={Quality} alt="logo" className="img" />
                    <h5 className="text-center">Assured Quality</h5>
                    <p className="text-muted">Best quality by partnering with best manufacturers</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card mt-2 shadow">
                    <img src={map} alt="logo" className="img" />
                    <h5 className="text-center">Everywhere</h5>
                    <p className="text-muted">Supplying all categories across the city. Making you global!</p>
                </div>
            </div>
        </div>
        <div className="mt-5">
             <h2>Material Categories</h2>
             <p>We are always growing so are the materials we are providing. We supply all the SKUs available in the market.</p>
        </div>
        <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Steel</h3>
                    <img src={steel} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">CP Fitting</h3>
                    <img src={cpfitting} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Cement</h3>
                    <img src={cement} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Sanitary Ware</h3>
                    <img src={sanitaryware} alt="logo" className="img-zoom img" />
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Sand</h3>
                    <img src={sand} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Aggregate</h3>
                    <img src={aggregate} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Tiles</h3>
                    <img src={Tiles} alt="logo" className="img-zoom img" />
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="card shadow">
                <h3 className="bg-primary text-center text-white">Paint</h3>
                    <img src={paint} alt="logo" className="img-zoom img" />
                </div>
            </div>
        </div>
      </div>
      <ConstructionService />
    </div>
  );
}

export default BuildingMaterialScreen;
