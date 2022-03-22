import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  container,
  navList,
  navLink,
  navItem,
  heading,
  siteTitle,
} from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>
        {pageTitle}|{data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navList}>
          <li className={navLink}>
            <Link to="/" className={navItem}>
              Home
            </Link>
          </li>
          <li className={navLink}>
            <Link to="/about" className={navItem}>
              About
            </Link>
          </li>
          <li className={navLink}>
            <Link to="/blog" className={navItem}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
