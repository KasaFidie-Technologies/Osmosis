import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizGame')}
        >
        <Text>Next</Text>
      </TouchableOpacity>
      </View>
    );
  }

  export default Login;