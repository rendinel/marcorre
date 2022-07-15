import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  Textarea,
  Flex,
} from "@chakra-ui/react"
import * as React from "react"
import logo from "../assets/logofooter.png"

export const Contact = () => (
  <Container
    id="contact"
    maxW="md"
    py={{
      base: "12",
      md: "24",
    }}
  >
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Flex justifyContent="center" w="full">
          <Avatar boxSize="10" name="logo" src={logo} />
        </Flex>
        <Stack spacing="3" textAlign="center">
          <Heading
            size={useBreakpointValue({
              base: "xs",
              md: "sm",
            })}
          >
            Create an account
          </Heading>
          <Text color="muted">Start making your dreams come true</Text>
        </Stack>
      </Stack>
      <Stack spacing="6">
        <Stack spacing="5">
          <FormControl isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <Textarea htmlFor="message"></Textarea>
          </FormControl>
        </Stack>
        <Stack spacing="4">
          <Button variant="primary">Create account</Button>
        </Stack>
      </Stack>
    </Stack>
  </Container>
)
