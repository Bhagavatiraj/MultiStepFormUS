import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import "../StylesM.css";

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <div class="container">
        <div class="row p-6">
          <div class="col-lg-12 mb-5">
            <FormGroup id="msform">
              <fieldset>
                <h2 class="fs-title">Inspection Request</h2>
                <h3 class="fs-subtitle">
                  Fill in your details for inspection of your car
                </h3>
                <div class="row mb-4">
                  <div class="col" style={{ backgroundColor: "#FFFFFF" }}>
                    <div class="form-outline">
                      <input type="text" name="fname" placeholder="First Name" 
                      value={props.statess.fname} onChange={props.handleChange} 
                      />
                    </div>
                  </div>
                  <div class="col" style={{ backgroundColor: "#FFFFFF" }}>
                    <div class="form-outline">
                      <input type="text" name="lname" placeholder="Last Name"
                       value={props.statess.lname} onChange={props.handleChange} 
                      
                      />
                    </div>
                  </div>
                </div>
                <input
                  class="col mb-4"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={props.statess.phone} onChange={props.handleChange}
                />
                <input
                  class="col mb-4"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={props.statess.email} onChange={props.handleChange}
                />
                <input
                  class="col mb-4"
                  type="textarea"
                  name="address"
                  placeholder="Address for Car Inspection"
                  value={props.statess.address} onChange={props.handleChange}
                />

                <div class="row mb-4">
                  <div class="col" style={{ backgroundColor: "#FFFFFF" }}>
                    <div class="form-outline">
                      <input
                        class="col mb-4"
                        type="date"
                        name="date"
                        placeholder="Date"
                        value={props.statess.date} onChange={props.handleChange}
                      />
                    </div>
                  </div>
                  <div class="col" style={{ backgroundColor: "#FFFFFF" }}>
                    <div class="form-outline">
                      <input
                        class="col mb-4"
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={props.statess.time} onChange={props.handleChange}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>
            </FormGroup>
          </div>
        </div>
      </div>

    </>
  );
};

export default Step3;
