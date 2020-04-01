/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
    console.log("Creating page: " + node.frontmatter.path)
  })
}

async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/(projects)/.*\\\\.md$/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {}, // additional data can be passed via context
    })

    console.log("Creating page: " + node.frontmatter.path)
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createProjectPages(graphql, actions, reporter)
}

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  const config = getConfig()

  const coreJs2config = config.resolve.alias["core-js"]
  delete config.resolve.alias["core-js"]
  config.resolve.alias[`core-js/modules`] = `${coreJs2config}/modules`
  try {
    config.resolve.alias[`core-js/es`] = path.dirname(
      require.resolve("core-js/es")
    )
  } catch (err) {}
  actions.replaceWebpackConfig(config)
}
