"use client";
import { Heading, useColorModeValue } from "@chakra-ui/react";

export default function PageTitle({ title }: { title: string }) {
  const textColor = useColorModeValue("brand.500", "brand.100");

  return (
    <Heading color={textColor} textAlign="center" mb={8}>
      {title}
    </Heading>
  );
}
