import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import "../StylesM.css";

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }
console.log(props);
  return (

    <>
      <div class="container">
        <div class="row p-6">
          <div class="col-lg-12 mb-5 mt-20">
            <FormGroup id="msform">
              <fieldset>
                <h2 class="fs-title">Upload Documents</h2>
                <h3 class="fs-subtitle">
                  Put pictures of your car and reuired documents
                </h3>
                <div class="input-group">
                  <div class="custom-file">
                    <input type="file" class="next action-button" id="upload" name="images"  
                     onChange={props.handleChange}  />
                    <label class="custom-file-label" for="upload">
                      <i class="ion-android-cloud-outline"></i>Choose Images
                    </label>
                  </div>
                </div>

                <div class="input-group">
                  <div class="custom-file">
                    <input type="file" class="next action-button" name="docu" id="upload1"  
                     onChange={props.handleChange}  />
                    <label class="custom-file-label" for="upload1">
                      <i class="ion-android-cloud-outline"></i>Choose Document
                    </label>
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

export default Step2;
