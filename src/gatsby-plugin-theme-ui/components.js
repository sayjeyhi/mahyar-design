import React from "react"
import ProjectCard from "../components/project-card"

const components = {
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default components
