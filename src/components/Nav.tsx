import React, { useEffect, useState } from "react";
import { Image, HStack, Avatar } from "@chakra-ui/react";

export const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <HStack
      zIndex="1"
      justify="space-between"
      position="fixed"
      w="100%"
      p="2"
      h="10"
      bg={show ? "gray.900" : "none"}
    >
      <Image
        w="80px"
        objectFit="contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
      />
      <Avatar w="10" h="10" />
    </HStack>
  );
};
