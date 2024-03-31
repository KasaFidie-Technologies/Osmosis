import React from "react";
import { View, Text, Image, TouchableOpacity} from "react-native";

import QuizTab from "./QuizTab";
import styles from "../styles/appStyles";
import descriptionVideo from '../../assets/scienceGamePreview.gif'

const tabData = [
    {
        videoText: "This video wil prepare you for the quiz"
    },
    {
    qualifyText: "Let us know if you are qualified for this quiz" 
    }
]

const buttonData = [
    {
      blueColor: "#66CFDD",
      buttomColor: "#48ABB1",
      optionText: "Next"
    },
    {
      wineColor: "#924C4C",
      buttomColor: "#DF7F7F",
      optionText: 'Back'
    },
  ]


const VideoPreview = ({ navigation }) => {
    handleOptionButton = () => {
        navigation.navigate("GradeVerify")
      }

    return (
        <View style={styles.videoPreviewContainer}>
        <QuizTab 
            descriptionText={tabData[0].videoText}
        />
        
        <View style={styles.videoContainer}>
        <Image 
            style={styles.shortVideo}
            source={descriptionVideo}
        />
        </View>
        
        <ContinueButton 
        buttonColor={buttonData[0].blueColor}
        buttomRadius={buttonData[0].buttomColor}
        option={buttonData[0].optionText}
        />

        <ContinueButton 
        buttonColor={buttonData[1].wineColor}
        buttomRadius={buttonData[1].buttomColor}
        option={buttonData[1].optionText}
        />
        
        </View>
    )
}

const ContinueButton = (props) => {
    return(
        <TouchableOpacity style={[styles.gradeButton, 
            {backgroundColor: props.buttonColor},
            {borderBottomColor: props.buttomRadius},
            ]}
            onPress={handleOptionButton}
            >
                <Text style={[styles.whiteTextColor, styles.gradeTxt]}>{props.option}</Text>
            </TouchableOpacity>
    )
  }
  

export default VideoPreview