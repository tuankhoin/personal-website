import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Container from "../components/container"

export default function About({ data }) {
  console.log(data)
  return (
    <Layout>
      <Helmet><title>About Khoi</title></Helmet>
      <Container style={{ color: `teal` }}>
        <Header headerText="Tuan-Khoi Nguyen (Khoi)" 
        caption = {<a href="#start" className="btn btn-info" role="button">Continue</a>}/>
      </Container>
      
      <section id = "start" style={{padding: "2.5%", width: "88%", marginLeft:"6%"}}>
        <div style={{maxWidth:"100%", height:"300px", display: "block"}} id="me"></div>

        <h4 data-aos = 'fade-right'>Introduction</h4>
        <p data-aos = 'fade-right'>
          Khoi is currently in his 3rd year at The University of Melbourne, finishing his undergraduate degree in 
          Mechatronics Systems while concurrently doing Computing subjects. He is interested in anything that
          invovles automation: robotics, reinforcement learning, automation agents and heaps. He have experienced with, but not 
          limited to, game-playing agents, server automation and research.
        </p>
        <p data-aos = 'fade-right'>
          Besides sitting with the laptop, Khoi also enjoys taking photographs on hiking or mountain biking
          trips, or jam some notes with his guitar. So feel free to ask him if you want to play some music
          on the mountain peaks.
        </p>

        <h4 data-aos = 'fade-right'>Skills</h4>
        <h6 data-aos = 'fade-right'>Khoi is technically proficient in:</h6>
          <div data-aos = 'fade-right'>
            <p id = "skill">LATEX</p>
            <p id = "skill">Arduino</p>
            <p id = "skill">MATLAB</p>
            <p id = "skill">Python</p>
            <p id = "skill">Java</p>
            <p id = "skill">C</p>
            <p id = "skill">SolidWorks CAD</p>
            <p id = "skill">Haskell</p>
            <p id = "skill">Prolog</p>
            <p id = "skill">HTML/CSS</p>
            <p id = "skill">Bootstrap</p>
            <p id = "skill">Bash/Shell</p>
            <p id = "skill">Git</p>
            <p id = "skill">MySQL</p>
            <p id = "skill">Flask</p>
            <p id = "skill">Reinforcement Learning</p>
            <p id = "skill">Artificial Intelligence</p>
            <p id = "skill">Algorithms</p>
            <p id = "skill">Data Structures</p>
            <p id = "skill">C#/Unity</p>
            <p id = "skill">Shader/HLSL</p>
          </div>
        <h6 data-aos = 'fade-right'>...and have working experience with (but not limited to):</h6>
          <div data-aos = 'fade-right'>
              <p id = "skill">Golang</p>
              <p id = "skill">JavaScript</p>
              <p id = "skill">React</p>
              <p id = "skill">Gatsby</p>
              <p id = "skill">GraphQL</p>
              <p id = "skill">numpy</p>
              <p id = "skill">pandas</p>
              <p id = "skill">Machine Learning</p>
              <p id = "skill">Inventor CAD</p>
              <p id = "skill">Anisble</p>
              <p id = "skill">DevOps</p>
              <p id = "skill">CI/CD</p>
              <p id = "skill">Docker</p>
            </div>
        <h6 data-aos = 'fade-right'>His working skills include:</h6>
          <div data-aos = 'fade-right'>
              <p id = "skill">Responsibility</p>
              <p id = "skill">Research</p>
              <p id = "skill">Idea Initiative</p>
              <p id = "skill">Organizational Leadership</p>
              <p id = "skill">Project Management</p>
              <p id = "skill">Rapid Learning</p>
              <p id = "skill">Problem Solving</p>
              <p id = "skill">Mentoring</p>
              <p id = "skill">Tutoring</p>
            </div>
      
      </section>

      <h4>Awards</h4>
      {data.allAboutAwardsCsv.edges.map(({ node }, index) => (
              <div id="workframe" key = {node.id}>
              <div data-aos = 'fade-right' id="title">
                <h5>{node.Award}</h5>
                <p style = {{paddingTop:10}}>{node.Awarder} | {node.Time}</p>
              </div>
              
              <p data-aos = 'fade-right'>{node.Description}</p>
            </div>
            ))}

      <h4>Work Experience</h4>
      {data.allAboutWorkCsv.edges.map(({ node }, index) => (
              <div id="workframe" key = {node.id}>
                <div data-aos = 'fade-right' id="title">
                  <h5>{node.Company}</h5>
                  <span><a href={node.Url} target="_blank" 
                  style={{backgroundColor:"burlywood", borderRadius:"50%", padding:"1.5px 2px 0px 1px"}}>
                  <img src="https://img.icons8.com/android/24/000000/info.png"/>
                  </a></span>
                  <p>{node.Position} | {node.Time}</p>
                </div>
                
                <p data-aos = 'fade-right'>{node.Description}</p>
              </div>
            ))}

      <h4>Education</h4>
      {data.allAboutEducationCsv.edges.map(({ node }, index) => (
              <div id="workframe" key = {node.id}>
                <div data-aos = 'fade-right' id="title">
                  <h5>{node.School}</h5>
                  <p style = {{paddingTop:10}}>{node.Degree} | {node.Time}</p>
                </div>
              </div>
            ))}

      <h4>Volunteering</h4>
      {data.allAboutVolunteerCsv.edges.map(({ node }, index) => (
              <div id="workframe" key = {node.id}>
              <div data-aos = 'fade-right' id="title">
                <h5>{node.Company}</h5>
                <span><a href={node.Url} target="_blank" style={{backgroundColor:"burlywood", borderRadius:"50%", padding:"1.5px 1.5px 0px 1.5px"}}>
                <img src="https://img.icons8.com/android/24/000000/info.png"/>
                </a></span>
                <p>{node.Position} | {node.Time}</p>
              </div>
              
              <p data-aos = 'fade-right'>{node.Description}</p>
            </div>
            ))}

      <h4>Other works</h4>
      {data.allAboutOtherCsv.edges.map(({ node }, index) => (
              <div id="workframe" key = {node.id}>
              <div data-aos = 'fade-right' id="title">
                <h5 style = {{display: "inline"}}>{node.Work} </h5>
                <p style = {{display: "inline"}}>{node.Time}</p>
              </div>
              
              <p data-aos = 'fade-right'>{node.Description}</p>
            </div>
            ))}
      
    </Layout>
  )
}

export const query = graphql`
query {
  allAboutAwardsCsv {
    edges {
      node {
        Award
        Description
        Awarder
        Time
        id
      }
    }
  }
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