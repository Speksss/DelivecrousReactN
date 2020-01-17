import React, {useState} from 'react';
import { View } from 'react-native';
import {Header} from 'react-native-elements';
import Cart from './Cart';

export default function Menu(props) {
  const [left, setLeft] = useState(props.left);
  const [right, setRight] = useState(<Cart/>);

  return (
    <View>
      <Header
        leftComponent={left}
        centerComponent={{ text: 'DELIVECROUS', style: { color: '#fff' }}}
        rightComponent={right}
      />
    </View>
  );
}
