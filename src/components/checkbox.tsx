import React, { useEffect, memo } from "react";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedProps,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import Svg, { Path, Defs, ClipPath, G } from "react-native-svg";
import Stroke from "./stroke";

const MARGIN = 10;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;
// const checkMarkPath = M15 31.1977C23.1081 36.4884 29.5946 43 29.5946 4
// const outlineBoxPath =
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  checked?: boolean;
  checkmarkColor: string;
  highlightColor: string;
  boxOutlineColor: string;
}

const Checkbox = (props: Props): JSX.Element => {
  const { checked, checkmarkColor, highlightColor, boxOutlineColor } = props;

  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 300 : 100,
      easing: Easing.linear,
    });
  }, [checked]);

  const animatedBoxProps = useAnimatedProps(
    () => ({
      stroke: interpolateColor(
        Easing.bezier(0.16, 1, 0.3, 1)(progress.value),
        [0, 1],
        [boxOutlineColor, highlightColor],
        "RGB",
      ),
      fill: interpolateColor(
        Easing.bezier(0.16, 1, 0.3, 1)(progress.value),
        [0, 1],
        [boxOutlineColor, highlightColor],
        "RGB",
      ),
    }),
    [highlightColor, boxOutlineColor],
  );

  const Checkbox = () => {
    <Svg
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join("")}
    >
      <Defs>
        <ClipPath id="clipPath">
          <Path
            fill=" white"
            stroke="gray"
            strokeLinejoin="round"
            strokeLinecap="round"
            d={outlineBoxPath}
          />
        </ClipPath>
      </Defs>

      <G clipPath="url(clipPath)">
        <Stroke
          progress={progress}
          d={checkMarkPath}
          stroke={highlightColor}
          strokeWidth={10}
          strokeLineJoin="round"
          strokeLinecap="round"
          strokeOpacity={checked || false ? 1 : 0}
        />
        <AnimatedPath
          d={outlineBoxPath}
          strokeWidth={7}
          strokeLineJoin="round"
          strokeLinecap="round"
          animatedProps={animatedBoxProps}
        />
      </G>
    </Svg>;
  };

  return;
};

export default Checkbox;
