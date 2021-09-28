//Step 1: Import
import * as React from 'react'
//import { Link } from 'gatsby';
import Layout from '../components/layout'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this the layout in React</p>
    </Layout>
  )
}

//Step 3: Export your component
export default IndexPage