import React from "react";
import { completedata, Ongoing, WorkingProgress } from "../../JSON/Services";
import { Button } from "react-bootstrap";
import ConstructionService from "../../component/ConstructionService";
import { Modal } from "react-bootstrap";
import video from "../../video/demo.mp4";
function ProjectScreen() {
  React.useEffect(() => {
    const data1 = completedata.products.splice(0, 3);
    const data2 = WorkingProgress.products.splice(0, 3);
    const data3 = Ongoing.products.splice(0, 3);
    setViewData(data1);
    setViewData2(data2);
    setViewData3(data3);
    setButtonHide("open");
  }, []);
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const [viewdata, setViewData] = React.useState([]);
  const [viewdata2, setViewData2] = React.useState([]);
  const [viewdata3, setViewData3] = React.useState([]);
  const [progress, setProgress] = React.useState("0");
  const [viewdata1, setViewData1] = React.useState([]);
  const [viewdata4, setViewData4] = React.useState([]);
  const [viewdata5, setViewData5] = React.useState([]);
  const [buttonhide, setButtonHide] = React.useState("open");
  const [active, setActive] = React.useState(1);
  const MoreView = () => {
    setViewData1(completedata.products);
    setViewData4(WorkingProgress.products);
    setViewData5(Ongoing.products);
    setButtonHide("");
  };
  const [modal, setModal] = React.useState("");
  const Data = (id) => {
    setModal(id);
    console.log("img", id);
    setShow(true);
  };
  return (
    <div>
      <div className="container">
        <div className="">
          <h1>Our Projects</h1>
          <p>Explore how our work has changed the life of our customers.</p>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="">
            <div className="col-lg-12 col-md-12 col-12 p-3">
              <span
                className={active === 1 ? "Actives" : "steps"}
                onClick={() => {
                  setProgress("0");
                  setActive(1);
                }}
              >
                COMPLETE
              </span>
            </div>
          </div>
          <div className="ml-2">
            <div className="col-lg-12 col-md-12 col-12 p-3">
              <span
                className={active === 2 ? "Actives" : "steps"}
                onClick={() => {
                  setProgress("1");
                  setActive(2);
                }}
              >
                WORKINGPROGRESS
              </span>
            </div>
          </div>
          <div className="ml-2 ">
            <div className="col-lg-12 col-md-12 col-12 p-3">
              <span
                className={active === 3 ? "Actives" : "steps"}
                onClick={() => {
                  setProgress("2");
                  setActive(3);
                }}
              >
                ONGOING
              </span>
            </div>
          </div>
        </div>
        {progress === "0" ? (
          <>
            <div className="row mt-3">
              {viewdata.map((D, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow ">
                      <img
                        src={D.image}
                        alt=""
                        className="img img-zoom"
                        onClick={() => Data(D)}
                      />
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {buttonhide === "open" ? (
              <div className="d-flex justify-content-center">
                <Button onClick={MoreView} className="btn">
                  More View
                </Button>
              </div>
            ) : (
              ""
            )}
            <div className="row ">
              {viewdata1.map((D) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow">
                      <img src={D.image} alt="" className="img img-zoom" onClick={() => Data(D)}/>
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
        {progress === "1" ? (
          <>
            <div className="row mt-3">
              {viewdata2.map((D) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow ">
                      <img src={D.image} alt="" className="img img-zoom" onClick={() => Data(D)}/>
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {buttonhide === "open" ? (
              <div className="d-flex justify-content-center">
                <Button onClick={MoreView} className="btn">
                  More View
                </Button>
              </div>
            ) : (
              ""
            )}
            <div className="row ">
              {viewdata4.map((D) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow">
                      <img src={D.image} alt="" className="img img-zoom" onClick={() => Data(D)}/>
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
        {progress === "2" ? (
          <>
            <div className="row mt-3">
              {viewdata3.map((D) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow ">
                      <img src={D.image} alt="" className="img img-zoom" onClick={() => Data(D)}/>
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {buttonhide === "open" ? (
              <div className="d-flex justify-content-center">
                <Button onClick={MoreView} className="btn">
                  More View
                </Button>
              </div>
            ) : (
              ""
            )}
            <div className="row ">
              {viewdata5.map((D) => {
                return (
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="mt-3 card shadow">
                      <img src={D.image} alt="" className="img img-zoom" onClick={() => Data(D)}/>
                      <p>City:{D.city}</p>
                      <p>Squre Fit :{D.sft}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          ""
        )}
        <div className="title">
          <h1>Walkthroughs - Video Tour</h1>
          <p>Over 800 happy family members are part of Brick&Bolt family.</p>
        </div>
        <div className="row center">
           {viewdata.map((D) => {
               return (
  
                  <div className="col-lg-4 col-md-6 col-xs-12">
                      <div className="mt-3 card shadow">
                      {/* <img src={D.image} alt="" className="img img-zoom" /> */}
                      {/* <video src={ D.video } className="img img-zoom" width="700" height="200" controls  > 
                           </video> */}
                        <video src={ video } className="img img-zoom" width="700" height="200" controls  > 
                           </video>
                      </div>
                  </div>

               );
            })}
        </div>
        <div></div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <h3>{modal.city}</h3>
          </Modal.Header>
          <div className="col-lg- col-md-6 col-12 p-4">
            <div className="mt-3 ">
              <img src={modal.image} alt="" className="img" />
              <p>City:{modal.city}</p>
              <p>Squre Fit :{modal.sft}</p>
            </div>
          </div>
          <Modal.Footer>
            <Button className="btn" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ConstructionService />
    </div>
  );
}

export default ProjectScreen;
