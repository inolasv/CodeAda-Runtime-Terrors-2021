import React, { Component } from 'react';
import './flowchart.css';



class Survey extends Component {

    state = {
        q1: false,
    }

    render() {
        let startClicked = e => {
            console.log("start button clicked");
            this.setState({
                q1: !this.state.q1
            });
        }
        
        let scanClicked = () => {
            console.log("scan button clicked");
        }

        const showQ1 = this.state.q1;

        return(
            <div>
                <center>
                    <button className="start-button" onClick={startClicked}> Start Survey </button> 
                    <button className="start-button" onClick={scanClicked}> Scan </button>
                    { showQ1 && (<Q1 />) }
                </center>
            </div>
        );
    }
}


// Question: Has the SUbject died?
// if yes --> go to Q3
// if no --> go to checkboxes
class Q1 extends Component {

    state = {
        q2_yes: false,
        q2_no: false,
    }

    render() {
        let yesClicked = () => {
            console.log("yes clicked");
            this.setState({
                q2_yes: true,
                q2_no: false,
            });
        }

        let noClicked = () => {
            console.log("no clicked");
            this.setState({
                q2_yes: false,
                q2_no: true,
            });
        }

        const showQ2_yes = this.state.q2_yes;
        const showQ2_no = this.state.q2_no;

        return(
            <div>
            <center>
                <h3>Is the subject dead?</h3>
                <div>
                    <button className="button" onClick={yesClicked}> yes </button>
                    <button className="button" onClick={noClicked}> no </button>
                    { showQ2_yes && (<Q2_Yes />) }
                    { showQ2_no && (<Q2_No />) }
                </div>  
            </ center>
            </div>
        );
    }
}

// --> from Question 1 answer YES
// Question: Is the subject responsive to Stimuli
// if yes --> ZOMBIE --> send data to back
// if no --> display subject has died, but show zombie map anyways?
class Q2_Yes extends Component {

    state = {
        zombie: false,
        dead: false,
    }

    render() {

        let yesClicked = () => {
            console.log("yes clicked");
            this.setState({
                zombie: true,
                dead: false,
            });
        }

        let noClicked = () => {
            console.log("no clicked");
            this.setState({
                zombie: false,
                dead: true,
            });
        }

        
        const showZombie = this.state.zombie;
        const showDead = this.state.dead;

        return(
            <div>
            <center>
                <h3>Is the subject responseive to stimuli?</h3>
                <div>
                    <button className="button" onClick={yesClicked}> yes </button>
                    <button className="button" onClick={noClicked}> no </button>
                    { showZombie && (<Zombie />) }
                    { showDead && (<Dead />) }
                </div>  
            </ center>
            </div>
        );
    }
}


// --> from Question 1 answer No
// display the checkboxes
class Q2_No extends Component {

    render() {

        return(
            <div>
            <center>
                <h3>Chexkboxes</h3>
            </ center>
            </div>
        );
    }
}

class Zombie extends Component {
    render() {
        return(
            <div>
                <center>
                    <h3>Subject is a zombie. Please keep your distance.</h3>
                    <mapButton add={true} />
                </center>
            </div>
        )
    }
}

class Dead extends Component {
    render() {
        return(
            <div>
                <center>
                    <h3>Subject is not a zombie, but unfortunatly they are also not alive anymore.</h3>
                </center>
            </div>
        )
    }
}

function mapButton(props) {
    return (
        <button className="mapButton" onClick={props.add}> Show Map </button>
    );
}



export { Survey };