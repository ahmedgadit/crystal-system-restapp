import ButtonListing from "@/components/ButtonListing";
import MainBox from "@/components/MainBox";
import PageTitle from "@/components/PageTitle";
import { Center } from "@chakra-ui/react";

export default async function Menu() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php"); 
  const data = await res.json();

  return (
    <MainBox>
      <PageTitle title="Menu" />
      <Center mt="90">{data.categories.length > 0 && <ButtonListing categories={data.categories} />}</Center>
    </MainBox>
  );
}
