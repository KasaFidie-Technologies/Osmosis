import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const VerificationScreen = ({navigation}) => {
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(30);

  const handleResendCode = () => {
    
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almost there</Text>
      <Text style={styles.description}>
        Please enter the 6-digit code sent to your email gamifyapp@gmail.com
        for verification.
      </Text>

      <View style={styles.codeInputContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => setCode(code + text)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY</Text>
      </TouchableOpacity>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive any code?</Text>
        <TouchableOpacity onPress={handleResendCode}>
          <Text style={styles.resendLink}>
            Resend Again
          </Text>
        </TouchableOpacity>
        
      </View>
      <Text style = {styles.resendTextin}>Request new code {timer > 0 && ` in ${timer}s`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    //fontFamily: "Montserrat",
  },
  description: {
    fontSize: 14,
    fontFamily: "Montserrat",
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    backgroundColor: "#E8E7E7",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#E8E7E7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  resendText: {
    marginRight: 5,
  },
  resendLink: {
    color: '#007bff',
  },
  resendTextin: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5

  },
});

export default VerificationScreen;