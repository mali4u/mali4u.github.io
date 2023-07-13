import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import externalStyle from '../style/externalStyle';


const NavBar = () => {

    return(
        <View>
            <View>
                <TouchableOpacity>
                    {/*<Image style={navBarStyle.logo} source={require('')}/>*/}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={externalStyle.H3}>About me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={externalStyle.H3}>Projects</Text>
                    {/*<Image style={navBarStyle.dropdownArrow} source={require('')}/>*/}
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={externalStyle.H3}>Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NavBar;

const navBarStyle = StyleSheet.create({
    navContainer:{
        flexDirection: 'row',
        flex: 1
    },
    menuItemContainer:{
        maxWidth:710
    },
    logo:{

    },
    dropdownArrow:{

    }
});