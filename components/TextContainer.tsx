
import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, useWindowDimensions, SafeAreaView, Platform, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect, useRef, Component} from 'react';
import externalStyle from '../style/externalStyle';
import FrameAbout from '../assets/FrameAbout';

const TextContainer = ({title, text, menu}) => {
    const containerStyle = useStyles();
    const scrollViewRef = useRef<ScrollView>();

    return(
        <View style={containerStyle.container}>
                
                <View style={containerStyle.aboutMeImage}>
                    {(title == 'About me') ? aboutImage():null}
                </View>
                <View style={{maxWidth:100, flex:1, height:100}}/>
                <View style={containerStyle.textContainer}>
                    <Text style={useTextStylesTitle()}>{title}</Text>
                    {(menu == null) ? null : createTextContainerMenu(menu)}
                    <ScrollView ref={scrollViewRef}>
                        <Text style={[externalStyle.P, containerStyle.textBox]}>{text}</Text>
                    </ScrollView>
                </View>
                
        </View>
    )
}

export default TextContainer;

function aboutImage(){
    return(
        <View>
            <View style={{zIndex:1}}>
               <FrameAbout/>
            </View>
            <Image style={{width:305, height:400, zIndex:2, position:'absolute', marginTop:137.5, marginLeft:87.5}} source={require('../assets/portfolio-bild.png')}/>
        </View>
    )
}

function createTextContainerMenu(menu){
    const containerStyle = useStyles();
    return(
        <View style={containerStyle.menu}>
            {menu.map((item, key) => ( 
                <Pressable key={key} style={containerStyle.menuItem}>
                    <Text style={[useTextStylesMenu(), externalStyle.grey]}>{'\u2022'}</Text>
                    <Text style={[useTextStylesMenu(), containerStyle.menuItemText, externalStyle.grey]}>{item }</Text>
                </Pressable>
            ))}
        </View>
    )
}

function useTextStylesTitle(){
    const {width, height} = useWindowDimensions();
    return(
        (width > 710) ? externalStyle.H2 : externalStyle.H3
    )
}

function useTextStylesMenu(){
    const {width, height} = useWindowDimensions();
    return(
        (width > 710) ? externalStyle.H4 : externalStyle.H5    
    )
}

function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        container:{
            justifyContent:'center', 
            alignItems:'center', 
            flex: 1, 
            flexDirection: (width>882)?'row':'column-reverse'
        },
        aboutMeImage:{
            marginLeft: (width>882) ? 0 : -75,
        },
        textContainer:{
            maxWidth: 450,
            marginHorizontal: 33,
            marginTop: 100,
        },
        menu:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: 322,
            marginTop: 15
        },
        menuItem:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            maxWidth: (width > 882) ? 128 : 97
            
        },
        menuItemText:{
            marginLeft: 7
        },
        textBox:{
            marginVertical: 34
        }
    })
}