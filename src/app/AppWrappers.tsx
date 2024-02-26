"use client";
import React, { ReactNode } from "react";
import "@/styles/App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "@/theme/theme";
import { MealProvider } from "@/context/MealContext";

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <MealProvider>
          {children}
        </MealProvider>
      </ChakraProvider>{" "}
    </CacheProvider>
  );
}
