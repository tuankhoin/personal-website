import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" caption = "Send us a message!" />
    </Layout>
  )
}