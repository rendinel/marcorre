import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, connectHits } from "react-instantsearch-dom"
import { Box, Text, Button } from "@chakra-ui/react"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const NewHits = connectHits(({ hits }) => {
  return hits.map(item => {
    const { objectID, category, title, slug } = item
    return (
      <Link to={`/blog/${slug}`} key={objectID}>
        <Box mb="2">
          <Text isTruncated fontWeight="bold" color="blue.500">
            {title}
          </Text>
          <Button mt="1" variant="primary" size="xs">
            {category}
          </Button>
        </Box>
      </Link>
    )
  })
})

export const Algolia = () => {
  return (
    <section className="search-section">
      <InstantSearch
        indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
      >
        <SearchBox />
        <NewHits />
      </InstantSearch>
    </section>
  )
}
