import CardWithBookmark from "@/components/IconBox";
import MainBox from "@/components/MainBox";
import PageTitle from "@/components/PageTitle";
import { MealInterface } from "@/types/interfaces";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";

export default async function Category({ params }: { params: { slug: string } }) {
  const { slug } = params;  
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+slug);
  const data = await res.json();
  
  return (
    <MainBox>
      <PageTitle title={slug}></PageTitle>
      <Center my="10" height="max-content">
        <SimpleGrid columns={[1, 2, 3]} px={[5, 5, 5]} spacingX="10px" spacingY="20px">
          {data.meals.map((meal: MealInterface, index: number) => {
            return <CardWithBookmark key={index} meal={meal} />;
          })}
        </SimpleGrid>
      </Center>
    </MainBox>
  );
}
