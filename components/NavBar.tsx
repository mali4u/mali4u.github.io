import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions} from 'react-native';
import externalStyle from '../style/externalStyle';
import * as Svg from 'react-native-svg'


const NavBar = () => {
    const navBarStyle = useStyles();
    const textStyle = useTextStyles()
    {/*const {logo, dropDownArrow} = getImages()*/}

    return(
        <View style={navBarStyle.navContainer}>
            <View style={navBarStyle.menuItemContainer}>
                <TouchableOpacity style={navBarStyle.menuItem}>
                    <Image style={navBarStyle.logo} source={require('../assets/Logo-green.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={navBarStyle.menuItem}>
                    <Text style={textStyle}>About me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={navBarStyle.menuItem}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={textStyle}>Projects</Text>
                        <Image style={navBarStyle.dropdownArrow} source={require('../assets/dropDownArrow.png')}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={navBarStyle.menuItem}>
                    <Text style={textStyle}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar;

function getImages(){
    const {width, height} = useWindowDimensions();
    return(
        {/*(width > 710) ? require('../assets/Logo-green.png') : require('')*/}
    )
}

function useTextStyles(){
    const {width, height} = useWindowDimensions();
    return(
        (width > 710) ? externalStyle.H3 : externalStyle.H5
    )
}

function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        navContainer:{
            width: "100%",
            backgroundColor: 'blue',
            justifyContent: 'center'
        },
        menuItemContainer:{
            flexDirection: 'row',
            maxWidth:(width > 710) ? 710 : 420,
            paddingVertical: (width > 710) ? 19 : 13,
            paddingHorizontal: (width > 710) ? 61 : 20,
            justifyContent: 'space-between'
        },
        menuItem:{
            
            justifyContent: 'center',
            
        },
        logo:{
            width: (width > 710) ? 62.5 : 35.55,
            height: (width > 710) ? 63 : 36,
        },
        dropdownArrow:{
            width: (width > 710) ? 14 : 12,
            height: (width > 710) ? 9 : 7,
            marginLeft: 3
        }
    });
}