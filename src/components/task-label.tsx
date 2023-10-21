import {
  Easing,
  useShared,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  interpolateColor,
  useSharedValue,
} from "react-native-reanimated";
import { Pressable } from "react-native";
import React, { useEffect, memo } from "react";
import { Text, HStack, Box } from "native-base";

interface Props {
  strikethrough: boolean;
  textColor: string;
  inactiveTextColor: string;
  onPress?: () => void;
  children?: React.ReactNode;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedHStack = Animated.createAnimatedComponent(HStack);

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedTaskLabel = memo((props: Props) => {
  const { strikethrough, textColor, inactiveTextColor, onPress, children } =
    props;

  const hstackOffset = useSharedValue(0);
  const hstackAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [{ translateX: hstackOffset.value }],
    }),
    [strikethrough],
  );

  const textColorProgress = useSharedValue(0);
  const textColorAnimatedStyles = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor],
      ),
    }),
    [strikethrough, textColor, inactiveTextColor],
  );

  const strikethroughWidth = useSharedValue(0);
  const strikethroughAnimatedStyles = useAnimatedStyle(
    () => ({
      width: `${strikethroughWidth.value * 100}%`,
      bordeeBottomColor: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [textColor, inactiveTextColor],
      ),
    }),
    [strikethrough, textColor, inactiveTextColor],
  );

  useEffect(() => {
    const easing = Easing.out(Easing.quad);
    if (strikethrough) {
      hstackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing }),
      );
      strikethroughWidth.value = withTiming(1, { duration: 400, easing });
      textColorProgress.value = withDelay(
        1000,
        withTiming(1, { duration: 400, easing }),
      );
    } else {
      strikethroughWidth.value = withTiming(0, { duration: 400, easing });
      textColorProgress.value = withTiming(0, { duration: 400, easing });
    }
  });

  return (
    <Pressable onPress={onPress}>
      <AnimatedHStack alignItems="center" styles={[hstackAnimatedStyles]}>
        <AnimatedText
          fontSize={19}
          noOfLines={1}
          isTruncated
          px={1}
          styles={[textColorAnimatedStyles]}
        >
          {children}
        </AnimatedText>
        <AnimatedBox
          position="absolute"
          h={1}
          borderBottomWidth={1}
          styles={strikethroughAnimatedStyles}
        />
      </AnimatedHStack>
    </Pressable>
  );
});

export default TaskLabel;
