import React from "react"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <article className="post">
      <header className="post__header">
        <h1>
          {post.frontmatter.title}
        </h1>
        <time>{post.frontmatter.date}</time>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

