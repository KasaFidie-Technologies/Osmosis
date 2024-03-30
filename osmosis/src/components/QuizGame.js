import React from "react"
import { View, Text, Image, TouchableOpacity} from "react-native"
import { StatusBar } from "expo-status-bar"

import StudentsImg from "../../assets/students.png"
import styles from "../styles/appStyles"


const buttonData = [
  {
    blueColor: "#66CFDD",
    buttomColor: "#48ABB1"
  },
  {
    wineColor: "#924C4C",
    buttomColor: "#DF7F7F"
  },
]

const QuizGame = ({ navigation }) => {
  const nums = [];

  for(x=1; x<=6; x++){
    nums.push(x)
  }

    return (
      
    <View style={styles.quizContainer}>
    <StatusBar hidden/>
      <Image 
      style={styles.studentImg}
      source={StudentsImg} />

      <Text style={styles.gradeSelect}>Please select your grade</Text>

      <GradeButton 
        buttonColor={buttonData[0].blueColor}
        buttomRadius={buttonData[0].buttomColor}
        grade={nums[0]}
      />
      <GradeButton 
        buttonColor={buttonData[1].wineColor}
        buttomColor={buttonData[1].buttomColor}
        grade={nums[1]}
      />
      <GradeButton 
        buttonColor={buttonData[1].wineColor}
        buttomColor={buttonData[1].buttomColor}
        grade={nums[2]}
      />
      <GradeButton 
        buttonColor={buttonData[1].wineColor}
        buttomColor={buttonData[1].buttomColor}
        grade={nums[3]}
      />
      <GradeButton 
        buttonColor={buttonData[1].wineColor}
        buttomColor={buttonData[1].buttomColor}
        grade={nums[4]}
      />
      <GradeButton 
        buttonColor={buttonData[1].wineColor}
        buttomColor={buttonData[1].buttomColor}
        grade={nums[5]}
      />

    </View>
    )
}

const GradeButton = (props) => {
 
  return(
    <TouchableOpacity style={[styles.gradeButton, 
    {backgroundColor: props.buttonColor},
    {borderBottomColor: props.buttomRadius},
    ]}
    onPress={() => navigation.navigate('VideoPreview')}
    >
   
        <Text style={styles.gradeTxt}>Grade {props.grade}</Text>
    </TouchableOpacity>
  )
}

export default QuizGame;