import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react"
import React, { useEffect } from "react"
import { Link } from "gatsby"
import { AiOutlineClose } from "react-icons/ai"
// import logo from "../assets/logo.png"
import { Algolia } from "./Algolia"
import { FiMenu, FiSearch } from "react-icons/fi"

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  useEffect(() => {
    onClose()
  }, [isDesktop, onClose])

  return (
    <Box as="section">
      <Box as="nav" bg="bg-accent" color="on-accent">
        <Container py={{ base: "3", lg: "4" }}>
          <Flex justify="space-between">
            <HStack spacing="4">
              <Avatar
                boxSize="10"
                name="logo"
                src="https://tinyurl.com/yhkm2ek8"
              />
              {/* <Avatar boxSize="10" name="logo" src={logo} /> */}
              {/* <Text fontSize="3xl">Dr.Nutrition</Text> */}
              {isDesktop && (
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <Link to="/">
                    <Button>Home</Button>
                  </Link>
                  <a href="/Cv.pdf">
                    <Button>Cv</Button>
                  </a>
                  <Link to="/contacts">
                    <Button>Contact Me</Button>
                  </Link>
                  <Link to="/blog">
                    <Button aria-current="page">Blog</Button>
                  </Link>
                </ButtonGroup>
              )}
            </HStack>
            {isDesktop ? (
              <HStack spacing="4">
                <ButtonGroup variant="ghost-on-accent" spacing="1">
                  <IconButton
                    onClick={onOpen}
                    icon={<FiSearch fontSize="1.25rem" />}
                    aria-label="Search"
                  />
                </ButtonGroup>
                {/* <Avatar
                  boxSize="10"
                  name="Christoph Winston"
                  src="https://tinyurl.com/yhkm2ek8"
                /> */}
              </HStack>
            ) : (
              <IconButton
                onClick={onOpen}
                variant="ghost-on-accent"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
            {isOpen ? (
              <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg="#F7FAFC">
                  <DrawerBody>
                    <Flex mb="5" justifyContent="center">
                      <IconButton
                        _hover={{
                          background: "blue.500",
                        }}
                        bg="blue.500"
                        onClick={onClose}
                        icon={
                          <AiOutlineClose color="#fff" fontSize="1.25rem" />
                        }
                      />
                    </Flex>
                    <Box>
                      <Link to="/">
                        <Text fontWeight="bold" color="blue.500">
                          Home
                        </Text>
                      </Link>
                    </Box>
                    <Box onClick={onClose}>
                      <a href="/Cv.pdf">
                        <Text fontWeight="bold" color="blue.500">
                          Cv
                        </Text>
                      </a>
                    </Box>
                    <Box onClick={onClose}>
                      <Link to="/#contact">
                        <Text fontWeight="bold" color="blue.500">
                          Contact Me
                        </Text>
                      </Link>
                    </Box>
                    <Box onClick={onClose}>
                      <Link to="/blog">
                        <Text fontWeight="bold" color="blue.500">
                          Blog
                        </Text>
                      </Link>
                    </Box>
                    <Flex
                      overflowX="hidden"
                      mt="5"
                      mb="1rem"
                      justifyContent="center"
                    >
                      <Text fontWeight="bold" color="blue.500">
                        Search
                      </Text>
                    </Flex>
                    <Algolia />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            ) : (
              ""
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
