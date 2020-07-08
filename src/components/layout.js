import React from "react"
import { Link } from "gatsby"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
            <span class="navbar-brand js-scroll-trigger"><Link to="/">Khoi's Webpage</Link></span>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
                    <li class="nav-item"><Link to="/about/">About Me</Link></li>
                    <li class="nav-item"><Link to="/projects/">Projects</Link></li>
                    <li class="nav-item"><Link to="/photography/">Photo Gallery</Link></li>
                    <li class="nav-item"><Link to="/music/">Music Gallery</Link></li>
                    <li class="nav-item"><Link to="/contact/">Contact</Link></li>
                </ul>
            </div>
        </div>
      </nav>
      {children}
    </div>
  )
}