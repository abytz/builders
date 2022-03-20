import React from 'react'
import {Services} from '../../JSON/Services';
import ConstructionService from '../../component/ConstructionService';

function MoreSevices() {
    return (
        <div>
        <div className="container">
           <div className=" mt-3">
            <h1 className="">More Services</h1>
            <p className="">
              Flawless construction powered by deep expertise.
            </p>
          </div>
          <div className="row">
          {Services.Product.map(D=>{
                    return (
            <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="mt-2 card shadow">
                            <h4 className="bg-primary text-white p-2">
                 {D.data0}
                </h4> 
                    <img className="img img-zoom" src={D.image} alt="logo" />
                    </div>
                    </div>
                    )
                })}
          </div>
        </div>
      <ConstructionService />
</div>
    )
}

export default MoreSevices
