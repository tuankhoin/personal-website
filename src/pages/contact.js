import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, faInstagram, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" caption = "Let's keep in touch!"
      children = {
        <div data-aos='fade-right' id="contact">

          <a href="mailto:tuankhoin@student.unimelb.edu.au" target="_blank">
            <FontAwesomeIcon icon={ faEnvelope }/> Email
          </a>

          <a href="https://github.com/tuankhoin" target="_blank">
            <FontAwesomeIcon icon={ faGithub }/> Github
          </a>

          <a href="https://www.linkedin.com/in/tuankhoin/" target="_blank">
            <FontAwesomeIcon icon={ faLinkedin }/> LinkedIn
          </a>

          <a href="https://www.instagram.com/journeyofkhoi/" target="_blank">
            <FontAwesomeIcon icon={ faInstagram }/> Instagram
          </a>

          <a href="https://medium.com/@khoitnguyen" target="_blank">
            <FontAwesomeIcon icon={ faMedium }/> Medium
          </a>

          <a href="http://www.mazevietnam.com/khoinguyen/" target="_blank">
            <FontAwesomeIcon icon={ faMedium }/> Maze Vietnam
          </a>
        </div>        
      } />
    </Layout>
  )
}