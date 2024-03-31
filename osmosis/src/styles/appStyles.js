import {StyleSheet} from 'react-native';

const styles =  StyleSheet.create({
    quizContainer: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#D9D9D9',
    },

    studentImg: {
        width: "100%",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },

    gradeSelect: {
        marginTop: 10,
        fontSize: 30
    },

    whiteTextColor: {
        color: 'white'
    },

    gradeTxt: {
        fontSize: 20,
    },

    gradeButton:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        height: 50,
        width: "80%",
       borderRadius: 15,
        borderBottomWidth: 5,
    },

    videoPreviewContainer: {
        alignItems: 'center',
        flex: 1,
    },

    quizTabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: 150,
        backgroundColor: '#55A2DA'
    },

    headerText: {
        fontSize: 60,
    },

    subDescription: {
        fontSize: 20,
    },

    videoContainer: {
        width: '100%',
        height: 300,
        marginTop: 80,
        marginBottom: 50,
        backgroundColor: 'black'
    },

    shortVideo: {
        width: '100%',
        height: "100%"
    }
})

export default styles;