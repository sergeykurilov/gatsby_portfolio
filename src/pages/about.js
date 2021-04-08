import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid
const About = ({data: {about: {nodes}}}) => {
   const {image, stack, title, info} = nodes[0]




    return <Layout>
        <SEO  title="about" description="About webdev"/>
        <section className="about-page">
            <div className="section-center about-center">
                <Image fluid={image.childImageSharp.fluid} className="about-img"/>
                <article className="about-text">
                    <Title title={title}/>
                    <p>{info}</p>
                    <div className="about-stack">
                        {stack.map((item) => {
                            return <span key={item.id}>{item.name}</span>
                        })}
                    </div>
                </article>
            </div>
        </section>
    </Layout>
}

export const query = graphql`
  {
   about: allStrapiAbout{
    nodes{
      title
      info
      image{
        childImageSharp{
          fluid{
           ...GatsbyImageSharpFluid
          }
        }
      }
       stack{
        id
        name
      }
    }
  }
  }
`


export default About
