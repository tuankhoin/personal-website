import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Hello stranger!" caption = "Let's get started, shall we?" />
      <a href = "#start">Go go go</a>
      <section id = "start">
        <img data-aos="fade-right" src="https://source.unsplash.com/random/400x200" alt="" />
        <img data-aos="fade-right" src="https://source.unsplash.com/random/400x200" alt="" />
      </section>
    </Layout>
  )
}