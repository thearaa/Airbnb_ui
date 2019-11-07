//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Home extends Component {
    render() {
        return (
            <View style={{
                width: width / 2 - 30, height: width / 2 - 30, borderWidth: 0.4, borderColor: '#ddddd',
            }}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../assets/1.jpg')} style={{ alignSelf: 'stretch', flex: 1, width: 'auto', resizeMode: 'cover', }} />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 14, color: '#b63838' }}>
                        PRIVATE ROOM - 2 BEDS
                                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', }}>
                        The cozy place
                                    </Text>
                    <Text style={{ fontSize: 12 }}>
                        50$
                                    </Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
