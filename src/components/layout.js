import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(29),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer
          style={{
            borderTop: "1px solid #ccc",
            paddingTop: rhythm(.4),
          }}
        >
          © {new Date().getFullYear()} - Bloggen er bygget ved hjelp av
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
          <p
            style={{
              ...scale(-0.4),
              marginBottom: rhythm(1),
              marginTop: rhythm(0.3),
            }}
          >
            <b>Forbehold:</b> Investering og handel er riskofylt. Snakk
            med en autorisert finansrådgiver før du foretar beslutninger.
            Kryptoverden.no er kun en informasjonsportal, og vil
            ikke holdes ansvarlig for økonomiske beslutninger gjort av våre
            besøkende.
          </p>
        </footer>
      </div>
    )
  }
}

export default Layout
