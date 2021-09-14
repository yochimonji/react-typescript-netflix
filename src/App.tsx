import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Row } from "./Row";
import { requests } from "./request";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
    />
    <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
    <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
    <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
  </ChakraProvider>
);
