import React, { useState, useEffect } from 'react';
import Dish from './Dish'
import { FlatList, SafeAreaView } from 'react-native';

export default function DishList(props) {
    const [dishes, setDishes] = useState(props.data);
    const [allOrChecked, setAllOrChecked] = useState(props.which)

    useEffect(()=>{
        if (allOrChecked == 'Checked'){
            let checkedDishes = [];
            dishes.forEach(element => {
                
            });(d=>{
                if (d.checked){
                    checkedDishes.push(d);
                }
            });
            setDishes(checkedDishes);
        }
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={dishes}
                renderItem={({ item }) => <Dish checked={false} name={item.name} description={item.description} allergens={item.allergens} price={item.price}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
