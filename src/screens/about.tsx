import React from "react";
import {
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue,
  ScrollView,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import ColorBox from "../components/color-box";
import NavBar from "../components/navbar";
import Masthead from "../components/masthead";
import LinkButton from "../components/link-button";

const AboutScreen = (): JSX.Element => {
  return (
    <ColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "warmGray.900")}
      w="full"
    >
      <Masthead title="About this app" image={require("../assets")}>
        <NavBar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray", "primary.900")}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require("../assets")}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
            <Text>This where i will put an About Text</Text>
            <LinkButton
              colorScheme="red"
              size="lg"
              borderRadius="full"
              href="#"
              leftIcon={
                <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
              }
            >
              {" "}
              Go to link
            </LinkButton>
            <LinkButton
              colorScheme="red"
              size="lg"
              borderRadius="full"
              href="#"
              leftIcon={
                <Icon as={Feather} name="youtube" size="sm" opacity={0.5} />
              }
            >
              {" "}
              Go to link
            </LinkButton>
          </Box>
        </VStack>
      </ScrollView>
    </ColorBox>
  );
};

export default AboutScreen;
