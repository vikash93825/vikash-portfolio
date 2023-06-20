import React from "react";
//import { Col, Row } from "react-bootstrap";
//import "../styles/skills.css"
import styles from "../styles/achieved.module.css";
import GitHubCalendar from 'react-github-calendar';

const Achieved = () => {
  return (
    <div key="profi" id="achieved"  className={styles.achieved} style={{ "backgroundColor": "#0b0d0e"}}>

<div className="container-fluid mt-5">

    <div className="row">
        <div className="col-12 text-center mt-5">
            <h1 className={styles.pro}>
            <span className="chonburi-font green-text">Profic</span>iencies
            </h1>
           
        </div>
    </div>

</div>

<div className="row mt-4 px-5">

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/reactApp.png" style={{width:"50%"}} className="img-fluid " alt="react_app"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>React Apps</h3>
            </div>

            <div className="col-12">
                <p className="text-center">When it comes to react apps
                I have the strength of Atlas</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/frontEnd.png" style={{width:"60%"}} className="img-fluid " alt="front-end"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Frontend</h3>
            </div>

            <div className="col-12">
                <p className="text-center">Now just that I can
                even host the show</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/dataStructure.png" style={{width:"70%"}} className="img-fluid " alt="ds"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Data Structure</h3>
            </div>

            <div className="col-12">
                <p className="text-center">Putting the right blocks in the right place is just my thing</p>
            </div>

        </div>

    </div>

    <div className="col-6 col-lg-3">
        
        <div className="row">

            <div className="col-12 text-center">
                <img src="images/backEnd.png" style={{width:"55%"}} className="img-fluid " alt="ds"/>
            </div>

            <div className="col-12 text-center">
                <h3 className={styles.title}>Backend</h3>
            </div>

            <div className="col-12">
                <p className="text-center">I am the one who runs the show</p>
            </div>

        </div>

    </div>

</div>

<div className="row mt-5 text-center">
    <div className="offset-1 col-16">
        {/* <img src="new_git.png" className="img-fluid" alt="git_work"/> */}
        <GitHubCalendar username="vikash93825" blockSize={20} blockMargin={4} color={"hsl(203, 82%, 33%)"}/>
    </div>
</div>

<div className="row mt-5">
    <div className="col-12 text-center mt-5">
        <h1 className={styles.pro}>
        <span className="chonburi-font green-text">Pro</span>gress
        </h1>
    </div>
</div>

<div className="row text-center p-3 mt-3">

    <div className="offset-2 col-4 offset-md-2 col-md-2 mb-4">
        <div style={{border:"solid #128397 10px", height:"100px", width:"100px"}} className="rounded-circle mx-auto">
            <h4 className="mt-3 p-2">1500+</h4>
        </div><br/>
        <h5>Hour of Hands on Coding</h5>
    </div>

    <div className="col-4 col-md-2 mb-4">
        <div style={{border:"solid #128397 10px", height:"100px", width:"100px"}} className="rounded-circle mx-auto">
            <h4 className="mt-3 p-2">500+</h4>
        </div><br/>
        <h5>Commits</h5>
    </div>

    <div className="offset-2 col-4 offset-md-0 col-md-2 mb-4">
        <div style={{border:"solid #128397 10px", height:"100px", width:"100px"}} className="rounded-circle mx-auto">
            <h4 className="mt-3 p-2">400+</h4>
        </div><br/>
        <h5>Hours of Logic Building</h5>
    </div>

    <div className="col-4 col-md-2 mb-4">
        <div style={{border:"solid #128397 10px", height:"100px", width:"100px"}} className="rounded-circle mx-auto">
            <h4 className="mt-3 p-2">100+</h4>
        </div><br/>
        <h5>Hours of Soft Skills</h5>
    </div>

</div>

</div>
  )
};

export {Achieved};