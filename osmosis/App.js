import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './src/components/SignUp';
import Signin from './src/components/Signin';
import VerificationScreen from "./src/components/VerificationScreen";
import SplashScreen from './src/components/SplashScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
     
   <NavigationContainer>
     <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;