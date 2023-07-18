
import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, useWindowDimensions, SafeAreaView, Platform, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect, useRef, Component} from 'react';
import externalStyle from '../style/externalStyle';

const TextContainer = ({title, text, menu}) => {
    const containerStyle = useStyles();
    

    return(
        <View style={containerStyle.container}>
            <Text style={useTextStylesTitle()}>{title}</Text>
            {(menu == null) ? null : createTextContainerMenu(menu)}
            <Text style={[externalStyle.P, containerStyle.textBox]}>{text}</Text>
        </View>
    )
}

export default TextContainer;

function createTextContainerMenu(menu){
    const containerStyle = useStyles();
    return(
        <View style={containerStyle.menu}>
            {menu.map((item, key) => ( 
                <Pressable style={containerStyle.menuItem}>
                    <Text style={[useTextStylesMenu(), externalStyle.grey]}>{'\u2022'}</Text>
                    <Text key={key} style={[useTextStylesMenu(), containerStyle.menuItemText, externalStyle.grey]}>{ item }</Text>
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
            maxWidth: 450,
            marginHorizontal: 33
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
            maxWidth: (width > 710) ? 128 : 97
            
        },
        menuItemText:{
            marginLeft: 7
        },
        textBox:{
            marginVertical: 34
        }
    })
}