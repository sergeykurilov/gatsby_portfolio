import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
      <main className="error-page">
      <h1>oops it's dead end</h1>
      <Link to="/" className="btn">
          back home
      </Link>
  </main>)
}

export default Error
