"use client";
import MainBox from "@/components/MainBox";
import PageTitle from "@/components/PageTitle";
import { useMealContext } from "@/context/MealContext";
import { MealInterface } from "@/types/interfaces";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const { bookmarkedMeals, addBookmark, removeBookmark } = useMealContext();
  const [currentMeal, setCurrentMeal] = useState<MealInterface>({
    idMeal: "",
    strMeal: "",
    strMealThumb: "",
  });
  const textTitleColor = useColorModeValue("brand.900", "brand.100");
  const textColor = useColorModeValue("brand.500", "brand.100");

  const mealIsBooked =
    bookmarkedMeals.findIndex((x) => {
      return x.idMeal == currentMeal.idMeal;
    }) != -1;

  const generateMeal = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const randomMeal = await res.json();
    setCurrentMeal(randomMeal.meals[0]);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bookMarkColor = mealIsBooked ? useColorModeValue("yellow.500", "yellow.300") : useColorModeValue("white", "white");

  return (
    <MainBox>
      <PageTitle title="Random Meal"></PageTitle>
      <Center my="10" height="max-content">
        <Box display="flex" flexDir={"column"} gap={4} justifyContent="center" alignItems="center">
          {currentMeal.idMeal != "" && (
            <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={currentMeal.strMealThumb} alt="Placeholder" objectFit="cover" w="100%" h="200px" />

              <Box p="6" color={textColor}>
                <Box display="flex" alignItems="center" justifyContent="center" mb="4">
                  <Text color={textTitleColor} fontWeight="bold">
                    {currentMeal.strMeal}
                  </Text>
                </Box>
                {currentMeal.strInstructions}
                {/* Add your card content here */}
              </Box>

              <Flex alignItems="center" justifyContent="flex-end" p="4">
                <IconButton
                  colorScheme="brand"
                  onClick={() => {
                    mealIsBooked ? removeBookmark(currentMeal.idMeal) : addBookmark(currentMeal);
                  }}
                  aria-label="Search database"
                  icon={<StarIcon color={bookMarkColor} />}
                />
              </Flex>
            </Box>
          )}
          <Button
            onClick={() => {
              generateMeal();
            }}
            variant="blur"
            fontWeight="bold"
            mr={4}>
            Generate
          </Button>
        </Box>
      </Center>
    </MainBox>
  );
}
