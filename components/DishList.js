import React from 'react';
import Dish from './Dish';
import dataDish from './../data/dataDish';
import { FlatList, SafeAreaView } from 'react-native';

export default function DishList(props) {
    return (
        <SafeAreaView>
            <FlatList
                data={dataDish}
                renderItem={({ item }) => <Dish dish={item}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
