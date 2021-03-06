import React from "react"
import { Link } from "gatsby"
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import AOS from 'aos';
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="bar" onLoad={myFunction()}>
      <div id = "load">
        <div id="loader"> </div>
      </div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container" style={{borderRadius:"30px"}}>
            <span className="navbar-brand js-scroll-trigger"><Link to="/">Khoi's Webpage</Link></span>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive" style={{borderRadius:"20px"}}>
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><Link to="/about/">About</Link></li>
                    <li className="nav-item"><Link to="/projects/">Works</Link></li>
                    <li className="nav-item"><Link to="/photography/">Photos</Link></li>
                    <li className="nav-item"><Link to="/music/">Music</Link></li>
                    <li className="nav-item"><Link to="/contact/">Contact</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      {children}
    </div>
  )
}

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("load").style.display = "none";
  // document.getElementById("myDiv").style.display = "block";
  AOS.init();
}