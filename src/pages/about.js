import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function About({ data }) {
  console.log(data)
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="Tuan-Khoi Nguyen (Khoi)" caption = "Continued below..."/>
      </div>

      <h4>Work Experience</h4>
      {data.allAboutWorkCsv.edges.map(({ node }, index) => (
              <div data-aos = 'fade-right' id="workframe" key = {node.id}>
                <div id="title">
                  <h5>{node.Company}</h5>
                  <span><a href={node.Url}>
                  <img src="https://img.icons8.com/android/24/000000/info.png"/>
                  </a></span>
                  <p>{node.Position} | {node.Time}</p>
                </div>
                
                <p>{node.Description}</p>
              </div>
            ))}

      <h4>Education</h4>
      {data.allAboutEducationCsv.edges.map(({ node }, index) => (
              <div data-aos = 'fade-right' id="workframe" key = {node.id}>
                <div id="title">
                  <h5>{node.School}</h5>
                  <p style = {{paddingTop:10}}>{node.Degree} | {node.Time}</p>
                </div>
              </div>
            ))}

      <h4>Volunteering</h4>
      {data.allAboutVolunteerCsv.edges.map(({ node }, index) => (
              <div data-aos = 'fade-right' id="workframe" key = {node.id}>
              <div id="title">
                <h5>{node.Company}</h5>
                <span><a href={node.Url}>
                <img src="https://img.icons8.com/android/24/000000/info.png"/>
                </a></span>
                <p>{node.Position} | {node.Time}</p>
              </div>
              
              <p>{node.Description}</p>
            </div>
            ))}

      <h4>Other works</h4>
      {data.allAboutOtherCsv.edges.map(({ node }, index) => (
              <div data-aos = 'fade-right' id="workframe" key = {node.id}>
              <div id="title">
                <h5 style = {{display: "inline"}}>{node.Work} </h5>
                <p style = {{display: "inline"}}>{node.Time}</p>
              </div>
              
              <p>{node.Description}</p>
            </div>
            ))}

    </Layout>
  )
}

export const query = graphql`
query {
  allAboutOtherCsv {
    edges {
      node {
        Work
        Description
        Time
        id
      }
    }
  }
  allAboutEducationCsv {
    edges {
      node {
        Degree
        School
        Time
        id
      }
    }
  }
  allAboutWorkCsv {
    edges {
      node {
        Company
        Description
        Position
        Time
        Url
        id
      }
    }
  }
  allAboutVolunteerCsv {
    edges {
      node {
        Company
        Description
        Position
        Time
        Url
        id
      }
    }
  }
}
`