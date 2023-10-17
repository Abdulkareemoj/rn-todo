import React, {useEffect, memo} from 'react'
import Animated, {Easing, useSharedValue, useAnimatedProps, withTiming, interpolateColor } from 'react-native-reanimated'
import Svg, {Path, Defs, ClipPath, G} from 'react-native-svg'

const MARGIN = 10
const vWidth = 64 + MARGIN
const vHeight = 64 + MARGIN
// const checkMarkPath = 
// const outlineBoxPath = 
// const {checked} = props
const checkmarkColor = '#000000'
const highlightColor = '#ff0000'
const boxOutlineColor = '#000000'
const progress = useSharedValue(0)



useEffect(() => {
  progress.value = withTiming(checked ? 1 : 0, {
 duration: Easing.linear)}
}, [checked])

const animatedBoxProps = useAnimatedProps(() => {
   stroke: interpolateColor(Easing.bezier(0.16, 1, 0.3, 1)(progress.value), [0, 1], [boxOutlineColor, highlightColor] 'RGB' ),
   fill: interpolateColor(Easing.bezier(0.16, 1, 0.3, 1)(progress.value), [0, 1], [boxOutlineColor, highlightColor] 'RGB' ),
   

})
const Checkbox = () => {
    <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN ].join ('')}>
       

       <Path 
       d={outlineBoxPath} />
       
       <Path d={checkMarkPath} stroke="black"/>      
        </Svg>
}

export default Checkbox