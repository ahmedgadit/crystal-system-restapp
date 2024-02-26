"use client"

import { Inter } from "next/font/google";
import AppWrappers from "./AppWrappers";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body id={"root"}>
        <AppWrappers>
          <Header onSidebarOpen={toggleSidebar} />
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <Box mx="auto" h="90.9vh" minH="90.9vh" pt="0px">
            {children}
          </Box>
        </AppWrappers>
      </body>
    </html>
  );
}
