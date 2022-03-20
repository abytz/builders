import React from 'react';
import  { Component } from "react";
// import React,{ useState } from 'react';
import {Button} from 'react-bootstrap';
import ConstructionService from '../../component/ConstructionService';
import '../../App.css';

class EnquiryTextBoxScreen extends Component {
  constructor() {
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
        fields["emailid"] = "";
        fields["Question"] = "";
        fields["Enquery"] = "";
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

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }
    
    if (!fields["Question"]) {
      formIsValid = false;
      errors["Question"] = "*Please enter your Question.";
    }

    if (typeof fields["Question"] !== "undefined") {
      if (!fields["Question"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["Question"] = "*Please enter alphabet characters only.";
      }
    }
    
    if (!fields["Enquery"]) {
      formIsValid = false;
      errors["Enquery"] = "*Please enter your Enquery.";
    }

    if (typeof fields["Enquery"] !== "undefined") {
      if (!fields["Enquery"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["Enquery"] = "*Please enter alphabet characters only.";
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
            <h1>EnquiryTextBox</h1>
            <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

            <div className="row">
              <div className="col-lg-6 col-md-6  col-12 mt-2">     
             <input type="text" className="mt-4 form-control" name="username" value={this.state.fields.username} 
             onChange={this.handleChange} placeholder="Enter your Username"  />
              <div className="errorMsg">{this.state.errors.username}</div>

              <input type="Email" className="mt-4 form-control" name="emailid" value={this.state.fields.emailid}
                onChange={this.handleChange} placeholder="Enter your Email"  />      
              <span className="errorMsg">{this.state.errors.emailid}</span>
              </div>

              <div className="col-lg-6 col-md-6  col-12 mt-2">
                <input type="text" className="mt-4 form-control" name="Question" value={this.state.fields.Question} 
                onChange={this.handleChange} placeholder="Enter your Question"  />
                  <span className="errorMsg">{this.state.errors.Question}</span>

                <input type="text"   className="mt-4 form-control" name="Enquery" value={this.state.fields.Enquery}
                 onChange={this.handleChange} placeholder="Enter your Enquiry"  />
                    <span className="errorMsg">{this.state.errors.Enquery}</span> 
                </div>
            </div>

            <div className="d-flex justify-content-center" >
              <Button type="submit" className="btn" value="Register">submit</Button> 
            </div>
            </form>
           </div>
            <ConstructionService />
        </div>
        );
     };
  };

export default EnquiryTextBoxScreen;