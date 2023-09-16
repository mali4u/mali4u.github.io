import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, useWindowDimensions, SafeAreaView, Platform, FlatList, Animated} from 'react-native';
import React, {useState, useEffect, useRef, Component} from 'react';
import externalStyle from '../style/externalStyle';
import NavBar from '../components/NavBar';
import { _ScrollView } from 'react-native';

const TestProjectPage = ({navigation, scrollAbout, scrollProjects, scrollContact}) => {
    //Save positions of views in scrollview
    const [dataSourceCords, setDataSourceCords] = useState([] as number[]);
    const [scrollToIndex, setScrollToIndex] = useState(0);
    const [ref, setRef] = useState<ScrollView>();

    //Scroll to view position saved in dataSource
    const scrollHandler = (key: number) => {
        if(dataSourceCords.length > scrollToIndex) {ref?.scrollTo({x:0, y: dataSourceCords[key], animated: true})}
    }

    //Animated header on scroll
    let scrollYOffset = useRef(new Animated.Value(0)).current;

    return(
        <View>
            <View style={{zIndex: 2}}>
                <NavBar isHome={false} 
                animationValue = {scrollYOffset}
                navigateHome={() => navigation.navigate('Home')} 
                scrollHome={() => navigation.navigate('Home')} 
                scrollAbout={() => navigation.navigate('Home') + scrollAbout}
                scrollContact={() => navigation.navigate('Home') + scrollProjects}
                scrollProjects={() => navigation.navigate('Home') + scrollContact}
                projects={[['TestProject', () => navigation.navigate('TestProject')]]}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} ref={ref => {setRef(ref as any);}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: { contentOffset: { y: scrollYOffset}}}], {useNativeDriver: false})}>
                        
            </ScrollView>
        </View>
    )
}

export default TestProjectPage;