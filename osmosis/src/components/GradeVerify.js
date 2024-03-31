import { Image, View, Text, TouchableOpacity} from "react-native"
import PigImg from '../../assets/pig.png'

import styles from "../styles/appStyles"
import QuizTab from "./QuizTab"

const tabData = [
    {
    qualifyText: "Let us know if you are qualified for this quiz" 
    }
]

const optionButtonData = [
    {
      blueColor: "#66CFDD",
      buttomColor: "#924C4C",
      optionText: "Dog"
    },
    {
      wineColor: "#857A7A",
      buttomColor: "#DF7F7F",
      optionText: 'Back'
    },
  ]

const GradeVerify = () => {
    return (
        <View style={styles.videoPreviewContainer}>
            <QuizTab 
                descriptionText={tabData[0].qualifyText}
            />
            <Image
            source={PigImg}
            style={styles.pigStyles}
            />
            <Text style={styles.verifyTextSelect}>
                Select the correct answer
            </Text>

            <View style={styles.buttonSelectContainer}>
            <OptionButton 
                 buttonColor={optionButtonData[1].wineColor}
                buttomRadius={optionButtonData[0].buttomColor}
                option={optionButtonData[0].optionText}
            />
            <OptionButton 
                buttonColor={optionButtonData[1].wineColor}
                buttomRadius={optionButtonData[0].buttomColor}
                option={optionButtonData[0].optionText}
           
            />
            </View>

            <View style={styles.buttonSelectContainer}>
            <OptionButton 
                buttonColor={optionButtonData[1].wineColor}
                buttomRadius={optionButtonData[0].buttomColor}
                option={optionButtonData[0].optionText}
           
            />
            <OptionButton 
                      buttonColor={optionButtonData[1].wineColor}
                buttomRadius={optionButtonData[0].buttomColor}
                option={optionButtonData[0].optionText}
           
            />
            </View>
            
        </View>
    )
}


const OptionButton = (props) => {
    return(
      <TouchableOpacity style={[styles.optionSelectButton, 
      {backgroundColor: props.buttonColor},
      {borderBottomColor: props.buttomRadius},
      ]}
      onPress={handleGradeButton}
      >
          <Text style={[styles.whiteTextColor, styles.gradeTxt]}>Grade {props.grade}</Text>
      </TouchableOpacity>
    )
  }

export default GradeVerify;