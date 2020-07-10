import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="bar">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container" style={{borderRadius:"30px"}}>
            <span className="navbar-brand js-scroll-trigger"><Link to="/">Khoi's Webpage</Link></span>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive" style={{borderRadius:"20px"}}>
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><Link to="/about/">About Me</Link></li>
                    <li className="nav-item"><Link to="/projects/">Work Showcase</Link></li>
                    <li className="nav-item"><Link to="/photography/">Photo Gallery</Link></li>
                    <li className="nav-item"><Link to="/music/">Music Gallery</Link></li>
                    <li className="nav-item"><Link to="/contact/">Contact</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      {children}
    </div>
  )
}