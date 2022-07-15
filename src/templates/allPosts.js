import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { AllPostsLayout, GlobalLayout, Seo } from "../components"

const allPosts = ({ pageContext, data }) => {
  const {
    uniquecat: { distinct },
  } = data
  const { currentPage, numPages } = pageContext
  const prevPage =
    currentPage - 1 === 0 || currentPage - 1 === 1
      ? `/blog`
      : `/blog/${currentPage - 1}`

  const nextPage =
    currentPage === numPages
      ? `/blog/${currentPage}`
      : `/blog/${currentPage + 1}`

  const posts = data.allMdx.edges
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Seo />
      <GlobalLayout>
        <AllPostsLayout
          numPages={numPages}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          posts={posts}
          distinct={distinct}
        />
      </GlobalLayout>
    </ChakraProvider>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            author
            title
            date(formatString: "MMMM Do, YYYY")
            excerpt
            category
            featureImage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            authorAvatar {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    uniquecat: allMdx {
      distinct(field: frontmatter___category)
    }
  }
`
