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

      <section id = "start">
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuankhoi.nguyen.16%2Fvideos%2F1804036812962572%2F&show_text=true&width=734&height=522&appId" width="734/2" height="522/2" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" allowFullScreen="true"></iframe>
      </section>
  </Layout>
  )
}