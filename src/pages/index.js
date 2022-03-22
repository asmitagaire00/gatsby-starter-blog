import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const index = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <p>Hello from home page</p>
        <StaticImage
          src="../images/homepage.jpg"
          alt="an apple a day takes doctor away"
        />
      </Layout>
    </div>
  )
}

export default index
