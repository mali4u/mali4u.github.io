import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions, Pressable, Animated, FlatList} from 'react-native';
import externalStyle from '../style/externalStyle';
import * as Svg from 'react-native-svg'
import LogoGreen from '../assets/LogoGreen';
import { useRef, useState } from 'react';
import DropDownArrowSvg from '../assets/DropDownArrowSvg';
import { LinearGradient } from 'expo-linear-gradient';
import Gradient from 'react-native-css-gradient';
import {interpolate} from 'flubber';
import { Extrapolate, useAnimatedProps, useSharedValue } from 'react-native-reanimated';
import { useHover, useFocus, useActive } from 'react-native-web-hooks';

const NavBar = ({isHome, animationValue, navigateHome,  scrollHome, scrollAbout, scrollContact, scrollProjects, projects}) => {
    const navBarStyle = useStyles();
    const textStyle = useTextStyles();
    const dropDowntextStyle = useTextStylesDropDown();
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
    });

    const animatedLogoWidth = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [Logo_Max_Width, Logo_Min_Width],
        extrapolate: 'clamp'
    });

    const animatedMenuWidth = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [Menu_Max_Maxwidth, Menu_Min_Maxwidth],
        extrapolate: 'clamp'
    });

    const AnimatedText = Animated.createAnimatedComponent(Text);

    const animatedTextColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgb(248,248,248)", "rgb(47,49,66)"],
        extrapolate: 'clamp'
    });

    const animatedMenuColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgba(248,248,248,0)", "rgba(248,248,248,1.0)"], //dark blue = "rgba(49,36,99)"
        extrapolate: 'clamp'
    });

    const animatedDropDownColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ["rgb(49,36,99)", "rgb(248,248,248)"], 
        extrapolate: 'clamp'
    });

    const animatedFocusedColor = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: ['rgb(173,252,146)', "rgb(251,139,36)"], 
        extrapolate: 'clamp'
    });

    const animatedShadowOpacity = animationValue.interpolate({
        inputRange: [0, scroll_distance],
        outputRange: [0,1.0], 
        extrapolate: 'clamp'
    });

    //Dropdown
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const[visible, setVisible] = useState(false);
   
   /* const toggleDropdown = () =>{
        setVisible(!visible);
    };

    const fadeDropDown = () => {
      if(visible){
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
          toggleDropdown();
      }else{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        toggleDropdown();
      }  
    };*/

    const fadeOutDropDown = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
    };

    const fadeInDropDown = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }).start();
    };


    return(
        <View>
            <Animated.View style={[navBarStyle.navContainer, {backgroundColor:animatedMenuColor} ]}>
                <Animated.View style={[navBarStyle.menuItemContainer, {maxWidth: (width > 710) ? animatedMenuWidth : 420}]}>
                    <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollHome : navigateHome }>
                        <Animated.View style={{height: (width > 710) ? animatedLogoHeight : 35.55, width: (width > 710) ? animatedLogoWidth : 36}} >
                            <View>
                                <LogoGreen animationValue={animationValue} myScrollDistance={scroll_distance}/>
                            </View>
                        </Animated.View>
                    </Pressable>
                    <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollAbout : navigateHome + scrollAbout}>
                        <AnimatedText style={[textStyle, {color: animatedTextColor}]}>About me</AnimatedText>
                    </Pressable>
                    <View>
                        <Pressable style={[navBarStyle.menuItem]} onPress={scrollProjects}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                
                                <AnimatedText style={[textStyle, {color: animatedTextColor}]}>Projects</AnimatedText>
                                <View style={navBarStyle.dropdownArrow}>
                                    <DropDownArrowSvg version={1} animationValue={animationValue} myScrollDistance={scroll_distance}/>
                                </View>

                            </View>
                        </Pressable>
                        <Animated.View style={{opacity:fadeAnim, position: 'absolute'}} onPointerLeave={fadeOutDropDown}>
                        
                                <Pressable style={[navBarStyle.menuItem, {width:15}]} onPress={scrollProjects} onHoverIn={fadeInDropDown}>
                                    <Animated.View style={[navBarStyle.shadowDropdown,{flexDirection: 'row', alignItems: 'center', backgroundColor: animatedDropDownColor, padding:14, paddingTop:-5, marginLeft:-13, borderRadius:7, width:120, height:85, marginTop:17}]}>
                                        
                                        <AnimatedText style={[textStyle, {color: animatedFocusedColor}]}>Projects</AnimatedText>
                                        <View style={[navBarStyle.dropdownArrow,{transform: [{ rotate: '180deg' }]}]}>
                                            <DropDownArrowSvg version={2} animationValue={animationValue} myScrollDistance={scroll_distance}/>
                                        </View>
                                        
                                    </Animated.View>
                                </Pressable>
                                <Animated.View style={[navBarStyle.shadowDropdown,navBarStyle.dropDownContainer,{backgroundColor:animatedDropDownColor}]}>
                                    <FlatList data={projects} renderItem={({item}) => 
                                        <View>
                                            <Pressable onPress={item.function}>
                                                <AnimatedText style={[dropDowntextStyle, {color:animatedTextColor}]}>{item.name}</AnimatedText>
                                            </Pressable>
                                        </View>
                                    }/>
                                </Animated.View>
                            
                        </Animated.View>
                    </View>
                    <Pressable style={navBarStyle.menuItem} onPress={(isHome == true) ? scrollContact : navigateHome + scrollContact}>
                        <AnimatedText style={[textStyle, {color: animatedTextColor}]}>Contact</AnimatedText>
                    </Pressable> 
                </Animated.View>
            </Animated.View>
            <Animated.View style={[navBarStyle.navContainer, navBarStyle.shadowMenu, {opacity:animatedShadowOpacity, height: 5, marginTop:-5, zIndex:-1}]}/>
        </View>
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

function useTextStylesDropDown(){
    const {width, height} = useWindowDimensions();
    return(
        (width > 710) ? externalStyle.H5 : externalStyle.H6
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
            justifyContent: 'center',
            height:46,
        },
        dropdownArrow:{
            width: (width > 710) ? 14 : 12,
            height: (width > 710) ? 9 : 7,
            marginLeft: 3
        },
        dropDownContainer:{
            width: (width > 710) ? 270 : width,
            flexDirection: 'column',
            paddingHorizontal: (width > 710) ? 18 : 35,
            height:100,
            zIndex:2,
            borderRadius:7, 
            marginLeft:-13, 
            marginTop:10
        },
        shadowDropdown:{
            shadowColor: '#171717',
            shadowOffset: {width: -1, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3
        },
        shadowMenu:{
            shadowColor: '#171717',
            shadowOffset: {width: -1, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3
        }
    });
}