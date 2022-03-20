import React from "react";
import  { Component } from "react";
import { Button } from "react-bootstrap";
import OurFeatures from "../component/OurFeatures";
import Package1 from "../component/Package1";
import Package2 from "../component/Package2";
import ConstructionService from "../component/ConstructionService";

class LetsBildScreen extends Component 
 {
  constructor() 
  {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["username"] = "";
        fields["Emailid"] = "";
        fields["MobileNumber"] = "";
        fields["City"] = "";
        this.setState({fields:fields});
        // alert("Form submitted");
    }
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["Emailid"]) {
      formIsValid = false;
      errors["Emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["Emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["Emailid"])) {
        formIsValid = false;
        errors["Emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (typeof fields["MobileNumber"] !== "undefined") {

      var patterns = new RegExp(/^[0-9\b]+$/);

      if (!patterns.test(fields["MobileNumber"])) {

        formIsValid = false;

        errors["phone"] = "Please enter only number.";

      }
      else if(fields["MobileNumber"].length !==10){

        formIsValid = false;

        errors["MobileNumber"] = "Please enter valid phone number.";

      }

    }
    
    // if (!fields["MobileNumber"]) {
    //   formIsValid = false;
    //   errors["MobileNumber"] = "*Please enter your MobileNumber.";
    // }

    // if (typeof fields["MobileNumber"] !== "undefined") {
    //   if (!fields["MobileNumber"].match(/^[0-9 ]*$/ )) {
    //     formIsValid = false;
    //     errors["MobileNumber"] = "*Please enter numbers only.";
    //   }
    // }
    
    if (!fields["City"]) {
      formIsValid = false;
      errors["City"] = "*Please enter your City.";
    }

    if (typeof fields["City"] !== "undefined") {
      if (!fields["City"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["City"] = "*Please enter alphabet characters only.";
      }
    }

    
    this.setState({
      errors: errors
    });
    return formIsValid;

  }
render()
{
  return (
    <div id="register">
      <div className="container ">

        <h1>Let`s Build</h1>
          <div className="d-flex justify-content-center borde p-4">
            <div className="shadow  p-4">
              <h4 className="shado p-2 text-primary">Talk to our Expert</h4>
              <form   name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

              <div className=" mt-2">
                 <input type="text" placeholder="Enter Your Name" className="form-control"
                 name="username" value={this.state.fields.username} onChange={this.handleChange}/>
                <div className="errorMsg">{this.state.errors.username}</div>
              </div>
              <div className=" mt-2">
                <input
                  type="text" placeholder="Enter Your Email" className="form-control"
                  name="Emailid" value={this.state.fields.Emailid} onChange={this.handleChange} />
                  <div className="errorMsg">{this.state.errors.Emailid}</div>
              </div>

              <div className=" mt-2">
                <input type="text" placeholder="Enter Your MobileNumber" className="form-control"
                  name="MobileNumber" value={this.state.fields.MobileNumber} onChange={this.handleChange}/>
                  <div className="errorMsg">{this.state.errors.MobileNumber}</div>
              </div>

              <div className=" mt-2">
                <input type="text" placeholder="Enter Your City" className="form-control"
                  name="City" value={this.state.fields.City} onChange={this.handleChange}/>
                  <div className="errorMsg">{this.state.errors.City}</div>
              </div>
              <div className="d-flex justify-content-center">
                <Button type="submit" className="btn" onclick="submit"  value="Register"  > Book Free Construction </Button>
              </div>
              </form>
            </div>
          </div>

          <div className="mt-2">
            <h2 className="d-flex justify-content-center">Packages</h2>
            <p className="d-flex justify-content-center">
              Find the best home construction packages.
            </p>
          </div>
          <div>
            <Package1 />
          </div>
          <Package2 />
          <div className="mt-3 border">
            <p className="mt-2 d-flex justify-content-center">
              Do you have any construction requirements?
            </p>
            <div className="d-flex justify-content-center">
            <Button className="btn"> Book Free Consulation </Button>
            </div>
          </div>
          <OurFeatures />
        </div>
      
       <ConstructionService />

      </div>
 
     );
   };
 };
export default LetsBildScreen;
