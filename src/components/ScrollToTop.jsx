import React from "react"
import { AiOutlineArrowUp } from "react-icons/ai"
import { Button, Icon } from "@chakra-ui/react"
export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      pos="fixed"
      bottom="1rem"
      right="0.5rem"
      variant="primary"
      size="md"
      onClick={scrollToTop}
      className="scroll-to-top"
    >
      <Icon as={AiOutlineArrowUp} />
    </Button>
  )
}
