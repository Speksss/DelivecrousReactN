import React from 'react';
import Menu from './components/Menu';
import DishList from './components/DishList';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

const data = ()=>{
  let d = [];
  for(var i=1;i<=15;i++){
    d.push({id: i+'', name: 'Dish',description: 'Description Dish', price: i, allergens: ['Allergen 3', 'Allergen 4']});
  }
  return d;
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu style={styles.menu}/>
      <View style={styles.list}>
        <DishList data={data} which='All'/>
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
