import React from 'react';
import Menu from './components/Menu';
import DishList from './components/DishList';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu style={styles.menu}/>
      <View style={styles.list}>
        <DishList/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu : {
    flex: 1,
  },
  list : {
    flex: 2,
  },
});
