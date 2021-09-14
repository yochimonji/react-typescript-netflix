import React, { useEffect, useState } from "react";
import { requests } from "../request";
import axios from "../axios";
import { Box, Heading, Stack, HStack, Button } from "@chakra-ui/react";

type movieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<movieProps>({});
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.feachNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  const truncate = (str: string | undefined, n: number) => {
    if (str !== undefined) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  };

  return (
    <Box
      color="white"
      objectFit="contain"
      height="448px"
      backgroundSize="cover"
      backgroundImage={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}
      backgroundPosition="center center"
    >
      <Stack ml="30px" pt="140px" h="190px">
        <Heading>{movie?.title || movie?.name || movie?.original_name}</Heading>
        <HStack>
          <Button variant="solid" colorScheme="blackAlpha">
            Play
          </Button>
          <Button variant="solid" colorScheme="blackAlpha">
            My List
          </Button>
        </HStack>
        <Heading size="md" width="md">
          {truncate(movie?.overview, 150)}
        </Heading>
      </Stack>
    </Box>
  );
};
