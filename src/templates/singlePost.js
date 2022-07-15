import * as React from "react"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { theme } from "@chakra-ui/pro-theme"
import { SinglePostLayout, Seo } from "../components"
import { graphql } from "gatsby"

const singlePost = ({ data }) => {
  const postData = data.mdx.frontmatter
  const body = data.mdx.body
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.blue },
    },
    theme
  )
  return (
    <ChakraProvider theme={myTheme}>
      <Seo />
      <SinglePostLayout postData={postData} body={body} />
    </ChakraProvider>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        author
        category
        slug
        title
        excerpt
        featureImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
