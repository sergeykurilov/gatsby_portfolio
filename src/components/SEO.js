import React from "react"
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

const query = graphql`
  query query {
   site{
    siteMetadata{
      author
      image
      siteDesc:description
      siteTitle:siteUrl
      twitterUsername
      title
    }
  }
  }
`


const SEO = ({title, description}) => {
    const {site} = useStaticQuery(query)
    const {
        author,
        image,
        siteDesc,
        siteTitle,
        twitterUsername,
    } = site.siteMetadata
    return <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteTitle}`}>
        <meta name="description" content={description || siteDesc}/>
        <meta name="image" content={image} />
    </Helmet>
}

export default SEO
