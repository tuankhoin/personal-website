import React from "react"
import "./loader.css"


export default function Header(props) {
    return (
    <div className = "header animate-bottom" style={{ textAlign: 'center',
                  verticalAlign: 'center',
                  marginTop: '15rem',
                  marginBottom: '15rem' }}> 
      <h1 style={{ border: '3px solid green' }}>{props.headerText}</h1>
      <p>{props.caption}</p>
      {props.children}
    </div>
    )
  }