import React from 'react';
import { StyleSheet, View, FlatList, TouchableHighlight, Text } from 'react-native';

export function HistoryCounts({ route, navigation }){
    const history = route.params;

    return(
        <View style={styles.container}>
            <FlatList
                data={history}
                renderItem={({ item }) => (
                <TouchableHighlight style={styles.counts}
                    onPress={() => navigation.navigate('Calculator', item)}
                >
                    <Text style={styles.countsText}>
                        {item}
                    </Text>
                </TouchableHighlight>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282a32',
    },
    counts: {
      shadowColor: '#1d1e24',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.6,
      shadowRadius: 15,
      borderRadius: 15,
      paddingVertical: 15,
      paddingLeft: 15,
      marginVertical: 15,

      borderBottomWidth: 2,
      borderColor: '#282a32',
    }, 
    countsText: {
        fontSize: 24,
        color: '#FFF',
    }
  });
