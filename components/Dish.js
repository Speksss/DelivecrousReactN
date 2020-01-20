import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import { TouchableHighlight, StyleSheet, Text, View, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Dish(props) {
  const [checked, setChecked] = useState(props.dish.checked);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    props.dish.checked = checked;
    if (checked){
      //rajouter au panier

    }
  }, [checked])

  return (
    <View style={styles.container}>
      <Modal
        animationType='flat'
        visible={visible}
        onRequestClose={() => {setVisible(false)}}>
        <Menu left={{icon : 'arrow-back', color : '#fff', onPress : ()=>setVisible(false)}}/>
        <View>
          <Text>{props.dish.name}</Text>
          <Text>{props.dish.description}</Text>
          <Text>{props.dish.price}</Text>
          <Text>{props.dish.allergens}</Text>
          <CheckBox checked={checked} onPress={()=>setChecked(!checked)}/>
        </View>
      </Modal>
      <View>
        <TouchableHighlight onPress={() => setVisible(true)}>
          <Text>{props.dish.name} - {props.dish.price}</Text>
        </TouchableHighlight>
        <CheckBox checked={checked} onPress={()=>setChecked(!checked)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'grey',
    borderRadius: 2,
    borderWidth: 1,
  },
});
