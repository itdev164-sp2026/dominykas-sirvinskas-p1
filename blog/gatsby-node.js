const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allContentfulLesson {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulLesson.nodes.forEach((lesson) => {
    createPage({
      path: lesson.slug,
      component: path.resolve("./src/templates/lesson.js"),
      context: {
        slug: lesson.slug,
      },
    })
  })
}