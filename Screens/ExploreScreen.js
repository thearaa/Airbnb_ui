import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { PostCardComponent, CardComponent } from '../Components/CardComponent';

export class ExploreScreen extends React.Component {
  render(){
      return (
          <View style={styles.container}>
          <CardComponent/>
          </View>
         
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
