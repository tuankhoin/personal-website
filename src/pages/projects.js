import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import { Helmet } from "react-helmet"

export default function Projects({ data }) {
  return (
    <Layout>
      <Helmet><title>Work Showcase</title></Helmet>
      <Container><Header headerText="Projects & Publications"
      caption = {<a href="#start" className="btn btn-info" role="button">Continue</a>} /></Container>

      
      <section id = "start">
        <p style={{padding:"20px 0px"}}>This showcase consists of the projects that I have done, or contributed, 
          as well as my publications.
        </p>
        {data.allShowcaseCsv.edges.map(({ node }) => (
              <div id="showcase" key = {node.id}>
                <a data-aos="fade-right" href={node.Url} target="_blank">
                <div id="title">
                  <h5 style = {{display: "inline"}}>{node.Title} </h5>
                  <p style = {{display: "inline"}}>{node.T}</p>
                </div>

                {node.Stack.split(',').map((techStack, index) => (
                  <p id="techstack" key = {index}>{techStack}</p>
                ))}

                <p>{node.Description}</p>
                <p style={{fontWeight: "bold"}}>Other contributors: </p>
                <p>{node.Contributor}</p>
                </a>
              </div>
              ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
query {
  allShowcaseCsv {
    edges {
      node {
        Title
        T
        Stack
        Description
        Contributor
        Url
        id
      }
    }
  }
}

`