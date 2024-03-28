import React from "react";
import { View, Button, Text } from "react-native";

function Login({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Play Game"
          onPress={() => navigation.navigate('QuizGame')}
        />
      </View>
    );
  }

  export default Login;