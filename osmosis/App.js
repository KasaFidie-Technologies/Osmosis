import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QuizGame from './src/components/QuizGame';
import Login from './src/components/Login';
import VideoPreview from './src/components/VideoPreview';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="QuizGame" 
        component={QuizGame} 
        options={{ headerShown: false}}
        />
        
        <Stack.Screen 
        name="VideoPreview" 
        component={VideoPreview} 
        options={{ headerShown: false}}
        />
        
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;