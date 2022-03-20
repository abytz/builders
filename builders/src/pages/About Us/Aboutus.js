import { Button } from "react-bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import Eye from "../../images/Eye.jpg";
import Eye1 from "../../images/Eye1.jpg";
import Eye3 from '../../images/logo.jpg'
import { useHistory } from "react-router";
import ConstructionService from "../../component/ConstructionService";
import OurFeatures from "../../component/OurFeatures";
import { Services } from "../../JSON/Services";

function Aboutus(props) {
  const [servicedata ,setData] = React.useState([]);
  React.useEffect(()=>{
    const data = Services.Product.slice(0,3);
    setData(data);
  },[])
  const history = useHistory();
  const LearnMore =()=>{
    history.push("/whyas");
  }
    const LetsBuild =()=>{
      history.push("/letsbuild")
    }
    const MoreServices = () =>{
      history.push('/moreservices')
    }
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col">
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <img className="carousel-image" src={Eye} alt="First slide" />
                <Carousel.Caption>
                  <h1 className="image-h1">
                    Constructing <br />
                    home has never
                    <br /> been this simple
                  </h1>
                  <p className="image-p">
                    We construct homes and ensure peace of mind you deserve with{" "}
                    <br />
                    our project tracking service.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="carousel-image" src={Eye1} alt="Second slide" />

                <Carousel.Caption>
                  <h1 className="image-h1">
                    Constructing <br />
                    home has never
                    <br /> been this simple
                  </h1>
                  <p className="image-p">
                    We construct homes and ensure peace of mind you deserve with{" "}
                    <br />
                    our project tracking service.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="carousel-image" src={Eye3} alt="Third slide" />

                <Carousel.Caption>
                  <h1 className="image-h1">
                    Constructing <br />
                    home has never
                    <br /> been this simple
                  </h1>
                  <p className="image-p">
                    We construct homes and ensure peace of mind you deserve with{" "}
                    <br />
                    our project tracking service.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div className="">
          <div className="mt-2 d-flex justify-content-center">
            <Button onClick={LetsBuild} className="col-lg-2 shadow btn">LET`S BUILD</Button>
          </div>
          <div className=" mt-3">
            <h1 className="d-flex justify-content-center">Services</h1>
            <p className="d-flex justify-content-center">
              Flawless construction powered by deep expertise.
            </p>
          </div>
          <div className="row">
          {servicedata.map(D=>{
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
          <div className="mt-2 d-flex justify-content-center ">
              <Button onClick={MoreServices} className="btn" >More Services</Button>
            </div>
          <div className="mt-4">
            <h1 className="d-flex justify-content-center ">
              Why Choose this Construction
            </h1>
            <p className="d-flex justify-content-center ">
              We ensure peace of mind, trust, and transparent construction.
            </p>
          </div>
          <div className="shadow">
            <OurFeatures />
            <div className="d-flex justify-content-center">
          <Button className="btn " onClick={LearnMore} >Learn More</Button>
        </div>
          </div>
        </div>
       
      </div>
      <ConstructionService />
    </div>
  );
}

export default Aboutus;
