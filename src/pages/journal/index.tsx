import Link from "components/Link"
import { getAllPosts } from "utils/mdx"

export default function JournalList({ posts }: any) {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post: any, index: number) => (
          <li key={index}>
            <Link href={`/journal/${post.slug}`}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}
