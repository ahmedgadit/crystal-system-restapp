import { Link, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";

interface category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function ButtonListing({ categories }: { categories: category[]}) {
  return (
    <SimpleGrid columns={3} spacingX="40px" spacingY="20px">
      {
        categories.map((category: category, index : number) => {
          return (
            <Link key={category.idCategory} as={NextLink} href={"/menu/" + category.strCategory} variant="blur" fontWeight="bold" mr={4}>
              {category.strCategory}
            </Link>
          );
        })
      }
    </SimpleGrid>
  );
}