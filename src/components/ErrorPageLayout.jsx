import * as React from "react"
import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"

export const ErrorPageLayout = () => {
  return (
    <Box as="section">
      <Container
        minH="71vh"
        py={{
          base: "16",
          md: "24",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
        >
          <Stack
            spacing={{
              base: "4",
              md: "5",
            }}
            align="center"
          >
            <Heading
              size={useBreakpointValue({
                base: "sm",
                md: "md",
              })}
            >
              404 oops! Page not found
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{
              base: "column",
              sm: "row",
            }}
            justify="center"
          >
            <Button variant="primary" size="lg">
              Home
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
