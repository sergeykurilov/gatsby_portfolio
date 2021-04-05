import React from "react"
import Image from "gatsby-image"
import {Link} from "gatsby"
import {graphql, useStaticQuery} from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `
const Hero = () => {
    const {
        file: {
            childImageSharp: {fluid}
        }
    } = useStaticQuery(query)
    // console.log(data)


    return <header className="hero">
        <div className="section-center hero-center">
            <article className="hero-info">
                <div className="underline"> </div>
                <div>
                    <h1>I'm Sergey</h1>
                    <h4>freelance web and mobile dev</h4>
                    <Link to="/contact" className="btn">
                        contact me
                    </Link>
                    <SocialLinks/>
                </div>
            </article>
            <Image fluid={fluid} className="hero-img"/>
        </div>
    </header>
}

export default Hero
