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
        <div class="icontainer" style={{paddingTop: 20}}>
          <div class="ibox">
            <div class = "img" id = "ab" data-aos="fade-right"><a href="/about/">Who am I?</a></div>   
          </div>
          
          <div class="ibox">
            <div class = "img" id = "pj" data-aos="fade-right"><a href="/projects/">Projects</a></div>   
          </div>
        </div>
        <div class="icontainer" style={{marginTop: -7}}>
          <div class="ibox">
          <div class = "img" id = "pt" data-aos="fade-right"><a href="/photography/">Photo Gallery</a></div>   
          </div>
          
          <div class="ibox">
            <div class = "img" id = "ms" data-aos="fade-right"><a href="/music/">Music Gallery</a></div>            
          </div>
        </div>
        <div class="icontainer" style={{marginTop: -7}}>
          <div class="ibox">
          <div class = "img" id = "ct" data-aos="fade-right"><a href="/contact/" id="bottom">Contact</a></div>   
          </div>
          
          <div class="ibox">
            <div class = "img" id = "end" data-aos="fade-right"><a href="/" id="bottom">That's all!</a></div>            
          </div>
        </div>
      </section>
    </Layout>
  )
}