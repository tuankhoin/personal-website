import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import { Helmet } from "react-helmet"

export default function Photography() {
  return (
    <Layout>
      <Helmet><title>Photo Gallery</title></Helmet>
      <Container><Header headerText="Photography Gallery" caption = "Send us a message!" /></Container>
    </Layout>
  )
}