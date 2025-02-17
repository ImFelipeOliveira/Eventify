"use client";

import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { SunIcon } from "@chakra-ui/icons";
import * as React from "react";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex display="flex" justify={"end"} alignContent={"center"}>
      <Button
        variant={"outline"}
        onClick={toggleColorMode}
        size="sm"
        fontSize={"30px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        margin={"5px"}
      >
        {colorMode === "light" ? (
          <MoonIcon />
        ) : (
          <SunIcon color={"whiteAlpha.400"} />
        )}
      </Button>
    </Flex>
  );
}
