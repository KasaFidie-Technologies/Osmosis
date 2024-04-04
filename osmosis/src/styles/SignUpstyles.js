// LoginStyles.js

import { StyleSheet } from 'react-native';

const SignUpstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      alignItems: "center",
        
  
    },
    image: {
      width: 300,
      height: 180,
    
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 5,
      paddingTop: 30,
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 10,
    },
    form: {
      width: '80%',
    },
    input: {
      borderWidth: 2,
      borderColor: '#ccc',
      padding: 10,
      backgroundColor: "#F1F0F0",
      marginBottom: 15,
      borderRadius: 15,
      fontSize: 17,
      fontWeight: "400",
  
    },
    button: {
      backgroundColor: '#1C0674',
      padding: 10,
      alignItems: 'center',
      borderRadius: 13,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    footer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    footerText: {
      color: '#666',
    },
    footerLink: {
      color: '#1C0674',
      marginLeft: 5,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkbox: {
      width: 17,
      height: 17,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 5,
    },
    checkboxLabel: {
      fontSize: 8,
      color: '#666',
      flex: 1,
    },
  });

export default SignUpstyles;
