import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Row } from "./components";
import { requests } from "./request";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
    />
    <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
    <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
    <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
    <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
  </ChakraProvider>
);
