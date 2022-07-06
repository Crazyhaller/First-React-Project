import React from "react"
import reactLogo from "../Images/reactlogo.png"

export default function Navbar(){
    return (
        <nav>
            <img src={reactLogo} alt="React Logo" width="40px" className="nav--icon"></img>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}