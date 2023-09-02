import React, { version } from 'react';
import {View, Text, Animated} from 'react-native';
import { interpolateColor, useAnimatedProps, useSharedValue } from 'react-native-reanimated';
import Svg, {Path, G, parse} from 'react-native-svg';

const white = "rgb(248,248,248)"; //#F8F8F8
const black = "rgb(47,49,66)"; //#2F3142
const green = "rgb(173,252,146)"; //#ADFC92

const DropDownArrowSvg = ({animationValue, myScrollDistance}) => {

    const AnimatedPath = Animated.createAnimatedComponent(Path);

    const animatedScrollColor = animationValue.interpolate({
        inputRange: [0, myScrollDistance],
        outputRange: [white, black],
        extrapolate: 'clamp'
    })

    return(
        <Svg
            width={'100%'}
            height={'100%'}
            viewBox="0 0 14 8"
            fill="none"
        >
            <AnimatedPath d="M7 8L0.937822 0.5L13.0622 0.500001L7 8Z" fill={animatedScrollColor} />
        </Svg>
    );
};

export default DropDownArrowSvg;