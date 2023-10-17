import * as React from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  useTheme,
  useColorMode,
  useColorModeValue,
  useColorModeValue,
} from "native-base";
import ThemeSwitch from "../components/theme-switch";
export default function MainScreen(): JSX.Element {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </Box>
        <ThemeSwitch />
      </VStack>
    </Center>
  );
}
