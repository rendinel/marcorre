import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Avatar,
} from "@chakra-ui/react"
import * as React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import logofooter from "../assets/logofooter.png"

export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    w="full"
    py={{
      base: "6",
      md: "8",
    }}
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <Avatar
          mr="16"
          boxSize="10"
          name="Christoph Winston"
          src={logofooter}
        />
        <ButtonGroup variant="ghost">
          <IconButton
            color="bg-accent"
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            color="bg-accent"
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            color="bg-accent"
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="black">
        &copy; {new Date().getFullYear()} Dr.Nutrition Inc. by Marco Rendine All
        rights reserved.
      </Text>
    </Stack>
  </Container>
)
