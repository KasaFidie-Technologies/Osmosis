import { Image, View, Text} from "react-native"
import PigImg from '../../assets/pig.png'

import styles from "../styles/appStyles"
import QuizTab from "./QuizTab"

const tabData = [
    {
    qualifyText: "Let us know if you are qualified for this quiz" 
    }
]

const GradeVerify = () => {
    return (
        <View style={styles.videoPreviewContainer}>
            <QuizTab 
                descriptionText={tabData[0].qualifyText}
            />

            <Image
            source={PigImg}
            />
        </View>
    )
}

export default GradeVerify;