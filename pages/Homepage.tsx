import {StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, useWindowDimensions, SafeAreaView, Platform, FlatList} from 'react-native';
import React, {useState, useEffect, useRef, Component} from 'react';
import externalStyle from '../style/externalStyle';
import NavBar from '../components/NavBar';
import AboutMeSection from '../components/AboutMeSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { _ScrollView } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';



const HomePage = ({navigation}) => {   
    //const scrollView = createScrollView();
    const scrollViewStyles = useStyles()
    const scrollViewRef = useRef<ScrollView>();
    const About = useRef<View>();
    const Projects = useRef<View>();
    const Contact = useRef<View>();

    

    return(
        <View>
            <NavBar isHome={true} 
            navigateHome={() => navigation.navigate('Home')} 
            scrollHome={() => scrollViewRef.current.scrollTo({y: 0})} 
            scrollAbout={() => About.current.measure((width, height, px, py, fx, fy) => {scrollViewRef.current.scrollTo({x: 0, y: fy - 70, animated: true});})}
            scrollContact={() => Contact.current.measure((width, height, px, py, fx, fy) => {scrollViewRef.current.scrollTo({x: 0, y: fy - 70, animated: true});})}
            projects={[['TestProject', () => navigation.navigate()]]}/>
               <View style={scrollViewStyles.container}>
                    <ScrollView ref={scrollViewRef}>
                        <View ref={About}>
                            <AboutMeSection/>
                        </View>
                        <View ref={Projects}>
                            <ProjectSection/>
                        </View>
                        <View ref={Contact}>
                            <ContactSection/>
                        </View>
                    </ScrollView>
                </View>
        </View>
    )
}

export default HomePage;


/*function measure(){
    this.refs.About.measure((width, height, px, py, fx, fy) => {
        console.log("++++++ fy " + fy + " " + height);
        this.setState({ scrollToHeight: fy });
        this.scrollToView(fy - 70);
    });
    this.refs.Projects.measure((width, height, px, py, fx, fy) => {
        console.log("++++++ fy " + fy + " " + height);
        this.setState({ scrollToHeight: fy });
        this.scrollToView(fy - 70);
    });
    this.refs.Contact.measure((width, height, px, py, fx, fy) => {
        console.log("++++++ fy " + fy + " " + height);
        this.setState({ scrollToHeight: fy });
        this.scrollToView(fy - 70);
    });
}

function scrollToView(fy){
    this.setState({scrollToHeight: fy});
    var scrollSize = parseInt(this.state.scrollToHeight);
    console.log("+++++ scrollSize " + scrollSize);

    this._scrollView.getScrollResponder().scrollTo({ x: 0, y: scrollSize, animated: true});
}*/


function useStyles(){
    const {width, height} = useWindowDimensions();

    return StyleSheet.create({
        itemStyle: {

        },
        itemSeparatorStyle:{

        },
        container:{

        }
    })
}