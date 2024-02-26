"use client";
import CardWithBookmark from "@/components/IconBox";
import MainBox from "@/components/MainBox";
import PageTitle from "@/components/PageTitle";
import { useMealContext } from "@/context/MealContext";
import { MealInterface } from "@/types/interfaces";
import {Center, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const { bookmarkedMeals } = useMealContext();

  return (
    <MainBox>
      <PageTitle title="My Favorites"></PageTitle>
      <Center my="10" height="max-content">
        <SimpleGrid columns={[1, 2, 3]} px={[5, 5, 5]} spacingX="10px" spacingY="20px">
          {bookmarkedMeals.map((meal: MealInterface, index: number) => {
            return <CardWithBookmark key={index} meal={meal} />;
          })}
        </SimpleGrid>
      </Center>
    </MainBox>
  );
}
