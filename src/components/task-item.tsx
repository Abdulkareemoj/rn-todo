import React, { useCallback } from "react";
import { Pressable } from "react-native";
import {
  Box,
  useTheme,
  themeTools,
  useColorModeValue,
  HStack,
  Icon,
} from "native-base";
import Checkbox from "./checkbox";
import TaskLabel from "./task-label";
interface Props {
  isDone: boolean;
  onToggleCheckbox?: () => void;
}

const TaskItem = (props: Props) => {
  const { isDone } = props;
  const theme = useTheme();
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue("blue.500", "blue.400"),
  );
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue("mute.300", "mute.500"),
  );
  const checkMarkColor = themeTools.getColor(
    theme,
    useColorModeValue("white", "white"),
  );
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue("darkText", "lightText"),
  );
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue("mute.400", "mute.600"),
  );

  return (
    <HStack>
      {" "}
      <Box width={30} height={40} mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <Checkbox
            checkmarkColor={checkMarkColor}
            highlightColor={highlightColor}
            boxOutlineColor={boxOutlineColor}
            checked={isDone}
          />
        </Pressable>
        <TaskLabel
          textColor={activeTextColor}
          inactiveTextColor={doneTextColor}
          strikeThrough={isDone}
        >
          Task Item
        </TaskLabel>
      </Box>
    </HStack>
  );
};

export default TaskItem;
