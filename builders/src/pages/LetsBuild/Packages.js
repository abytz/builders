import React from 'react'
import ConstructionService from '../../component/ConstructionService'
import Package1 from '../../component/Package1'
import Package2 from '../../component/Package2'

function Packages() {
    return (
        <div>
        <div className="container">
        <div className="">
        <h2 className="d-flex justify-content-cente">Packages</h2>
        <p className="d-flex justify-content-cente">
          Find the best home construction packages.
        </p>
      </div>
        <div >
            <Package1 />
        </div>
        <div >
            <Package2 />
        </div>
        </div>
        <ConstructionService />
        </div>
    )
}

export default Packages
