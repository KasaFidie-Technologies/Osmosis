import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

function Login({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('VideoPreview')}
        >
        <Text>Next</Text>
      </TouchableOpacity>
      </View>
    );
  }

  export default Login;