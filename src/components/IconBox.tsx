"use client"
import { Box, Image, Flex, Text, useColorModeValue, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { MealInterface } from "@/types/interfaces";
import { useMealContext } from "@/context/MealContext";


const CardWithBookmark = ({ meal }: { meal: MealInterface }) => {
  const { bookmarkedMeals, addBookmark, removeBookmark } = useMealContext();

  const mealIsBooked = bookmarkedMeals.findIndex((x) => { return x.idMeal == meal.idMeal }) != -1;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const bookMarkColor = mealIsBooked ? useColorModeValue("yellow.500", "yellow.300") : useColorModeValue("white", "white");
    
  return (
    <Box display="flex">
      <Box display={"flex"} alignItems="center" w={350} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
        <Image src={meal.strMealThumb} alt="Placeholder" p={2} objectFit="cover" w="auto" h="100" />

        <Box display="flex" h="100%" alignItems="center" justifyContent="center">
          <Text fontWeight="bold">{meal.strMeal}</Text>
        </Box>
        {/* Add your card content here */}
      </Box>
      <Flex alignItems="center" justifyContent="flex-end" p="4">
        <IconButton colorScheme='brand' onClick={() => { mealIsBooked ? removeBookmark(meal.idMeal): addBookmark(meal); }} aria-label="Search database" icon={<StarIcon color={bookMarkColor}/>} />
      </Flex>
    </Box>
  );
};

export default CardWithBookmark;
