"use client"
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function MainBox({ children }: { children: ReactNode }) {
  const bgColor = useColorModeValue("white", "brand.900");

  return (
    <Box display={"flex"} flexDirection={"column"} bg={bgColor} minH="inherit" maxHeight="max-content" w="100%">
      {children}
    </Box>
  );
}