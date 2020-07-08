import React from "react"

import Container from "../components/container"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Music() {
  return (
    <Layout>    
      <Container>
      <Header headerText="Music gallery!" caption = "Let's get started, shall we?" />
      </Container>
  </Layout>
  )
}