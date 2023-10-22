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
import SwipeView from "./swipe-view";
import { feather } from "@expo/vector-icons";
import { useColorMode } from "native-base";
interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  subject: string;
}

const TaskItem = (props: Props) => {
  const { isDone, onToggleCheckbox, onPressLabel, onRemove, subject } = props;
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
    <HStack
      alignItems="center"
      w="full"
      px={4}
      py={2}
      bg={useColorModeValue("warmGray.50", "primary.900")}
    >
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
