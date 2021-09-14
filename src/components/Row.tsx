import React, { useEffect, useState } from "react";
import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import axios from "../axios";

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <Box marginLeft="20px" bg="white">
      <Heading size="lg">{title}</Heading>
      <HStack overflowY="hidden" overflowX="scroll" p="4">
        {movies.map((movie, i) => (
          <Image
            key={movie.id}
            objectFit="contain"
            w="100%"
            m="2"
            transition="transform 450ms"
            maxH={isLargeRow ? "50" : "20"}
            _hover={{ transform: "scale(1.08)" }}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </HStack>
    </Box>
  );
};
