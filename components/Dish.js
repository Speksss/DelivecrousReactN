import React from 'react';
import { Modal, TouchableHighlight, StyleSheet, Text, View } from 'react-native';

export default class Dish extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : props.name,
      description : props.description,
      price : props.price,
      allergens : props.allergens,
      visible : false,
    }
  }

  render(){
      return (
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.visible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View>
              <View>
              <Text>{this.state.name} - {this.state.description} - {this.state.price} - {this.state.allergens}</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({visible : false});
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableHighlight onPress={() => {
                this.setState({visible : true});
              }}>
            <Text>{this.state.name} - {this.state.description} - {this.state.price} - {this.state.allergens}</Text>
          </TouchableHighlight>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
