import React from 'react'
import ConstructionService from '../../component/ConstructionService'

function GetDirectionScreen() {
    return (
        <div>
            <div className="container">
                <h1>Get Direction</h1>
                <div className="">
                    <i className="fa fa-map-marker fa-4x">Direction 1</i>
                    <i className="fa fa-map-marker fa-4x">Direction 2</i>
                    <i className="fa fa-map-marker fa-4x">Direction 3</i>
                    <i className="fa fa-map-marker fa-4x">Direction 4</i>
                </div>
            </div>
        <ConstructionService />
        </div>
    )
}

export default GetDirectionScreen
