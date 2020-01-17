import React, {useState, useEffect} from 'react';
import Menu from './Menu';
import { TouchableHighlight, StyleSheet, Text, View, Modal } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Dish(props) {
  const [id, setId] = useState(props.id)
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [price, setPrice] = useState(props.price);
  const [allergens, setAllergens] = useState(props.allergens);
  const [checked, setChecked] = useState(props.checked);
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
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
          <Text>{name}</Text>
          <Text>{description}</Text>
          <Text>{price}</Text>
          <Text>{allergens}</Text>
          <CheckBox checked={checked} onPress={()=>setChecked(!checked)}/>
        </View>
      </Modal>
      <View>
        <TouchableHighlight onPress={() => setVisible(true)}>
          <Text>{name} - {price}</Text>
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
