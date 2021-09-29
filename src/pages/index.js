//Step 1: Import
import * as React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
    return (
      <Layout pageTitle="Home Page">
        <p>I'm making this the layout in React</p>
        <StaticImage
        alt="Myntra's Case-Study by Obvious.in"
        src="../images/myntra.webp"
        />
    </Layout>
  )
}

//Step 3: Export your component
export default IndexPage