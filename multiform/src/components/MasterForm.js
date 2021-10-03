import React, { Component } from "react";
import {
  Form,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Sellrequest from "../Sellrequest";
import Routes from "../Routes";

import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";
import "../StylesM.css";
class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values



    this.state = {
      currentStep: 1,
      carName: "",
      carNumber: "",
      registrationYear: "",
      engineSize: "",
      mileage: "",
      make: "",
      model: "",
      fuelType: "",
      color: "",
      owners: 0,
      seats: 0,
      defects: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      address: "",
      date: "",
      time: "",
      images: null,
      docu: null
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {


    const { name, value } = event.target;
    
    if (name === "images") {
      this.setState({
        [name]: event.target.files[0]
      })
      console.log(event.target.files[0]);
    }
    else if (name === "docu") {

      this.setState({
        [name]: event.target.files[0]
      })
      console.log(event.target.files[0]);
    }
    else {
      this.setState({
        [name]: value
      });
    }
    if (name === "owners") {
      const valueSelectedByUser = parseInt(event.target.value);

      // Update distance in state via setState()
      this.setState({ owners: this.props.owners + valueSelectedByUser });
    }
    else if (name === "owners") {
      const valueSelectedByUser = parseInt(event.target.value);

      // Update distance in state via setState()
      this.setState({ owners: this.props.owners + valueSelectedByUser });
    }

  }

  // Trigger an alert on form submission
  handleSubmit = event => {
    console.log("hello from submit start")
    event.preventDefault();

    const formdata = new FormData();
    for (let key in this.state) {

      formdata.append(key, this.state[key]);
      console.log(key, this.state[key]);

    }
    console.log("hello from submit")
    console.log(...formdata);
    this.props.history.push('/sell');

  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <div>
          <input type="button" name="previous" onClick={this._prev} class="actionPrevious" value="Previous" />
        </div>
      );


    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <div  >
          <input type="button" name="next" class="actionButton" value="Next" onClick={this._next} />
        </div>

      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return (
        <div class="actionSubmit">
          <Button style={{ backgroundColor: "#6610f2" }}>Submit</Button>
        </div>
      )
    }
    // ...else render nothing
    return null;
  }

  render() {
    console.log(this.state);
    console.log("hello from render");
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <br />
          <br />
          <br />
          <CardTitle>
            <MultiStepProgressBar currentStep={this.state.currentStep} />
          </CardTitle>


          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            statess={this.state}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            statess={this.state}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            statess={this.state}
          />

          <CardFooter>
            {this.previousButton}
            {this.nextButton}
            {this.submitButton}
          </CardFooter>
        </Form>
      </>
    );
  }
}

export default MasterForm;
