import React,{useRef, useState} from 'react'
import Animated, {Easing, useAnimatedProps} from 'react-native'
import {Path, PathProps} from 'react-native-svg'
interface AnimatedStrokeProps extends PathProps{
    progress: Animated.SharedValue<number>

}

const AnimatedPath = Animated.createAnimatedComponent(Path)

const AnimatedStroke = ({progress, ...pathProps}: AnimatedStrokeProps) =>
const [length ,setLength] = useState(0)
const ref = useRef<typeof AnimatedPath>(null)
const animatedProps = useAnimatedProps(()=> ({
    strokeDashOffset: Math.max(
        0, length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value)-0
    )
}))

export default Stroke