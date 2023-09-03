import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions, Pressable, Animated} from 'react-native';
import externalStyle from '../style/externalStyle';
import * as Svg from 'react-native-svg'
import LogoGreen from '../assets/LogoGreen';
import { useRef } from 'react';
import DropDownArrowSvg from '../assets/DropDownArrowSvg';
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from 'react-native-css-gradient';
import {interpolate} from 'flubber';
import { Extrapolate, useAnimatedProps, useSharedValue } from 'react-native-reanimated';



const NavBar = ({isHome, animationValue, navigateHome,  scrollHome, scrollAbout, scrollContact, scrollProjects, projects}) => {
    const navBarStyle = useStyles();
    const textStyle = useTextStyles();
    const {width, height} = useWindowDimensions(); 

    //Loggo size animation
    const Logo_Max_Height = 63;
    const Logo_Min_Height = 45.57;
    const scroll_distance= Logo_Max_Height - Logo_Min_Height;

    const Logo_Max_Width = 62.5;
    const Logo_Min_Width = 45;

    const Menu_Max_Maxwidth = 667;
    const Menu_Min_Maxwidth = 550;


    const animatedLogoHeight = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [Logo_Max_Height, Logo_Min_Height],
        extrapolate: 'clamp'
    })

    const animatedLogoWidth = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [Logo_Max_Width, Logo_Min_Width],
        extrapolate: 'clamp'
    })

    const animatedMenuWidth = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [Menu_Max_Maxwidth, Menu_Min_Maxwidth],
        extrapolate: 'clamp'
    })

    const AnimatedText = Animated.createAnimatedComponent(Text);

    const animatedTextColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgb(248,248,248)", "rgb(47,49,66)"],
        extrapolate: 'clamp'
    })

    const animatedMenuColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgba(248,248,248,0)", "rgba(248,248,248,1.0)"], //dark blue = "rgba(49,36,99)"
        extrapolate: 'clamp'
    })


    return(
        <Animated.View style={[navBarStyle.navContainer, {backgroundColor:animatedMenuColor}]}>
            <Animated.View style={[navBarStyle.menuItemContainer, {maxWidth: (width > 710) ? animatedMenuWidth : 420}]}>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollHome : navigateHome}>
                    <Animated.View style={{height: (width > 710) ? animatedLogoHeight : 35.55, width: (width > 710) ? animatedLogoWidth : 36}} >
                        <View>
                            <LogoGreen animationValue={animationValue} myScrollDistance={scroll_distance}/>
                        </View>
                    </Animated.View>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollAbout : navigateHome + scrollAbout}>
                    <AnimatedText style={[textStyle, {color: animatedTextColor}]}>About me</AnimatedText>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AnimatedText style={[textStyle, {color: animatedTextColor}]}>Projects</AnimatedText>
                        <View style={navBarStyle.dropdownArrow}>
                            <DropDownArrowSvg animationValue={animationValue} myScrollDistance={scroll_distance}/>
                        </View>
                    </View>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollContact : navigateHome + scrollContact}>
                    <AnimatedText style={[textStyle, {color: animatedTextColor}]}>Contact</AnimatedText>
                </Pressable>
                    
            </Animated.View>
        </Animated.View>
    )
}

export default NavBar;


//Get color depending on section
function getScrollStyle(){
    const {width, height} = useWindowDimensions();
    return StyleSheet.create({
        colorNavContainer:{

        },
        colorMenuItem:{

        }
    })
}

//Get right text size
function useTextStyles(){
    const {width, height} = useWindowDimensions();
    return(
        (width > 710) ? externalStyle.H4 : externalStyle.H6
    )
}

//Get styles
function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        navContainer:{
            width: "100%",
            justifyContent: 'center'
        },
        menuItemContainer:{
            flexDirection: 'row',
            paddingVertical: (width > 710) ? 19 : 13,
            paddingHorizontal: (width > 710) ? 61 : 20,
            justifyContent: 'space-between'
        },
        menuItem:{
            justifyContent: 'center'
        },
        dropdownArrow:{
            width: (width > 710) ? 14 : 12,
            height: (width > 710) ? 9 : 7,
            marginLeft: 3
        }
    });
}