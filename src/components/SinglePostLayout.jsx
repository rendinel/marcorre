import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"
import * as React from "react"
import { BlogPost } from "./BlogPost"
import { ScrollToTop } from "./ScrollToTop"

export const SinglePostLayout = ({ postData, body }) => (
  <Box bg="bg-surface">
    <ScrollToTop />
    <Box bg="bg-accent" color="on-accent">
      <Container
        pt={{
          base: "16",
          md: "24",
        }}
        pb={{
          base: "32",
          md: "48",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          align="center"
        >
          <Stack
            spacing={{
              base: "4",
              md: "6",
            }}
            textAlign="center"
          >
            <Stack spacing="4">
              <Heading
                size={useBreakpointValue({
                  base: "md",
                  md: "lg",
                })}
              >
                {postData.title}
              </Heading>
            </Stack>
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              maxW="2xl"
              color="on-accent-muted"
            >
              {postData.excerpt}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
    <Container
      pb={{
        base: "16",
        md: "24",
      }}
      mt={{
        base: "-16",
        md: "-24",
      }}
    >
      <Stack
        spacing={{
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
          <BlogPost postData={postData} body={body} isHero />
        </Stack>
      </Stack>
    </Container>
  </Box>
)
