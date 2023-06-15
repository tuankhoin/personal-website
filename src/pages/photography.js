import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "./photography.css"

export default function Photography({ data }) {
  return (
    <Layout>
      <Helmet><title>Photo Gallery</title></Helmet>
      <Container><Header headerText="Photography Gallery" 
      caption = {<a href="#start" className="btn btn-info" role="button">Let's go!</a>} /></Container>


        <p id="start" style={{padding:"20px 0px"}}>Welcome to my journey memento. I hope you enjoy wandering around here.</p>
        {/* <p id="start" style={{padding:"20px 0px"}}>Tips: Squeeze the window sides if you want to see more</p> */}
        <p> </p>

      {data.allPhotosCsv.edges.map(({ node }) => (
          <div className="row"  key = {node.id}>
            <div className="col-lg img"
            style={{backgroundImage:"url(https://drive.google.com/uc?export=view&id="+node.id+")",
                    backgroundPositionY: node.pad}}>
              <Link to={node.path} target="_blank" className="not-active">
                <h5 style = {{display: "inline"}}>{node.title} </h5>
                <p style = {{display: "inline"}}>{node.time}</p>
              </Link>
            </div>
          </div>
          ))}

        

    </Layout>
  )
}

export const query = graphql`
query {
  allPhotosCsv {
    edges {
      node {
        id
        title
        time
        path
        pad
      }
    }
  }
}

`