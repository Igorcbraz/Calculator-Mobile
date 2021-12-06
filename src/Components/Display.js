import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export function Display({value, history, action}){
    return(
      <View style={styles.display}>
        <TouchableHighlight onPress={action}>
          <Text 
            style={styles.miniDisplay} 
            numberofLines={1}
          >
            {history}
          </Text>
        </TouchableHighlight>

        <Text 
          style={styles.displayValue} 
          numberofLines={1}
        >
          {value || 0}
        </Text>
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
      fontSize: 22,
      color: '#c3c5c5',
      
      shadowColor: '#1d1e24',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.6,
      shadowRadius: 15,
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    displayValue: {
        fontSize: 55,
        color: '#fff'
    }
});
