import React from "react";
import { Dimensions } from "react-native";
import {
  PanGestureHandler,
  type PanGestureHandlerGestureEvent,
  type PanGestureHandlerProps,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import makeStyledComponent from "../utils/styled";

const StyledView = makeStyledComponent(Animated.View);
interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  children: React.ReactNode;
  backView?: React.ReactNode;
  onSwipeLeft?: () => void;
}

const SwipeView = (props: Props) => {
  const { children, backView, onSwipeLeft, simultaneousHandlers } = props;
  const translateX = useSharedValue(0);
  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = Math.max(-128, Math.min(0, event.translationX));
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        onSwipeLeft != null && runOnJS(onSwipeLeft)();
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  return (
    <StyledView w="full">
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <StyledView style={facadeStyle}></StyledView>
      </PanGestureHandler>
    </StyledView>
  );
};
export default SwipeView;
