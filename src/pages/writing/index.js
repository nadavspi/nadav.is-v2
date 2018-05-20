import React from "react";
import Link from 'gatsby-link';

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <article>
        <h1>I write, sometimes.</h1>
        <h2>I write about music, the web, and the intersection of the two.</h2>
      </article>

      <section className="archive">
        <h1 className="visuallyhidden">Archive</h1>
        <ol>
          {data.allMarkdownRemark.edges.filter(edge => !edge.node.frontmatter.type).map(({ node }) =>
            <li className="archive__post" key={node.id}>
              <Link to={node.fields.slug}>
                  {node.frontmatter.title}{" "}
                  <time className="date sc">{node.frontmatter.date}</time>
              </Link>
            </li>
          )}
        </ol>
      </section>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            type
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

