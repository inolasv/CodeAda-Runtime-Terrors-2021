import React, { Component } from "react";
import Checkbox from "./Checkbox";
import "./Checkboxes.css"
import BehavioralApp from "./BehavioralApp";
import {points} from "./VisibleSignsApp";

const OPTIONS = ["dizziness", "fever", "fatigue/weakness/soreness", "chills", "fainting", "dehydration", "coughing up blood"]; 


class PhysiologicalApp extends Component {
  state = {
    behavioral: false,
    checkboxes: OPTIONS.reduce(
      (options, option)=> ({
        ...options,
        [option]: false
      }), 
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      behavioral: false,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        //points++;
        console.log("what" + points)
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      className="form-check-input"
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    let saveClicked = e => {
      this.setState({
          behavioral: true,
      });
    }
    

    const showBehavioral = this.state.behavioral;

    return (
      <div className="container">
            {console.log("start at " + points)}
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <div className="form-group mt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary mr-2"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                <button type="submit" className="btn btn-primary" onClick={saveClicked}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        { showBehavioral && (<h3>Behavioral Signs</h3>)}
        { showBehavioral && (<BehavioralApp />)}
        {console.log(points)}
      </div>
    );
  }
}

export default PhysiologicalApp;
