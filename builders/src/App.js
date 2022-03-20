import { BrowserRouter, Route } from "react-router-dom";
import "./sass/App.scss";
import Footer from "./component/Footer";
import Navbr from "./component/Navbar";
import Aboutus from "./pages/About Us/Aboutus";
import Packages from "./pages/LetsBuild/Packages";
import WhyChooseAsScreen from "./pages/WhyChooseAsScreen";
import ContactAsScreen from "./pages/LetsBuild/ContactAsScreen";
import LetsBildScreen from "./pages/LetsBildScreen";
import CostEstimator from "./pages/Estimator/CostEstimator";
import MaterialEstimator from "./pages/Estimator/MaterialEstimator";
import MoreSevices from "./pages/About Us/MoreSevices";
import ProjectScreen from './pages/Project/ProjectScreen';
import HowItWorkScreen from './pages/More/HowItWorkScreen';
import FloorPlanScreen from './pages/More/FloorPlanScreen';
import BuildingMaterialScreen from './pages/More/BuildingMaterialScreen';
import RenovationScreen from './pages/More/RenovationScreen';
import EnquiryTextBoxScreen from './pages/ContactUs/EnquiryTextBoxScreen';
import GetDirectionScreen from './pages/ContactUs/GetDirectionScreen';
import OfficeAddressScreen from './pages/ContactUs/OfficeAddressScreen';
import WayToCantactScreen from './pages/ContactUs/WayToCantactScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main className="Nav">
        <Route
          exact
          path="/"
          render={(props) => (
            <Navbr id={1} {...props}> <Aboutus {...props} /></Navbr>
          )}
        />
        <Route
          exact
          path="/packages"
          render={(props) => (
            <Navbr id={2} {...props}>
              <Packages {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/contactas"
          render={(props) => (
            <Navbr id={2} {...props}>
              <ContactAsScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/whyas"
          render={(props) => (
            <Navbr {...props}>
              <WhyChooseAsScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/letsbuild"
          render={(props) => (
            <Navbr {...props}>
              <LetsBildScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/costestimator"
          render={(props) => (
            <Navbr id={3} {...props}>
              <CostEstimator {...props} />
            </Navbr>
          )}
        />
         <Route
          exact
          path="/materialestimator"
          render={(props) => (
            <Navbr id={3} {...props}>
              <MaterialEstimator {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/moreservices"
          render={(props) => (
            <Navbr {...props}>
              <MoreSevices {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/project"
          render={(props) => (
            <Navbr id={4} {...props}>
              <ProjectScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/howitwork"
          render={(props) => (
            <Navbr id={5} {...props}>
              <HowItWorkScreen {...props} />
            </Navbr>
          )}
        />
                <Route
          exact
          path="/floorplan"
          render={(props) => (
            <Navbr id={5} {...props}>
              <FloorPlanScreen {...props} />
            </Navbr>
          )}
        />
         <Route
          exact
          path="/buildingmaterial"
          render={(props) => (
            <Navbr id={5} {...props}>
              <BuildingMaterialScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/renovation"
          render={(props) => (
            <Navbr id={5} {...props}>
              <RenovationScreen {...props} />
            </Navbr>
          )}
        />
        <Route
          exact
          path="/enquirytextbox"
          render={(props) => (
            <Navbr id={6} {...props}>
              <EnquiryTextBoxScreen {...props} />
            </Navbr>
          )}
        />
         <Route
          exact
          path="/getdirection"
          render={(props) => (
            <Navbr id={6} {...props}>
              <GetDirectionScreen {...props} />
            </Navbr>
          )}
        />
         <Route
          exact
          path="/officeaddress"
          render={(props) => (
            <Navbr id={6} {...props}>
              <OfficeAddressScreen {...props} />
            </Navbr>
          )}
        />
         <Route
          exact
          path="/waytocontact"
          render={(props) => (
            <Navbr id={6} {...props}>
              <WayToCantactScreen {...props} />
            </Navbr>
          )}
        />
    
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
