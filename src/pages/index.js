import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({data}) => {
    console.log(data)

    const {allStrapiProjects:{nodes:projects}} = data


    return <Layout>
        <Hero/>
        <Services/>
        <Jobs/>
        <Projects projects={projects} title={"Featured projects"} showLink/>
    </Layout>
}

export const query =  graphql`
query allStrapiJobs{
  allStrapiProjects{
    nodes{
   id
      github
      url
      description
      image{
        childImageSharp{
          fluid{
          ...GatsbyImageSharpFluid
          }
        }
      }
    stack{
      id
      title
    }
    }
  }
}
`
//
