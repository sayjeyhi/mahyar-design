import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { bundleMDX } from "mdx-bundler"

export const POSTS_PATH = path.join(process.cwd(), "data/_journal")

export const getSourceOfFile = (fileName: any) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName))
}

export const getPosts = (amount?: number) => {
  return (
    fs
      .readdirSync(POSTS_PATH)
      .filter((p) => /\.mdx?$/.test(p))
      .map((fileName) => {
        const source = getSourceOfFile(fileName)
        const slug = fileName.replace(/\.mdx?$/, "")
        const { data } = matter(source)

        return {
          frontmatter: data,
          slug,
        }
      })
      // If amount is specified, return that amount, else return all posts
      .slice(0, amount)
  )
}

export const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(`${slug}.mdx`).toString()

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH,
  })

  return {
    frontmatter,
    code,
  }
}
