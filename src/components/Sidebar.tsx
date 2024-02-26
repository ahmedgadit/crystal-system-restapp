import { Link } from "@chakra-ui/next-js";
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar({ isOpen, onClose } : { isOpen: boolean, onClose: () => void }){
  const headColor = useColorModeValue("white", "brand.900");
  const txtColor = useColorModeValue("brand.500", "brand.100");
  const hoverColor = useColorModeValue("brand.900", "brand.400");

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg={headColor}>
          <DrawerCloseButton />
          <DrawerBody>
            <Box
              display={"flex"}
              py={40} // Increase the padding-y to create space between the content and the top
              h={"100%"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}>
              <Box display={"flex"} flexDirection={"column"}>
                <Link as={NextLink} color={txtColor} href="/" _hover={{ color: hoverColor }} fontSize="xl" fontWeight="bold" mb={4}>
                  Homepage
                </Link>
                <Link as={NextLink} color={txtColor} href="/menu" _hover={{ color: hoverColor }} fontSize="xl" fontWeight="bold" mb={4}>
                  Menu
                </Link>
                <Link as={NextLink} color={txtColor} href="/favorites" _hover={{ color: hoverColor }} fontSize="xl" fontWeight="bold" mb={4}>
                  My Favorites
                </Link>
                <Link as={NextLink} color={txtColor} href="/random-meal" _hover={{ color: hoverColor }} fontSize="xl" fontWeight="bold">
                  Random Meal
                </Link>
              </Box>
              <Box>
                <Link as={NextLink} color={txtColor} href="/about-me" _hover={{ color: hoverColor }} fontSize="xl" fontWeight="bold">
                  About Me
                </Link>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
