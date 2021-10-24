import React, { Component } from "react";
import Checkbox from "./Checkbox";

const OPTIONS = ["loss of fine motor skills", "no sense of self preservation", "unable to speak coherently/communicates through roaring, growling, grunting", 
            "spontaneous agression/anger", "lethargic/slow movements"]; 

class BehavioralApp extends Component {
  state = {
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
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  render() {
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
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      <div> 
        <img src = "https://www.notion.so/CODE-ADA-map-screenshots-44deceead81d4555b7bb6d2d421e2d31#6ab551f105f74bb89fffa303a36a085a" />
        <img src = {'https://www.notion.so/CODE-ADA-map-screenshots-44deceead81d4555b7bb6d2d421e2d31#6ab551f105f74bb89fffa303a36a085a'} />
      </div>

      <div> 
        <img src = "https://www.notion.so/CODE-ADA-map-screenshots-44deceead81d4555b7bb6d2d421e2d31#9cb676dfe06f453ca2c7dc341e294d43" />
        <img src = {'https://www.notion.so/CODE-ADA-map-screenshots-44deceead81d4555b7bb6d2d421e2d31#9cb676dfe06f453ca2c7dc341e294d43'} />
      </div>

      </div>
    );
  }
}

export default BehavioralApp;
