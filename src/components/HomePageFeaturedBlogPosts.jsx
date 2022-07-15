import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query MyQuery {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            category
            author
            excerpt
            slug
            date(formatString: "MMMM Do, YYYY")
            title
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
  }
`

export const HomePageFeaturedBlogPosts = () => {
  const data = useStaticQuery(query)
  const {
    allMdx: { edges },
  } = data
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  })
  return (
    <Box bg="bg-surface">
      <Container
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Stack
          spacing={{
            base: "12",
            md: "16",
          }}
        >
          <Stack direction="row" justify="space-between">
            <Stack
              spacing={{
                base: "4",
                md: "5",
              }}
            >
              <Stack spacing="3">
                <Text
                  color="accent"
                  fontWeight="semibold"
                  fontSize={{
                    base: "sm",
                    md: "md",
                  }}
                >
                  Our Blog
                </Text>
                <Heading
                  size={useBreakpointValue({
                    base: "sm",
                    md: "md",
                  })}
                >
                  Latest blog posts
                </Heading>
              </Stack>
              <Text
                color="muted"
                fontSize={{
                  base: "lg",
                  md: "xl",
                }}
              >
                Ice cream pudding dragée macaroon donut marzipan chocolate
              </Text>
            </Stack>
            {!isMobile && (
              <Link to="/blog">
                <Button variant="primary" size="lg">
                  Blog
                </Button>
              </Link>
            )}
          </Stack>
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            gap={{
              base: "12",
              lg: "8",
            }}
          >
            {edges.map(post => {
              const {
                author,
                slug,
                title,
                featureImage,
                authorAvatar,
                excerpt,
                date,
                category,
              } = post.node.frontmatter
              const img = getImage(featureImage)
              const avatar = getImage(authorAvatar)
              return (
                <Link
                  to={`/blog/${slug}`}
                  key={slug}
                  _hover={{
                    textDecor: "none",
                  }}
                  role="group"
                >
                  <Stack spacing="8">
                    <Box
                      transition="all 0.2s"
                      _groupHover={{
                        transform: "scale(1.05)",
                      }}
                      overflow="hidden"
                    >
                      <GatsbyImage
                        image={img}
                        alt={title}
                        width="100%"
                        height="15rem"
                        objectFit="cover"
                      />
                    </Box>
                    <Stack spacing="3">
                      <Text fontSize="sm" fontWeight="semibold" color="accent">
                        {category}
                      </Text>
                      <Heading isTruncated size="xs">
                        {title}
                      </Heading>
                      <Text color="muted">{excerpt}</Text>
                    </Stack>
                    <HStack>
                      <GatsbyImage
                        image={avatar}
                        alt={author}
                        style={{ borderRadius: "10rem" }}
                        width="4rem"
                        height="4rem"
                        objectFit="cover"
                      />
                      <Box fontSize="sm">
                        <Text fontWeight="medium">{author}</Text>
                        <Text color="muted">{date}</Text>
                      </Box>
                    </HStack>
                  </Stack>
                </Link>
              )
            })}
          </SimpleGrid>
          {isMobile && (
            <Button variant="primary" size="lg">
              <Link to="/blog">Blog</Link>
            </Button>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
