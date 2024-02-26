"use client"
import { Box, Button, Center, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const bgColor = useColorModeValue("white", "brand.900");
  const textColor = useColorModeValue("brand.500", "brand.100");

  return (
    <Box display={"flex"} flexDirection={"column"} bg={bgColor} h="full" w="100%">
      <Heading color={textColor} textAlign="center" mb={8}>
        Homepage
      </Heading>
      <Center mt="90">
        <Box display="flex" gap={4} flexDirection="column" alignItems="center">
          <Box display="flex">
            <Link as={NextLink} href={"/menu"} variant="blur" fontWeight="bold" mr={4}>
              Menu
            </Link>
            <Link as={NextLink} href={"/favorites"} variant="blur" fontWeight="bold" mr={4}>
              Favorites
            </Link>
          </Box>
          <Link as={NextLink} href={"/random-meal"} variant="blur" fontWeight="bold" mr={4}>
            Random Meal
          </Link>

        </Box>
      </Center>
    </Box>
  );
}
