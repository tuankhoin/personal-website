import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import Header from "../components/header"
import { Helmet } from "react-helmet"

export default function Music() {
  return (
    <Layout>   
      <Helmet><title>Music Gallery</title></Helmet> 
      <Container>
      <Header headerText="Music gallery!" caption = {<a href="#start" className="btn btn-info" role="button">Continue</a>}/>
      </Container>

      <section id = "start" style={{marginLeft: "10%", width:"80%"}}>
        <div style={{textAlign : "center"}}>

          <div className='vid'>
            <iframe src="https://www.youtube.com/embed/CdSERXEDSFU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div className='vid'>
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuankhoi.nguyen.16%2Fvideos%2F1804036812962572%2F&show_text=true&width=734&height=522&appId" scrolling="no" allowtransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
          </div>
          
          <p>Not much content so far. Hope that it can be expanded in the future :) .</p>
        </div>
      </section>
  </Layout>
  )
}