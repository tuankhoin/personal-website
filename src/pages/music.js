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
  </Layout>
  )
}