import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { GatsbyImage } from "gatsby-plugin-image"

export const ContentCard = ({
  date,
  title,
  excerpt,
  slug,
  category,
  img,
  author,
  avatar,
}) => {
  return (
    <>
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
    </>
  )
}
