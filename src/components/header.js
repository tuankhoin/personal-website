import React from "react"
import "./loader.css"


export default function Header(props) {
    return (
    <div className = "header animate-bottom" id="myDiv"
         onLoad={myFunction()}  
         style={{ textAlign: 'center',
                  verticalAlign: 'center',
                  marginTop: '15rem',
                  marginBottom: '15rem',
                  display:"none" }}> 
      <h1 style={{ border: '3px solid green', padding:'10px' }}>{props.headerText}</h1>
      <p>{props.caption}</p>
      {props.children}
    </div>
    )
  }

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}