import React from 'react';
import {StyleSheet, Dimensions, Text, TouchableHighlight} from 'react-native';

export function Buttons({action, label, double, triple, operation}){
    const stylesButton = [styles.button];
    if(double) stylesButton.push(styles.buttonDouble);
    if(triple) stylesButton.push(styles.buttonTriple);
    if(operation) stylesButton.push(styles.buttonoperation);

    return(
      <TouchableHighlight onPress={action}>
        <Text style={stylesButton}>{label}</ Text>
      </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    textAlign: 'center',
    borderwidth: 1,
    borderColor: '#BBB',
    color: '#e3e3e3',
    borderRadius: 100,
    backgroundColor: '#282a32'
  },
  buttonoperation: {
      color: '#fff',
      backgroundColor: '#136a8a'
  },
  buttonDouble: {
      width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
      width: (Dimensions.get('window').width / 4) * 3,
      backgroundColor: '#267871'
  }
});
// ff9966