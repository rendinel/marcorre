import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  Button,
  Flex,
} from "@chakra-ui/react"
import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import { Pagination } from "./Pagination"
import { ContentCard } from "./ContentCard"
import { Link } from "gatsby"

export const AllPostsLayout = ({
  numPages,
  currentPage,
  prevPage,
  nextPage,
  posts,
  distinct,
}) => {
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
              <Flex>
                {distinct.map((cat, i) => {
                  if (!isMobile) {
                    return (
                      <Link key={i} to={`/blog/${cat}`}>
                        <Button variant="primary" mr="1" size="lg">
                          {cat}
                        </Button>
                      </Link>
                    )
                  } else {
                    return (
                      <Link key={i} to={`/blog/${cat}`}>
                        <Button variant="primary" mr="1" size="md">
                          {cat}
                        </Button>
                      </Link>
                    )
                  }
                })}
              </Flex>
            </Stack>
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
            {posts.map(post => {
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
                <ContentCard
                  key={slug}
                  author={author}
                  slug={slug}
                  title={title}
                  img={img}
                  excerpt={excerpt}
                  date={date}
                  category={category}
                  avatar={avatar}
                />
              )
            })}
          </SimpleGrid>
          <Pagination
            nextPage={nextPage}
            currentPage={currentPage}
            prevPage={prevPage}
            numPages={numPages}
          />
        </Stack>
      </Container>
    </Box>
  )
}
