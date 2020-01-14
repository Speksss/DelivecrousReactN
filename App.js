import React from 'react';
import Dish from './components/Dish';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Projet Dev Mobile - Delivecrous</Text>
      <Dish name='nom1' description='decription' price='5' allergens='ftyvghbj'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
