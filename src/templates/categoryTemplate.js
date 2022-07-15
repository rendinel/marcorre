import React from "react"
import { graphql } from "gatsby"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { CategoryLayout, GlobalLayout, Seo } from "../components"

const categoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      categories: { nodes: posts },
      allMdx: { distinct },
    },
  } = props

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
        <CategoryLayout
          distinct={distinct}
          posts={posts}
          titleCategory={category}
        />
      </GlobalLayout>
    </ChakraProvider>
  )
}

export default categoryTemplate

export const pageQuery = graphql`
  query Getcategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do,YYYY")
          slug
          excerpt
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
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`
// ...GatsbyImageSharpFluid
