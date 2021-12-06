import React from 'react';

import { Calculator } from './src/pages/Calculator';
import { HistoryCounts } from './src/pages/HistoryCounts';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Calculator">
        <Stack.Screen name="Calculator" component={Calculator} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HistoryCounts" component={HistoryCounts}
          options={{
            title: 'Voltar'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
