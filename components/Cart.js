import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Cart(props) {
    return (
        <View>
            <TouchableOpacity>
                <Icon
                    name='shopping-cart'
                    type='font-awesome'
                    color='#fff'
                />
            </TouchableOpacity>
        </View>
    );
}
