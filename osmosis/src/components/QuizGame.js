import React from "react"
import { View, Text } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const QuizGame = ({ navigation}) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose your grade</Text>
    </View>
    )
}

export default QuizGame;