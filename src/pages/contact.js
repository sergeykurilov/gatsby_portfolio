import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>get in touch</h3>
        <form
            action="https://formspree.io/f/xqkwkyra"
            method="POST"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="name" className="form-control"/>
            <input type="email" name="email" placeholder="email" className="form-control"/>
            <input type="textarea" name="message" placeholder="message" row="5" className="form-control"/>
            <button type="submit" className="submit-btn btn">Submit here </button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
