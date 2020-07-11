import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Container from "../components/container"

export default function Home() {
  return (
    <Layout>
      <Helmet><link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" /><title>Welcome!</title></Helmet>
      <Container><Header headerText="Hello stranger!" caption = "Let's get started, shall we?"
      children={<a href="#start" className="btn btn-info" role="button">Let's scroll down!</a>} />
      </Container>
      <section id = "start">
        <div className="icontainer" style={{paddingTop: 0}}>
          <div className="ibox">
            <div className = "img" id = "ab"><Link to="/about/">Who am I?</Link></div>   
          </div>
          
          <div className="ibox">
            <div className = "img" id = "pj"><Link to="/projects/">Projects & Publications</Link></div>   
          </div>
        </div>
        <div className="icontainer" style={{marginTop: 0}}>
          <div className="ibox">
          <div className = "img" id = "pt"><Link to="/photography/">Photo Gallery</Link></div>   
          </div>
          
          <div className="ibox">
            <div className = "img" id = "ms"><Link to="/music/">Music Gallery</Link></div>            
          </div>
        </div>
        <div className="icontainer" style={{marginTop: -0}}>
          
          <div className="ibox">
            <div className = "img" id = "end"><Link to="/" id="bottom">That's all!</Link></div>            
          </div>

          <div className="ibox">
            <div className = "img" id = "ct"><Link to="/contact/" id="bottom">Contact</Link></div>   
          </div>
        </div>
      </section>
    </Layout>
  )
}