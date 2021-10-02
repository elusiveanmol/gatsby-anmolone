import * as React from 'react'

//Step 1: Import the graphql tag
import { graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'



const BlogPage = ({ data }) => {
	return (
		
		<Layout pageTitle="My Thoughts">
		<p>on desgin, dev, and diaspora</p>
		

		{/* Step 3: Use the data in your component */}

			{
				data.allMdx.nodes.map((node) => (
					<article key={node.id}>
						<h2>{node.frontmatter.title}</h2>
						<p>Posted: {node.frontmatter.date}</p>
						<MDXRenderer>
							{node.body}
						</MDXRenderer>
					</article>
				))
			}
		
		</Layout>
	)
}

// Step 2: Export a page query
export const query = graphql`
query {
	allMdx ( sort: {fields: frontmatter___date, order: DESC}) {
		nodes {
			frontmatter {
				date(formatString: "MMMM D, YYYY")
				title
			}
			id
			body
		}
	}
}
`

export default BlogPage