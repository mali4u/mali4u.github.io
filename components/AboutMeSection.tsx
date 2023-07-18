import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions} from 'react-native';
import externalStyle from '../style/externalStyle';
import TextContainer from './TextContainer';
import React, {useState, useEffect } from 'react';

const AboutMeSection = () => {
    const menu = ['Myself', 'Education', 'Interests'];

    return(
        <View>
            <TextContainer title={'Hej på dig'} text={'Poppins: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Poppins: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. '} menu={menu}/>
        </View>
    );
}

export default AboutMeSection;