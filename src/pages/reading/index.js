import React from "react";
import Link from 'gatsby-link';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const books = edges
    .filter(edge => edge.node.frontmatter.type === 'book')
    .map(edge => (
      <li>
        <Link to={edge.node.fields.slug} key={edge.node.id}>
          {edge.node.frontmatter.title}
        </Link>
      </li>
    ));

  return (
    <div>
      <h1>Reading List</h1>
      <h2>No home is complete without a bookshelf.</h2>

      <p>This is my (incomplete) online bookshelf. Its purpose is to help me remember what books I&rsquo;ve read and what I thought about them at the time, without being dependent on external services like Goodreads and Kindle Highlights.</p>

      <section className="reading-list">
        <ol>
          {books}
        </ol>
      </section>
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query AnotherIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            type
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug 
          }
        }
      }
    }
  }
`;
