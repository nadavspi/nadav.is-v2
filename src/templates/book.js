import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <section className="book">
      <h1>{post.frontmatter.title}</h1>
      <header className="book__header">
        <dl>
          <dt>Author</dt>
          <dd>{post.frontmatter.author}</dd>

          <dt>Year of Publication</dt>
          <dd>{post.frontmatter.publication}</dd>

          <dt>When I read it</dt>
          <dd>{post.frontmatter.reading}</dd>

          <dt>What I thought</dt>
          <dd>{post.frontmatter.rating}</dd>

          <dt>Buy the book</dt>
          <dd><a href={post.frontmatter.link}>Amazon</a></dd>
        </dl>
      </header>

      {post.frontmatter.highlights && <Highlights highlights={post.frontmatter.highlights} />}
    </section>
  )
}

const Highlights = ({ highlights }) => (
  <article>
    <h2>Choice Highlights</h2>
    {highlights.map(highlight => (
      <blockquote key={highlight.text.substring(0, 10)}>{highlight.text}</blockquote>
    ))}
  </article>
);

export const query = graphql`
  query BookQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        publication
        reading
        rating
        link
        highlights {
          text
        }
      }
    }
  }
`

