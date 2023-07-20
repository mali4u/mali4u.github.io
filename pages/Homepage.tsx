import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, useWindowDimensions, SafeAreaView, Platform, FlatList} from 'react-native';
import React, {useState, useEffect, useRef, Component, useCallback} from 'react';
import externalStyle from '../style/externalStyle';
import NavBar from '../components/NavBar';
import AboutMeSection from '../components/AboutMeSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { _ScrollView } from 'react-native';



const HomePage = ({navigation}) => {   
    const scrollViewStyles = useStyles()

    const [dataSourceCords, setDataSourceCords] = useState([] as number[]);
    const [scrollToIndex, setScrollToIndex] = useState(0);
    const [ref, setRef] = useState<ScrollView>();
    
    const scrollHandler = (key: number) => {
        if(dataSourceCords.length > scrollToIndex) {ref?.scrollTo({x:0, y: dataSourceCords[key], animated: true})}
    }

    return(
        <View>
            <NavBar isHome={true} 
            navigateHome={() => navigation.navigate('Home')} 
            scrollHome={() => ref.scrollTo({x:0, y: 0, animated:true})} 
            scrollAbout={() => scrollHandler(1)}
            scrollContact={() => scrollHandler(3)}
            scrollProjects={() => scrollHandler(2)}
            projects={[['TestProject', () => navigation.navigate('TestProject')]]}/>
               <View style={scrollViewStyles.container}>
                    <ScrollView ref={ref => {setRef(ref as any);}}>
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
                </View>
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
            width: width
        }
    })
}