"use client";

import { useThemeContext } from "@/theme/theme-context";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import * as React from "react";
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";

export default function ColorModeButton() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Flex display="flex" justify={"end"} alignContent={"center"}>
      <Button
        onClick={toggleTheme}
        variant="outline"
        aria-label="Toggle color mode"
        size="sm"
        fontSize={"30px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin={"5px"}
        borderRadius="full"
      >
        {theme === "light" ? <CiLight /> : <MdNightlight />}
      </Button>
    </Flex>
  );
}
