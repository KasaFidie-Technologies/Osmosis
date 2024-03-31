import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GradeVerify from './src/components/GradeVerify';
import SignUp from './src/components/SignUp';
import Signin from './src/components/Signin';
import VideoPreview from './src/components/VideoPreview';
import VerificationScreen from "./src/components/VerificationScreen";
import QuizGame from './src/components/QuizGame';
import Login from './src/components/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen 
        name="LogIn" 
        component={Login} 
        options={{ headerShown: false}}
        />
      
      <Stack.Screen 
        name="QuizGame" 
        component={QuizGame} 
        options={{ headerShown: false}}
        />

        <Stack.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{ headerShown: false}}
        />
        
        <Stack.Screen 
        name="VideoPreview" 
        component={VideoPreview} 
        options={{ headerShown: false}}
        />
        
        <Stack.Screen 
        name="Signin" 
        component={Signin} 
        options={{ headerShown: false}}
        />

        <Stack.Screen 
        name="VerificationScreen" 
        component={VerificationScreen} 
        options={{ headerShown: false}}
        />

        <Stack.Screen 
        name="GradeVerify" 
        component={GradeVerify} 
        options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;