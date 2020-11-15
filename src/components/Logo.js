import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "styled-components"
import Img from "gatsby-image"

const Logo = () => {
  const themeContext = useContext(ThemeContext)
  const imageName = themeContext.isDark ? "ef-logo.png" : "ef-logo-white.png"
  const data = useStaticQuery(graphql`
    query {
      img : file(relativePath: { eq: imageName }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img fixed={data.img.childImageSharp.fixed} alt="Ethereum Foundation Logo" />
  )
}

export default Logo
