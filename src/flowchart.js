import React, { Component } from 'react';
import './flowchart.css';



class Survey extends Component {
    renderQ1() {
        console.log("hi")
        return (
          <Q1 />
        );
    }

    startButtons() {
        let startClicked = e => {
            this.renderQ1()
            console.log("start button clicked")
        }
    
        let scanClicked = e => {
            console.log("scan button clicked")
        }
    
        return (
            <center>
                <button className="start-button" onClick={startClicked}> Start Survey </button>
                <button className="start-button" onClick={scanClicked}> Scan </button>
                {startClicked}
            </center>
        )
    }

    render() {
        return(
            <div>
                {this.startButtons()}
            </div>
        );
    }
}

function yesClicked() {
    console.log('yes clicked');
}
function noClicked() {
    console.log('no clicked');
}

function Q1() {
    console.log("hi!")

    return(
        <div>
        <center>
            <h3>Are you dead?</h3>
            <div>
                <button className="button" onClick={yesClicked()}> yes </button>
                <button className="button" onClick={noClicked()}> no </button>
            </div>  
        </ center>
        </div>
    );
}


export default Survey;