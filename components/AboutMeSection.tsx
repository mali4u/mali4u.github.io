import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions} from 'react-native';
import externalStyle from '../style/externalStyle';
import TextContainer from './TextContainer';
import React, {useState, useEffect } from 'react';

const AboutMeSection = () => {
    const menu = ['Myself', 'Education', 'Interests'];

    return(
        <View>
            <TextContainer title={'Hej på dig'} text={'Hej på dig! Hoppas du mår bra idag.'} menu={menu}/>
        </View>
    );
}

export default AboutMeSection;