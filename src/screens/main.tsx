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
import { AntDesign } from "@expo/vector-icons";
import ThemeSwitch from "../components/theme-switch";
import TaskItem from "../components/task-item";
import { nanoid } from "nanoid";

const initialData = [
  {
    id: nanoid(),
    subject: "Exist",
  },
  {
    id: nanoid(),
    subject: "Eat",
  },
];
export default function MainScreen(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const [subject, setSubject] = useState("Task Item");
  const [isEditing, setEditing] = useState(false);
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
        <TaskItem
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject={subject}
          onChangeSubject={setSubject}
          onPressLabel={() => {
            setEditing(true);
          }}
          isEditing={isEditing}
          onFinishEditing={() => {
            setEditing(false);
          }}
        />
        <ThemeSwitch />
      </VStack>
    </Center>
  );
}
