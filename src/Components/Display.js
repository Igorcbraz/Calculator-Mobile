import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export function Display({value, isHistory}){
    return(
      <View style={styles.display}>
        <Text 
          style={isHistory ? styles.miniDisplay : styles.displayValue} 
          numberofLines={1}
        
        >
          {value || 0}
        </ Text>
      </ View>
    );
}
const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba (0,0,0,0.5)',
        alignItems: 'flex-end',
    },
    miniDisplay: {
      fontSize: 20,
      color: '#fff'
    },
    displayValue: {
        fontSize: 55,
        color: '#fff'
    }
});
