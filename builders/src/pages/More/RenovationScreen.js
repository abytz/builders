import React from 'react'
import ConstructionService from '../../component/ConstructionService';
import {Renovation} from '../../JSON/Services';

function RenovationScreen() {
    return (
        <div>
            <div className="container">
            <h1>Renovation Designs</h1>
            <p>We are always growing so are the materials we are providing. We supply all the SKUs available in the market.</p>
            <div className="row">
                {Renovation.Product.map(D=>{
                    return (
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="card shadow mt-5">
                                <img src={D.image} alt="logo" className=" img-zoom img" />
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

export default RenovationScreen
