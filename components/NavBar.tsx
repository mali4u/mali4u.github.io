import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions, Pressable, Animated} from 'react-native';
import externalStyle from '../style/externalStyle';
import * as Svg from 'react-native-svg'
import LogoGreen from '../assets/LogoGreen';
import { useRef } from 'react';



const NavBar = ({isHome, animationValue, navigateHome,  scrollHome, scrollAbout, scrollContact, scrollProjects, projects}) => {
    const navBarStyle = useStyles();
    const textStyle = useTextStyles();
    const {width, height} = useWindowDimensions();
    {/*const {logo, dropDownArrow} = getImages()*/}   

    //Logga animation
    const Logo_Max_Height = 63;
    const Logo_Min_Height = 45.57;
    const scroll_distance= Logo_Max_Height - Logo_Min_Height;

    const Logo_Max_Width = 62.5;
    const Logo_Min_Width = 45;

    const Menu_Max_Maxwidth = 667;
    const Menu_Min_Maxwidth = 550;

    /*const AnimatedLogo = Animated.createAnimatedComponent(LogoGreen);

    const animatedLogoColorML = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgb(254,254,254)", "rgb(32,33,44)"],
        extrapolate: 'clamp'
    })

    const animatedLogoColorBulb = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgb(173,252,146)", "rgb(251,139,36)"],
        extrapolate: 'clamp'
    })*/

    /*const animatedLogoOpacity = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    const animatedLogoOpacityReverse = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })*/


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



    return(
        <View style={navBarStyle.navContainer}>
            <Animated.View style={[navBarStyle.menuItemContainer, {maxWidth: (width > 710) ? animatedMenuWidth : 420}]}>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollHome : navigateHome}>
                    <Animated.View style={{height: (width > 710) ? animatedLogoHeight : 35.55, width: (width > 710) ? animatedLogoWidth : 36}} >
                        <View>
                            <LogoGreen animationValue={animationValue} myScrollDistance={scroll_distance}/>
                        </View>
                    </Animated.View>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollAbout : navigateHome + scrollAbout}>
                    <Text style={textStyle}>About me</Text>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} >
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={textStyle}>Projects</Text>
                        <Image style={navBarStyle.dropdownArrow} source={require('../assets/dropDownArrow.png')}/>
                    </View>
                </Pressable>
                <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollContact : navigateHome + scrollContact}>
                    <Text style={textStyle}>Contact</Text>
                </Pressable>
                
            </Animated.View>
        </View>
    )
}

export default NavBar;

//Get logo in right size
function getImages(){
    const {width, height} = useWindowDimensions();
    return(
        {/*(width > 710) ? require('../assets/Logo-green.png') : require('')*/}
    )
}

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
            backgroundColor: 'blue',
            justifyContent: 'center',
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