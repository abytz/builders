import React from "react";
import { Button } from "react-bootstrap";
import  { Component } from "react";
import ConstructionService from "../../component/ConstructionService";
// import React,{ useState } from 'react';

class WayToCantactScreen extends Component 
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
    
    if (!fields["MobileNumber"]) {
      formIsValid = false;
      errors["MobileNumber"] = "*Please enter your MobileNumber.";
    }

    if (typeof fields["MobileNumber"] !== "undefined") {
      if (!fields["MobileNumber"].match(/^[0-9 ]*$/)) {
        formIsValid = false;
        errors["MobileNumber"] = "*Please enter numbers only.";
      }
    }
    
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
      <div className="container">
        <h1>Get in Touch With Our Technical Experts</h1>
        <p>
          We take our commitments to our users seriously. Reach us For any
          complaint or query.
        </p>
        <div className="d-flex justify-content-center">
          <div className="shadow  p-4">
            <h4 className="shado p-2 text-primary">Talk to our Expert</h4>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
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
              {/* <Button className="btn" onClick="">
                Submit
              </Button> */}
              <Button type="submit" className="btn" onclick="submit"  value="Register" >submit</Button> 
            </div>
            </form>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-12">
                <h1>We are here to answer your all questions</h1>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <h4>Email Us On</h4>
                <b>Customer Support</b>
                <p>customer@gmail.com</p>
                <b>Career Opportunities</b>
                <p>career@gmail.com</p>
                <b>Join as a Contractor </b>
                <p>join@gmail.com</p>
                <b>General Queries & Information</b>
                <p>info@gmail.com</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <h4>Talk To Us</h4>
                <b>Contact Number (also available on whatsapp)</b>
                <p> +91 93413 46801</p>
                <b>Timings</b>
                <p>Mon - Sat, 10 am to 6 pm</p>
            </div>
        
        </div>
        
            <ConstructionService />

      </div>
      </div>
     
    
           

  );
    };
 };
export default WayToCantactScreen;