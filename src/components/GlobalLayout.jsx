import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ScrollToTop } from "./ScrollToTop"

export const GlobalLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  )
}
