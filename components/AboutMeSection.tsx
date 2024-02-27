import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, useWindowDimensions} from 'react-native';
import externalStyle from '../style/externalStyle';
import TextContainer from './TextContainer';
import React, {useState, useEffect } from 'react';

const AboutMeSection = () => {
    const menu = ['Myself', 'Education', 'Interests'];
    const AboutMeStyles = useStyles();

    return(
        <View style={AboutMeStyles.container}>
            <TextContainer title={'About me'} text={
                'Through my education as a Master of Science in interaction and design, I have experience in both development and UX design. During my studies I have loved to take part in projects where we in groups discuss, brainstorm and design solutions to problems based on the needs of different target groups. This is something I would like to continue with in my professional life. In the various projects that I have participated in, I am often the one who structures the work, and have also been called an idea generator. This since I have often come up with the basic ideas for projects, which motivates me to work diligently during the development of the product to reach the best end result possible. '
                } menu={null}/>
        </View>
    );
}

export default AboutMeSection;



function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        container:{
            width: "100%",
            justifyContent: 'center'
        }
    })

}