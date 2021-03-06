import React from "react"
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({data: {allStrapiBlogs: {nodes: blogs}}}) => {

    return <Layout>
        <section className="blog-page">
            <Blogs blogs={blogs} title="blog"/>
        </section>
    </Layout>
}


export const query = graphql`
query allStrapiJobs{
 allStrapiBlogs{
  nodes{
    slug
    desc
    category
    date(formatString: "MMM Do, YYYY")
    id
   image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                
  }
  }
}
}`


export default Blog
