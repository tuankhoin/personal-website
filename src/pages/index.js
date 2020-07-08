import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Hello stranger!" caption = "Let's get started, shall we?"
      children={<a href="#start" class="btn btn-info" role="button">Let's go!</a>} />

      <section id = "start">
        <img data-aos="fade-right" src="https://source.unsplash.com/random/400x200" alt="" />
        <img data-aos="fade-right" src="https://source.unsplash.com/random/400x200" alt="" />
      </section>
    </Layout>
  )
}