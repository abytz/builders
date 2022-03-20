import React from "react";
import ConstructionService from "../../component/ConstructionService";


function OfficeAddressScreen() {
  return (
    <div>

      <div className="container">
      
        <h4><b>Office Address :-</b></h4>
  
        <address>
            <h5 style={{ color:'#035efc',texttransform:'capitalize'}}> Shashi Builders & Constructions</h5>
           <p> No.248 ,2nd Floor,<br/> Thirumala Builing,<br/> SAINAGAR Rd,<br/>
            Neraluru,<br/> Bengaluru,<br/> Karnataka 562107.</p>

        </address>   
 
      </div>
      <ConstructionService />
    </div>
  );
}

export default OfficeAddressScreen;
