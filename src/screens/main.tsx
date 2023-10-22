import React, { useCallback, useState } from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  useTheme,
  useColorMode,
  useColorModeValue,
} from "native-base";
import { Pressable } from "react-native";
import ThemeSwitch from "../components/theme-switch";
import TaskItem from "../components/task-item";

export default function MainScreen(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const handlePressCheckbox = useCallback(() => {
    setChecked((prev: boolean = false) => !prev);
  }, []);
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </Box>
        <ThemeSwitch />
      </VStack>
    </Center>
  );
}
