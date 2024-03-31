import { View, Text } from "react-native";
import styles from "../styles/appStyles";

const QuizTab = (props) => {
    return (
        <View style={styles.quizTabContainer}>
            <Text style={[styles.headerText, styles.whiteTextColor]}>Quiz</Text>
            <Text
            style={[styles.whiteTextColor, styles.subDescription]}
            >{props.descriptionText}</Text>
        </View>
    )
}

export default QuizTab;