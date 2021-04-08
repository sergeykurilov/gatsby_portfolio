import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return <h2>blog page</h2>
}


// export const query = graphql(`query allStrapiJobs{
//  allStrapiBlogs{
//   nodes{
//     slug
//     desc
//     date(formatString: "MMM Do, YYYY")
//     id
//     image {
//     childrenImageSharp{
//       fluid{
//         src
//       }
//     }
//   }
//   }
// }
// }`)


export default Blog
