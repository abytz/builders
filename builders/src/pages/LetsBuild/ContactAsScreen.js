import React from 'react';
import Eye from '../../images/Eye.jpg';
import ConstructionService from '../../component/ConstructionService';

function ContactAsScreen() {
    const [hide , setHide] = React.useState("0");
    const [active,setActive] = React.useState (1);
    return (
        <div>
            <div className="container">
                <h1>Contact Us</h1>
                <p>It all started with an idea, that changed the way we look at construction today. We started with the aim of making the construction simple, transparent and reliable</p>
            <div className="d-flex justify-content-center">
                <h4>Most customer centric company making<br/> Construction absolutely simple,
                 transparent and<br/> reliable for everyone</h4>
            </div>
            <div className=" mt-4 p-2">
                <div className=" row d-flex justify-content-center">
                <div className="col-lg-2 col-md-2 col-2"><span className={active === 1 ? 'Active':"step"} onClick={()=>{setHide("0");setActive(1)}}>1</span></div>
                <div className="col-lg-2 col-md-2 col-2"><span className={active === 2 ? 'Active' :'step'} onClick={()=>{setHide("1");setActive(2)}}>2</span></div>
                <div className="col-lg-2 col-md-2 col-2"><span className={active === 3 ? 'Active' : 'step'} onClick={()=>{setHide("2");setActive(3)}}>3</span></div>
                <div className="col-lg-2 col-md-2 col-2"><span className={active === 4 ? 'Active' : 'step'} onClick={()=>{setHide("3");setActive(4)}}>4</span></div>
                <div className="col-lg-2 col-md-2 col-2"><span className={active === 5 ? 'Active' : 'step'} onClick={()=>{setHide("4");setActive(5)}}>5</span></div>
                </div>
            </div>
            <div className="mt-5">
                {hide ==="0" ? 
            <div className="row">
                <div className="col-lg-2 col-md-2   col-12"></div>
                <div className="col-lg-4 col-md-4   col-12">
                    <img className="img1" src={Eye} alt="logo" />
                </div>
                <div className="col-lg-4 col-md-4   col-12">
                    <h5>Eureka Moment</h5>
                    <p>The idea of Brick&amp;Bolt was born when Jayesh's father and his family members had faced many difficulties while constructing their homes.As the space was completely broken, he felt the need to organise it.</p>
                </div>
                <div className="col-lg-2 col-md-2  col-12"></div>
            </div>
            :""}
            {hide === "1" ?
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2   col-12"></div>
                <div className="col-lg-4 col-md-4   col-12">
                    <img className="img1" src={Eye} alt="logo" />
                </div>
                <div className="col-lg-4 col-md-4   col-12">
                    <h5>Launched</h5>
                    <p>After research of a year, Brick&Bolt was launched on 31st Jan 2018 with an aim of making construction simple, transparent and reliable.</p>
                </div>
                <div className="col-lg-2 col-md-2  col-12"></div>
            </div> 
            :""}
            {hide === "2" ?
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2   col-12"></div>
                <div className="col-lg-4 col-md-4   col-12">
                    <img className="img1" src={Eye} alt="logo" />
                </div>
                <div className="col-lg-4 col-md-4   col-12">
                    <h5>Received investment from Sequoia</h5>
                    <p>Sequoia Surge trusted  and invested in the company. It has been amazing partnership since then.</p>
                </div>
                <div className="col-lg-2 col-md-2  col-12"></div>
            </div>
            :""}
            {hide === "3" ?
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2   col-12"></div>
                <div className="col-lg-4 col-md-4   col-12">
                    <img className="img1" src={Eye} alt="logo" />
                </div>
                <div className="col-lg-4 col-md-4   col-12">
                    <h5>Crossed 600 units mark</h5>
                    <p> We have booked projects which will provide home to 600+ families</p>
                </div>
                <div className="col-lg-2 col-md-2  col-12"></div>
            </div>
            :""}
            {hide === "4" ?
            <div className="row mt-3">
                <div className="col-lg-2 col-md-2   col-12"></div>
                <div className="col-lg-4 col-md-4   col-12">
                    <img className="img1" src={Eye} alt="logo" />
                </div>
                <div className="col-lg-4 col-md-4   col-12">
                    <h5>Added Material Supply To Our Projects</h5>
                    <p>To control quality,  has started supplying construction materials at site.</p>
                </div>
                <div className="col-lg-2 col-md-2  col-12"></div>
            </div>
            :""}
             <div className="row mt-3">
                <div className="col-lg-6 col-md-4 col-12">
                    <h2>What we focus and strive for</h2>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <i className="fa fa-smile-o fa-3x"></i>
                    <p>Enjoyable Construction Experience</p>
                </div>
                <div className="col-lg-3 col-md-2 col-12">
                    <i className="fa fa-inr fa-3x"></i>
                <p>Best & Competitive Pricing</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 col-md-4 col-12">
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <i className="fa fa-check fa-3x"></i>
                    <p>Quality Assurance using our 310 Quality Checks</p>
                </div>
                <div className="col-lg-3 col-md-2 col-12">
                    <i className="fa fa-archive fa-3x"></i>
                <p>Payment to contractor only on completion of stage</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-6 col-md-4 col-12">
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <i className="fa fa-clock-o fa-3x"></i>
                    <p>No Delays - Safety mechanisms against delays</p>
                </div>
                <div className="col-lg-3 col-md-2 col-12">
                    <i className="fa fa-mobile fa-3x"></i>
                <p>Transparent Contracts and Online monitoring</p>
                </div>
            </div>
            </div>
            </div>
            <ConstructionService />

        </div>
    )
}

export default ContactAsScreen
