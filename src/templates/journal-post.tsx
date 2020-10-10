import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const JournalPost = ({ data }: any) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link to="/">Go back</Link>
      <div>
          <div>{post.frontmatter.title}</div>
        <div>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default JournalPost
