import React from "react";
import '../css/Intro.css';
import logo from "../monkey-developer.gif";
export default function (){
    return(
        <div className="intro">
            <div className="hero-intro">
                <h1>Hii,</h1>
                <h1>I'm Yashvardhan </h1>
                <h2>Fullstack developer</h2>
            </div>
            <div className="hero=img">
                <img id="logo" src={logo} alt=""/>
            </div>
        </div>
    )
}