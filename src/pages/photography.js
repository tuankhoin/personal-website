import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function Photography() {
  return (
    <Layout>
      <Helmet><title>Photo Gallery</title></Helmet>
      <Header headerText="Photography Gallery" caption = "Send us a message!" />
    </Layout>
  )
}