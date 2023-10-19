import React, { useCallback } from "react";
import { Pressable } from "react-native";
import { Box, useTheme, themeTools, useColorModeValue } from "native-base";
import Checkbox from "./checkbox";

interface Props {
  isDone: boolean;
}

const TaskItem = (props: Props) => {
  const { isDone } = props;
  const theme = useTheme();
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue("blue.500", "blue.400"),
  );
};

export default TaskItem;
