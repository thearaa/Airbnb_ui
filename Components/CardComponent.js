//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Body, Left, Right, Thumbnail, } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';

// create a component
export class CardComponent extends Component {
    render() {
        return (
            <SafeAreaView>
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Image source={require('../assets/1.jpg')} style={{ width: 380, height: 200}} /> 
                    </CardItem>
                    <CardItem>
                    <Text>Siem Reap</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Image source={require('../assets/1.jpg')} style={{ width: 380, height: 200}} /> 
                    </CardItem>
                    <CardItem>
                    <Text>Siem Reap</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Image source={require('../assets/1.jpg')} style={{ width: 380, height: 200}} /> 
                    </CardItem>
                    <CardItem>
                    <Text>Siem Reap</Text>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Image source={require('../assets/1.jpg')} style={{ width: 380, height: 200}} /> 
                    </CardItem>
                    <CardItem>
                    <Text>Siem Reap</Text>
                    </CardItem>
                </Card>
            </ScrollView>
            </SafeAreaView>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       marginTop: 50

    },
});
