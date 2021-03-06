import React, { Component } from "react";
import Checkbox from "./Checkbox";
import PhysiologicalApp from "./PhysiologicalApp";

const OPTIONS = ["bite marks", "pale skin", "hair loss", "excess saliva production", "diluted pupils", "involuntary muscle spasms", "signs of body decomposition"]; 

var points = 0;

class VisibleApp extends Component {
  state = {
    phys: false,
    
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
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
        points += 1;
        // send data to api here.
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
      className="form"
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
    let saveClicked = () => {
      console.log("save clicked");
      this.setState({
          phys: true
      });
    }

    const showPhys = this.state.phys;
    
    return (
      <div className="container">
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
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
            { showPhys && (<h3>Physiological Signs</h3>)}
            { showPhys && (<PhysiologicalApp />) }
          </div>
        </div>
      </div>
    );
  }
}

export default VisibleApp;
export {points};
