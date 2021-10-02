import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../StylesM.css";
const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
      <div class="container">
        <div class="row p-6">
          <div class="col-lg-12 mb-5">
          <FormGroup id="msform">
            <fieldset>
              <h2 class="fs-title">Car Details</h2>
              <h3 class="fs-subtitle">Tell us about your Car</h3>

              <input
                class="col mb-4"
                type="text"
                name="carName"
                id="carName"
                placeholder="CarName"
                value={props.statess.carName} 
                onChange={props.handleChange}
              />

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="carNumber" placeholder="Car Number"
                     value={props.statess.carnumber} 
                     onChange={props.handleChange} 
                     />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="text"
                      name="registrationYear"
                      placeholder="Registeration Year"
                      value={props.statess.registrationYear} 
                      onChange={props.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="engineSize" placeholder="Engine Size"
                    value={props.statess.engineSize} onChange={props.handleChange}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="mileage" placeholder="Mileage" 
                    value={props.statess.mileage} onChange={props.handleChange} 
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="make" placeholder="Make" 
                    value={props.statess.make} onChange={props.handleChange}
                    
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="model" placeholder="Model" 
                    
                    value={props.statess.model} onChange={props.handleChange}
                    
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="fuelType" placeholder="Fuel Type" 
                    value={props.statess.fuelType} onChange={props.handleChange}
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <input type="text" name="color" placeholder="Color" 
                    value={props.statess.color} onChange={props.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <select class="form-outline" onChange={props.handleChange}>
                    <option data-display="Number Of Owners">
                      Number Of Owners
                    </option>
                    <option value={props.statess.owners} >1</option>
                    <option value={props.statess.owners}>2</option>
                    <option value={props.statess.owners}>3</option>
                  </select>
                </div>

                <div class="col">
                  <select class="form-outline" onChange={props.handleChange}>
                    <option data-display="Number Of Seats">Number Of Seats</option>
                    <option value={props.statess.seats}>4</option>
                    <option value={props.statess.seats}>5</option>
                    <option value={props.statess.seats}>6</option>
                    <option value={props.statess.seats}>7</option>
                    <option value={props.statess.seats}>8</option>
                    <option value={props.statess.seats}>9</option>
                  </select>
                </div>
                <br/>
                
              </div>
              <input class="col mb-4" type="text" name="defects" placeholder="Does your car have any defects or damages?" value={props.statess.defects} onChange={props.handleChange} />
             
            </fieldset>
          </FormGroup>
        </div>
      </div>
    </div>
    </>
  );
};

export default Step1;
