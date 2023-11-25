import React, { useCallback } from "react";
import {
  Box,
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
} from "native-base";
import { type DrawerContentComponentProps } from "@react-navigation/drawer";
import ColorBox from "./color-box";
import ThemeSwitch from "./theme-switch";
import { Feather } from "@expo/vector-icons";
import MenuButton from "./menu-button";

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];
  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer();
  }, [navigation]);
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate("Main");
  }, [navigation]);
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate("About");
  }, [navigation]);

  return (
    <ColorBox
      safeArea
      flex={1}
      bg={useColorModeValue("blue.50", "darkBlue.800")}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue("blue.300", "darkBlue.700")}
            _icon={{
              as: Feather,
              name: "chevron-left",
              size: 6,
              color: useColorModeValue("blue.800", "darkBlue.700"),
            }}
          />
        </HStack>
        <Avatar
          source={require("../assets/")}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          User
        </Heading>
        <MenuButton
          active={currentRoute === "Main"}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === "About"}
          onPress={handlePressMenuAbout}
          icon="inbox"
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeSwitch />
      </Center>
    </ColorBox>
  );
};
export default Sidebar;
