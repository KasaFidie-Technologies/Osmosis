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

    gradeTxt: {
        fontSize: 20,
        color: 'white'
    },

    gradeButton:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        height: 50,
        width: "80%",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomWidth: 5,
    }

})

export default styles;