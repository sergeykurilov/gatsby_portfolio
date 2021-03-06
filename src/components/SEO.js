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
        siteUrl,
        siteTitle,
        twitterUsername,
    } = site.siteMetadata
    return <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteTitle}`}>
        <meta name="description" content={description || siteDesc}/>
        <meta name="image" content={image} />

        <meta name="twitter-card" content="summary_large_image"/>
        <meta name="twitter:creator" content={twitterUsername}/>
        <meta name="twitter:title" content={siteTitle}/>
        <meta name="twitter:description" content={siteDesc}/>
        <meta name="twitter:image" content={`${siteUrl}${image}`}/>
    </Helmet>
}

export default SEO
