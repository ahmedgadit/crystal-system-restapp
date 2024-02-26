import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";

interface HeaderProps {
  onSidebarOpen: () => void;
}

export default function Header({ onSidebarOpen }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  let bgButton = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const iconColor = useColorModeValue("brand.500", "brand.100");
  const headColor = useColorModeValue("white", "brand.900");
  return (
    <Box as="header" bg={headColor} display={"flex"} alignItems="center" justifyContent={"space-between"} p={4}>
      <HamburgerIcon display="flex" color={iconColor} alignItems="center" justifyContent="center" h="24px" w="24px" cursor="pointer" onClick={() => onSidebarOpen()} />
      <Button bg={bgButton} variant="no-effects" onClick={toggleColorMode} display="flex" p="0px" alignItems="center" justifyContent="center">
        <Icon h="24px" w="24px" color="white" as={colorMode === "light" ? MoonIcon : SunIcon} />
      </Button>
    </Box>
  );
}
