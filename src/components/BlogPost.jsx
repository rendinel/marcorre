import {
  Button,
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { VscCircleFilled } from "react-icons/vsc"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const BlogPost = ({ body, postData, isHero }) => {
  const { author, category, title, featureImage, date } = postData
  const img = getImage(featureImage)
  return (
    <Box
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
          height={useBreakpointValue({
            base: "15rem",
            md: isHero ? "sm" : "15rem",
          })}
        >
          <GatsbyImage image={img} alt={title} width="100%" objectFit="cover" />
        </Box>
        <Stack spacing="6">
          <Stack spacing="3">
            <HStack
              spacing="1"
              fontSize="sm"
              fontWeight="semibold"
              color="accent"
            >
              <Text>{author}</Text>
              <Icon as={VscCircleFilled} boxSize="2" />
              <Text> {date}</Text>
            </HStack>
            <Heading
              size={useBreakpointValue({
                base: "xs",
                md: isHero ? "sm" : "xs",
              })}
            >
              {title}
            </Heading>
            <Text color="muted">
              <MDXRenderer>{body}</MDXRenderer>
            </Text>
          </Stack>
          <HStack>
            <Link to={`/blog/${category}`}>
              <Button variant="primary" size="md">
                {category}
              </Button>
            </Link>
          </HStack>
          <Link to="/blog">
            <Text fontWeight="semibold" color="accent">
              <Icon as={AiOutlineArrowLeft} boxSize="3" /> Back to Blog
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
