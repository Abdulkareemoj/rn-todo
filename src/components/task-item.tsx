import React, { useCallback } from "react";
import { type PanGestureHandlerProps } from "react-native-gesture-handler";
import {
  type NativeSyntheticEvent,
  Pressable,
  type TextInputChangeEventData,
} from "react-native";
import {
  Box,
  useTheme,
  themeTools,
  useColorModeValue,
  HStack,
  Icon,
  Input,
} from "native-base";
import Checkbox from "./checkbox";
import TaskLabel from "./task-label";
import SwipeView from "./swipe-view";
import { feather } from "@expo/vector-icons";

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  isDone: boolean;
  onToggleCheckbox?: () => void;
  onPressLabel?: () => void;
  onRemove?: () => void;
  subject: string;
  isEditing: boolean;
  onChangeSubject: (subject: string) => void;
  onFinishEditing?: () => void;
}

const TaskItem = (props: Props) => {
  const {
    isDone,
    onToggleCheckbox,
    onPressLabel,
    onRemove,
    subject,
    isEditing,
    simultaneousHandlers,
    onChangeSubject,
    onFinishEditing,
  } = props;
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

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text);
    },
    [onChangeSubject],
  );

  return (
    <>
      <SwipeView
        simultaneousHandlers={simultaneousHandlers}
        onSwipeLeft={onRemove}
        backView={
          <Box
            w="full"
            h="full"
            bg="red.500"
            alignItems="flex-end"
            justifyItems="center"
          >
            <Icon color="white" as={<Feather name="trash-2" size="sm" />} />
          </Box>
        }
      >
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
                boxOutlineColor={boxStroke}
                checked={isDone}
              />
            </Pressable>
          </Box>
          {isEditing ? (
            <Input
              placeholder="Task"
              value={subject}
              variant="unstyled"
              fontSize={20}
              px={1}
              py={0}
              autoFocus
              blurOnSubmit
              onChange={handleChangeSubject}
              onBlur={onFinishEditing}
            />
          ) : (
            <TaskLabel
              textColor={activeTextColor}
              inactiveTextColor={doneTextColor}
              strikeThrough={isDone}
              onPress={onPressLabel}
            >
              {subject}
            </TaskLabel>
          )}
        </HStack>
      </SwipeView>
    </>
  );
};

export default TaskItem;
