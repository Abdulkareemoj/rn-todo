import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";

export default function ThemeSwitch(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      {" "}
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
      ></Switch>
      <Text>Light</Text>
    </HStack>
  );
}
