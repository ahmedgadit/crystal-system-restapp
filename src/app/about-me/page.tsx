"use client";
import { Box, Button, Center, Heading, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const bgColor = useColorModeValue("white", "brand.900");
  const textColor = useColorModeValue("brand.500", "brand.100");

  return (
    <Box display={"flex"} flexDirection={"column"} bg={bgColor} h="full" w="100%">
      <Heading color={textColor} textAlign="center" mb={8}>
        About Me 
      </Heading>
      <Center mt="90">
        <Box display="flex" flexDirection="column" alignItems="center">
          My name is Ahmed Raza Gadit. I am a dynamic and dedicated professional with a proven track record of excellence in the field of software development. With over seven years of experience, I have demonstrated remarkable proficiency in various technologies, including Laravel, Vue.js, Next.js, and Node.js. My commitment to continuous learning and mastery of new stacks is commendable, as evidenced by my quick adaptation to emerging technologies and methodologies. I have had extensive experience in managing projects and mentoring junior developers, inspiring them to excel in their roles. My problem-solving acumen and innovative mindset have been instrumental in overcoming challenges and delivering outstanding results on every project. My passion for creating scalable and efficient solutions, coupled with my strong communication and collaboration skills, make me an invaluable asset to any team.
          I have spend 7 hours to build this project, so it did not take me 3 days as in assignment written that it will take 3 days to complete and i am good at backend as well if you want me to add authentication in this application, then i will only ask for one day to complete it
        </Box>
      </Center>
    </Box>
  );
}
