import {StyleSheet, Text, View, Image, ScrollView, useWindowDimensions, Animated} from 'react-native';
import React, {useState, useEffect, useRef, Component, useCallback} from 'react';
import externalStyle from '../style/externalStyle';
import NavBar from '../components/NavBar';
import AboutMeSection from '../components/AboutMeSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { _ScrollView } from 'react-native';



const HomePage = ({navigation}) => {   
    const scrollViewStyles = useStyles()

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

    const animatedTopMargin = scrollYOffset.interpolate({
        inputRange: [0, 17.43],
        outputRange: [-101, -83.57],
        extrapolate: 'clamp'
    })

    return(
        <View>
            <View style={{zIndex: 2}}>
                <NavBar isHome={true} 
                animationValue = {scrollYOffset}
                navigateHome={() => navigation.navigate('Home')} 
                scrollHome={() => ref.scrollTo({x:0, y: 0, animated:true})} 
                scrollAbout={() => scrollHandler(1)}
                scrollContact={() => scrollHandler(3)}
                scrollProjects={() => scrollHandler(2)}
                projects={[['TestProject', () => navigation.navigate('TestProject')]]}/>
            </View>
               <Animated.View style={[scrollViewStyles.container /*, {marginTop: animatedTopMargin}*/]}>
                    <ScrollView showsVerticalScrollIndicator={false} ref={ref => {setRef(ref as any);}} scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent: { contentOffset: { y: scrollYOffset}}}], {useNativeDriver: false})}>
                        <View key={1} onLayout={event => {const layout = event.nativeEvent.layout; dataSourceCords[1] = layout.y}}>
                            <AboutMeSection/>
                        </View>
                        <View key={2} onLayout={event => {const layout = event.nativeEvent.layout; dataSourceCords[2] = layout.y}}>
                            <ProjectSection/>
                        </View>
                        <View key={3} onLayout={event => {const layout = event.nativeEvent.layout; dataSourceCords[3] = layout.y}}>
                            <ContactSection/>
                        </View>
                    </ScrollView>
                </Animated.View>
        </View>
    )
}

export default HomePage;

function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        itemStyle: {

        },
        itemSeparatorStyle:{

        },
        container:{
            height: height,
            width: width,
            backgroundColor: "rgb(248,248,248)",
            position: "absolute"
        }
    })
}