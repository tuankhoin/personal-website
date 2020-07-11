import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet><link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" /><title>Welcome!</title></Helmet>
      <Header headerText="Hello stranger!" caption = "Let's get started, shall we?"
      children={<a href="#start" className="btn btn-info" role="button">Let's scroll down!</a>} />

      <section id = "start">
        <div className="icontainer" style={{paddingTop: 20}}>
          <div className="ibox">
            <div className = "img" id = "ab" data-aos="fade-right"><Link to="/about/">Who am I?</Link></div>   
          </div>
          
          <div className="ibox">
            <div className = "img" id = "pj" data-aos="fade-right"><Link to="/projects/">Projects & Publications</Link></div>   
          </div>
        </div>
        <div className="icontainer" style={{marginTop: -7}}>
          <div className="ibox">
          <div className = "img" id = "pt" data-aos="fade-right"><Link to="/photography/">Photo Gallery</Link></div>   
          </div>
          
          <div className="ibox">
            <div className = "img" id = "ms" data-aos="fade-right"><Link to="/music/">Music Gallery</Link></div>            
          </div>
        </div>
        <div className="icontainer" style={{marginTop: -7}}>
          
          <div className="ibox">
            <div className = "img" id = "end" data-aos="fade-right"><Link to="/" id="bottom">That's all!</Link></div>            
          </div>

          <div className="ibox">
            <div className = "img" id = "ct" data-aos="fade-right"><Link to="/contact/" id="bottom">Contact</Link></div>   
          </div>
        </div>
      </section>
    </Layout>
  )
}