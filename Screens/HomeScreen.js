//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, Dimensions, Image  } from 'react-native';
import { Directions, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../Components/Exploe/Category';
import { AuthSession } from 'expo';


// create a component
const {height, width} = Dimensions.get('window')
export class HomeScreen extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
            <SafeAreaView >
                <View style={styles.header}>
                    <View style={styles.headerlayout}>
                        <Icon name='ios-search' size={20} style={{ marginLeft: 20, marginRight: 10, color: '#ffffff' }}></Icon>
                        <TextInput placeholder='Try Phnom Penh' underlineColorAndroid='transparent' style={styles.headerText} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ marginTop: 10, flex: 1, marginLeft: 10 }}>
                        <Text style={{ fontSize: 25 , fontWeight: '700'}}>What can we help you find, Dara?</Text>
                    </View>
                    <View style={{ height: 130, marginTop: 20 }}>
                        <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator= {false}>
                            <Category imageuri={require('../assets/1.jpg')}
                                name='Home' />
                                 <Category imageuri={require('../assets/3.jpg')}
                                name='Experiences' />
                                 <Category imageuri={require('../assets/2.jpg')}
                                name='Restaurant' />
                                 <Category imageuri={require('../assets/3.jpg')}
                                name='Hotel' />
                        </ScrollView>
                        
                    </View>
                    <View style={{marginTop: 30, paddingHorizontal: 20}}>
                            <Text style={{fontSize: 24, fontWeight: '700'}}>Introducing Airbnb Plus</Text>
                            <Text style={{fontWeight: '100', marginTop: 10 }}>
                                A new home for the monster who need a place to find peace and comfort</Text>
                            <View style = {{width: width - 40, header: 200, marginTop: 20}}>
                                <Image source = {require('../assets/1.jpg')} 
                                style={{flex: 1, width: 372, height: 300, resizeMode: 'cover',}}/>
                            </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                            Homes around the world
                        </Text>
                        <View style={{paddingHorizontal: 20, marginTop: 20}}>
                            <View style={{width: width/2 - 30, height: width/2 -30, borderWidth: 0.4, borderColor: '#ddddd',
                             }}>
                                <View style={{flex: 1}}>
                                    <Image source = {require('../assets/1.jpg')} style={{  alignSelf: 'stretch', flex: 1, width: 'auto',resizeMode: 'cover',}}/>
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                                    <Text style={{fontSize: 14, color: '#b63838'}}>
                                        PRIVATE ROOM - 2 BEDS
                                    </Text>
                                    <Text style={{fontSize: 12, fontWeight: 'bold',}}>
                                        The cozy place
                                    </Text>
                                    <Text style={{fontSize: 12}}>
                                        50$
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    header: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        height: this.startHeaderHeight,
        backgroundColor: '#3498db'

    },
    headerText: {
        fontSize: 15,

    },
    headerlayout: {

        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#1abc9c',
        shadowOpacity: 0.2,
        elevation: 1
    },


});

